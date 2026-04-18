import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  AddActivityInput,
  CreateTripInput,
  Destination,
  DestinationFilter,
  Trip,
  TripStatus,
  UpdateActivityInput,
  UserProfile,
} from "../types";
import { STATIC_DESTINATIONS } from "../types";

// ------- Destinations -------

export function useDestinations(filter?: DestinationFilter) {
  return useQuery<Destination[]>({
    queryKey: ["destinations", filter],
    queryFn: async () => {
      let results = [...STATIC_DESTINATIONS];
      if (filter) {
        if (filter.minBudget !== undefined) {
          results = results.filter(
            (d) => d.estimatedDailyBudget >= filter.minBudget!,
          );
        }
        if (filter.maxBudget !== undefined) {
          results = results.filter(
            (d) => d.estimatedDailyBudget <= filter.maxBudget!,
          );
        }
        if (filter.minRating !== undefined) {
          results = results.filter((d) => d.rating >= filter.minRating!);
        }
        if (filter.tags.length > 0) {
          results = results.filter((d) =>
            filter.tags.some((tag) => d.tags.includes(tag)),
          );
        }
      }
      return results;
    },
    staleTime: Number.POSITIVE_INFINITY,
  });
}

export function useDestination(id: bigint | undefined) {
  return useQuery<Destination | null>({
    queryKey: ["destination", id?.toString()],
    queryFn: async () => {
      if (id === undefined) return null;
      return STATIC_DESTINATIONS.find((d) => d.id === id) ?? null;
    },
    enabled: id !== undefined,
    staleTime: Number.POSITIVE_INFINITY,
  });
}

// ------- Trips (local state via localStorage since backend methods not yet deployed) -------

function loadTrips(): Trip[] {
  try {
    const raw = localStorage.getItem("wanderplan_trips");
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Trip[];
    return parsed.map((t) => ({
      ...t,
      id: BigInt(t.id as unknown as string),
      destinationId: BigInt(t.destinationId as unknown as string),
      budget: BigInt(t.budget as unknown as string),
      itinerary: (t.itinerary ?? []).map((day) => ({
        ...day,
        dayNumber: BigInt(day.dayNumber as unknown as string),
        activities: (day.activities ?? []).map((act) => ({
          ...act,
          id: BigInt(act.id as unknown as string),
          durationMinutes: BigInt(act.durationMinutes as unknown as string),
        })),
      })),
    }));
  } catch {
    return [];
  }
}

function saveTrips(trips: Trip[]): void {
  localStorage.setItem("wanderplan_trips", JSON.stringify(trips));
}

export function useTrips() {
  const { identity } = useInternetIdentity();
  return useQuery<Trip[]>({
    queryKey: ["trips", identity?.getPrincipal().toString()],
    queryFn: async () => {
      if (!identity) return [];
      const userId = identity.getPrincipal().toString();
      return loadTrips().filter((t) => t.userId === userId);
    },
    enabled: !!identity,
  });
}

export function useTrip(id: bigint | undefined) {
  const { identity } = useInternetIdentity();
  return useQuery<Trip | null>({
    queryKey: ["trip", id?.toString()],
    queryFn: async () => {
      if (id === undefined) return null;
      return loadTrips().find((t) => t.id === id) ?? null;
    },
    enabled: id !== undefined && !!identity,
  });
}

export function useCreateTrip() {
  const queryClient = useQueryClient();
  const { identity } = useInternetIdentity();
  return useMutation({
    mutationFn: async (input: CreateTripInput): Promise<Trip> => {
      if (!identity) throw new Error("Not authenticated");
      const trips = loadTrips();
      const maxId = trips.reduce(
        (max, t) => (t.id > max ? t.id : max),
        BigInt(0),
      );
      const newTrip: Trip = {
        id: maxId + BigInt(1),
        userId: identity.getPrincipal().toString(),
        destinationId: input.destinationId,
        name: input.name,
        startDate: input.startDate,
        endDate: input.endDate,
        budget: input.budget,
        interests: input.interests,
        status: "planned",
        itinerary: [],
      };
      saveTrips([...trips, newTrip]);
      return newTrip;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trips"] });
    },
  });
}

export function useDeleteTrip() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (tripId: bigint): Promise<void> => {
      const trips = loadTrips().filter((t) => t.id !== tripId);
      saveTrips(trips);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trips"] });
      queryClient.invalidateQueries({ queryKey: ["trip"] });
    },
  });
}

export function useUpdateTripStatus() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      tripId,
      status,
    }: {
      tripId: bigint;
      status: TripStatus;
    }): Promise<void> => {
      const trips = loadTrips();
      const trip = trips.find((t) => t.id === tripId);
      if (!trip) throw new Error("Trip not found");
      trip.status = status;
      saveTrips(trips);
    },
    onSuccess: (_data, vars) => {
      queryClient.invalidateQueries({
        queryKey: ["trip", vars.tripId.toString()],
      });
      queryClient.invalidateQueries({ queryKey: ["trips"] });
    },
  });
}

export function useAddActivity() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input: AddActivityInput): Promise<void> => {
      const trips = loadTrips();
      const tripIndex = trips.findIndex((t) => t.id === input.tripId);
      if (tripIndex === -1) throw new Error("Trip not found");
      const trip = trips[tripIndex];
      let dayIndex = trip.itinerary.findIndex(
        (d) => d.dayNumber === input.dayNumber,
      );
      if (dayIndex === -1) {
        trip.itinerary.push({
          dayNumber: input.dayNumber,
          date: input.date,
          activities: [],
        });
        dayIndex = trip.itinerary.length - 1;
      }
      const day = trip.itinerary[dayIndex];
      const maxActId = day.activities.reduce(
        (max, a) => (a.id > max ? a.id : max),
        BigInt(0),
      );
      day.activities.push({
        id: maxActId + BigInt(1),
        time: input.time,
        title: input.title,
        description: input.description,
        durationMinutes: input.durationMinutes,
      });
      saveTrips(trips);
    },
    onSuccess: (_data, vars) => {
      queryClient.invalidateQueries({
        queryKey: ["trip", vars.tripId.toString()],
      });
    },
  });
}

export function useUpdateActivity() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input: UpdateActivityInput): Promise<void> => {
      const trips = loadTrips();
      const trip = trips.find((t) => t.id === input.tripId);
      if (!trip) throw new Error("Trip not found");
      const day = trip.itinerary.find((d) => d.dayNumber === input.dayNumber);
      if (!day) throw new Error("Day not found");
      const actIndex = day.activities.findIndex(
        (a) => a.id === input.activityId,
      );
      if (actIndex === -1) throw new Error("Activity not found");
      day.activities[actIndex] = {
        id: input.activityId,
        time: input.time,
        title: input.title,
        description: input.description,
        durationMinutes: input.durationMinutes,
      };
      saveTrips(trips);
    },
    onSuccess: (_data, vars) => {
      queryClient.invalidateQueries({
        queryKey: ["trip", vars.tripId.toString()],
      });
    },
  });
}

export function useRemoveActivity() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      tripId,
      dayNumber,
      activityId,
    }: {
      tripId: bigint;
      dayNumber: bigint;
      activityId: bigint;
    }): Promise<void> => {
      const trips = loadTrips();
      const trip = trips.find((t) => t.id === tripId);
      if (!trip) throw new Error("Trip not found");
      const day = trip.itinerary.find((d) => d.dayNumber === dayNumber);
      if (!day) throw new Error("Day not found");
      day.activities = day.activities.filter((a) => a.id !== activityId);
      saveTrips(trips);
    },
    onSuccess: (_data, vars) => {
      queryClient.invalidateQueries({
        queryKey: ["trip", vars.tripId.toString()],
      });
    },
  });
}

// ------- Profile -------

export function useProfile() {
  const { identity, isAuthenticated } = useInternetIdentity();
  return useQuery<UserProfile | null>({
    queryKey: ["profile", identity?.getPrincipal().toString()],
    queryFn: async () => {
      if (!identity) return null;
      const userId = identity.getPrincipal().toString();
      const raw = localStorage.getItem(`wanderplan_profile_${userId}`);
      if (!raw) return null;
      return JSON.parse(raw) as UserProfile;
    },
    enabled: isAuthenticated && !!identity,
  });
}

export function useSaveProfile() {
  const queryClient = useQueryClient();
  const { identity } = useInternetIdentity();
  return useMutation({
    mutationFn: async (profile: Omit<UserProfile, "userId" | "createdAt">) => {
      if (!identity) throw new Error("Not authenticated");
      const userId = identity.getPrincipal().toString();
      const existing = localStorage.getItem(`wanderplan_profile_${userId}`);
      const saved: UserProfile = {
        userId,
        displayName: profile.displayName,
        createdAt: existing
          ? (JSON.parse(existing) as UserProfile).createdAt
          : BigInt(Date.now()),
      };
      localStorage.setItem(
        `wanderplan_profile_${userId}`,
        JSON.stringify(saved),
      );
      return saved;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });
}
