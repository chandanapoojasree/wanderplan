import type { backendInterface } from "../backend";
import { TripStatus } from "../backend";

const sampleDestinations = [
  {
    id: BigInt(1),
    country: "Greece",
    name: "Santorini",
    tags: ["beach", "romantic", "luxury"],
    activities: ["Sunset viewing", "Boat tours", "Wine tasting"],
    description: "Iconic white-washed buildings perched on volcanic cliffs overlooking the Aegean Sea.",
    imageUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    rating: 4.9,
    estimatedDailyBudget: BigInt(150),
  },
  {
    id: BigInt(2),
    country: "Japan",
    name: "Kyoto",
    tags: ["culture", "history", "nature"],
    activities: ["Temple visits", "Tea ceremony", "Bamboo grove walk"],
    description: "Ancient capital city with thousands of classical Buddhist temples, gardens, and geisha districts.",
    imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    rating: 4.8,
    estimatedDailyBudget: BigInt(120),
  },
  {
    id: BigInt(3),
    country: "Morocco",
    name: "Marrakech",
    tags: ["adventure", "culture", "affordable"],
    activities: ["Souk shopping", "Desert safari", "Hammam experience"],
    description: "A vibrant city of souks, palaces, and gardens at the foot of the Atlas Mountains.",
    imageUrl: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80",
    rating: 4.7,
    estimatedDailyBudget: BigInt(80),
  },
  {
    id: BigInt(4),
    country: "Italy",
    name: "Amalfi Coast",
    tags: ["scenic", "luxury", "romantic"],
    activities: ["Coastal hikes", "Boat trips", "Italian cuisine"],
    description: "A stretch of coastline on the southern edge of Italy's Sorrentine Peninsula with dramatic cliffs.",
    imageUrl: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=800&q=80",
    rating: 4.8,
    estimatedDailyBudget: BigInt(200),
  },
  {
    id: BigInt(5),
    country: "Peru",
    name: "Machu Picchu",
    tags: ["adventure", "history", "nature"],
    activities: ["Inca Trail hike", "Citadel tour", "Mountain biking"],
    description: "The legendary Inca citadel set high in the Andes Mountains, above the Sacred Valley.",
    imageUrl: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80",
    rating: 4.9,
    estimatedDailyBudget: BigInt(100),
  },
  {
    id: BigInt(6),
    country: "Iceland",
    name: "Reykjavik",
    tags: ["adventure", "nature", "unique"],
    activities: ["Northern lights", "Geyser tours", "Whale watching"],
    description: "The world's northernmost capital, gateway to breathtaking natural wonders like geysers and glaciers.",
    imageUrl: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&q=80",
    rating: 4.8,
    estimatedDailyBudget: BigInt(180),
  },
];

const sampleTrips = [
  {
    id: BigInt(1),
    status: TripStatus.planned,
    endDate: "2026-08-15",
    destinationId: BigInt(1),
    interests: ["beach", "romantic"],
    userId: { _isPrincipal: true, toText: () => "user-principal-1" } as any,
    name: "Santorini Honeymoon",
    createdAt: BigInt(Date.now()),
    budget: BigInt(3000),
    itinerary: [
      {
        date: "2026-08-10",
        dayNumber: BigInt(1),
        activities: [
          {
            id: BigInt(1),
            title: "Arrive & Check In",
            time: "14:00",
            description: "Arrive at Santorini airport and transfer to hotel in Oia.",
            durationMinutes: BigInt(120),
          },
          {
            id: BigInt(2),
            title: "Sunset at Oia",
            time: "19:00",
            description: "Watch the famous Santorini sunset from the castle ruins.",
            durationMinutes: BigInt(90),
          },
        ],
      },
      {
        date: "2026-08-11",
        dayNumber: BigInt(2),
        activities: [
          {
            id: BigInt(3),
            title: "Caldera Boat Tour",
            time: "10:00",
            description: "Half-day sailing tour around the volcanic caldera with swimming stops.",
            durationMinutes: BigInt(240),
          },
          {
            id: BigInt(4),
            title: "Wine Tasting",
            time: "17:00",
            description: "Visit Santo Wines with panoramic caldera views.",
            durationMinutes: BigInt(120),
          },
        ],
      },
      {
        date: "2026-08-12",
        dayNumber: BigInt(3),
        activities: [
          {
            id: BigInt(5),
            title: "Perissa Black Beach",
            time: "10:00",
            description: "Relax on the unique black volcanic sand beach.",
            durationMinutes: BigInt(180),
          },
        ],
      },
    ],
    startDate: "2026-08-10",
  },
  {
    id: BigInt(2),
    status: TripStatus.completed,
    endDate: "2025-12-05",
    destinationId: BigInt(2),
    interests: ["culture", "history"],
    userId: { _isPrincipal: true, toText: () => "user-principal-1" } as any,
    name: "Kyoto Cultural Immersion",
    createdAt: BigInt(Date.now() - 86400000 * 30),
    budget: BigInt(2500),
    itinerary: [],
    startDate: "2025-11-28",
  },
];

export const mockBackend: backendInterface = {
  addActivity: async () => true,
  createTrip: async (input) => ({
    id: BigInt(99),
    status: TripStatus.planned,
    endDate: input.endDate,
    destinationId: input.destinationId,
    interests: input.interests,
    userId: { _isPrincipal: true, toText: () => "user-principal-1" } as any,
    name: input.name,
    createdAt: BigInt(Date.now()),
    budget: input.budget,
    itinerary: [],
    startDate: input.startDate,
  }),
  deleteTrip: async () => true,
  filterDestinations: async (filter) => {
    return sampleDestinations.filter((d) => {
      if (filter.minRating && d.rating < filter.minRating) return false;
      if (filter.minBudget && d.estimatedDailyBudget < filter.minBudget) return false;
      if (filter.maxBudget && d.estimatedDailyBudget > filter.maxBudget) return false;
      if (filter.tags.length > 0 && !filter.tags.some((t) => d.tags.includes(t))) return false;
      return true;
    });
  },
  getDestination: async (id) => sampleDestinations.find((d) => d.id === id) ?? null,
  getMyProfile: async () => ({
    displayName: "Elena Marchetti",
    userId: { _isPrincipal: true, toText: () => "user-principal-1" } as any,
    createdAt: BigInt(Date.now() - 86400000 * 90),
  }),
  getOrCreateProfile: async () => ({
    displayName: "Elena Marchetti",
    userId: { _isPrincipal: true, toText: () => "user-principal-1" } as any,
    createdAt: BigInt(Date.now() - 86400000 * 90),
  }),
  getTrip: async (tripId) => sampleTrips.find((t) => t.id === tripId) ?? null,
  listDestinations: async () => sampleDestinations,
  listMyTrips: async () => sampleTrips,
  removeActivity: async () => true,
  updateActivity: async () => true,
  updateDisplayName: async () => true,
  updateTripStatus: async () => true,
};
