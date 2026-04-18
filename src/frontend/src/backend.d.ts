import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface UpdateActivityInput {
    title: string;
    tripId: TripId;
    time: string;
    activityId: ActivityId;
    description: string;
    dayNumber: bigint;
    durationMinutes: bigint;
}
export type Timestamp = bigint;
export interface Trip {
    id: TripId;
    status: TripStatus;
    endDate: string;
    destinationId: DestinationId;
    interests: Array<string>;
    userId: UserId;
    name: string;
    createdAt: Timestamp;
    budget: bigint;
    itinerary: Array<ItineraryDay>;
    startDate: string;
}
export interface Destination {
    id: DestinationId;
    country: string;
    name: string;
    tags: Array<string>;
    activities: Array<string>;
    description: string;
    imageUrl: string;
    rating: number;
    estimatedDailyBudget: bigint;
}
export type DestinationId = bigint;
export type UserId = Principal;
export interface ItineraryDay {
    date: string;
    activities: Array<Activity>;
    dayNumber: bigint;
}
export interface DestinationFilter {
    minRating?: number;
    minBudget?: bigint;
    tags: Array<string>;
    maxBudget?: bigint;
}
export interface CreateTripInput {
    endDate: string;
    destinationId: DestinationId;
    interests: Array<string>;
    name: string;
    budget: bigint;
    startDate: string;
}
export type ActivityId = bigint;
export type TripId = bigint;
export interface Activity {
    id: ActivityId;
    title: string;
    time: string;
    description: string;
    durationMinutes: bigint;
}
export interface AddActivityInput {
    title: string;
    date: string;
    tripId: TripId;
    time: string;
    description: string;
    dayNumber: bigint;
    durationMinutes: bigint;
}
export interface UserProfile {
    displayName: string;
    userId: UserId;
    createdAt: Timestamp;
}
export enum TripStatus {
    completed = "completed",
    planned = "planned",
    ongoing = "ongoing"
}
export interface backendInterface {
    addActivity(input: AddActivityInput): Promise<boolean>;
    createTrip(input: CreateTripInput): Promise<Trip>;
    deleteTrip(tripId: TripId): Promise<boolean>;
    filterDestinations(filter: DestinationFilter): Promise<Array<Destination>>;
    getDestination(id: DestinationId): Promise<Destination | null>;
    getMyProfile(): Promise<UserProfile | null>;
    getOrCreateProfile(): Promise<UserProfile>;
    getTrip(tripId: TripId): Promise<Trip | null>;
    listDestinations(): Promise<Array<Destination>>;
    listMyTrips(): Promise<Array<Trip>>;
    removeActivity(tripId: TripId, dayNumber: bigint, activityId: ActivityId): Promise<boolean>;
    updateActivity(input: UpdateActivityInput): Promise<boolean>;
    updateDisplayName(displayName: string): Promise<boolean>;
    updateTripStatus(tripId: TripId, status: TripStatus): Promise<boolean>;
}
