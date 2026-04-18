export type UserId = string; // Principal stringified
export type DestinationId = bigint;
export type TripId = bigint;
export type ActivityId = bigint;

export type TripStatus = "planned" | "ongoing" | "completed";

export interface Destination {
  id: DestinationId;
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  activities: string[];
  estimatedDailyBudget: bigint;
  rating: number;
  tags: string[];
}

export interface DestinationFilter {
  minBudget?: bigint;
  maxBudget?: bigint;
  minRating?: number;
  tags: string[];
}

export interface Activity {
  id: ActivityId;
  time: string;
  title: string;
  description: string;
  durationMinutes: bigint;
}

export interface ItineraryDay {
  dayNumber: bigint;
  date: string;
  activities: Activity[];
}

export interface Trip {
  id: TripId;
  userId: UserId;
  destinationId: DestinationId;
  name: string;
  startDate: string;
  endDate: string;
  budget: bigint;
  interests: string[];
  status: TripStatus;
  itinerary: ItineraryDay[];
}

export interface CreateTripInput {
  destinationId: DestinationId;
  name: string;
  startDate: string;
  endDate: string;
  budget: bigint;
  interests: string[];
}

export interface AddActivityInput {
  tripId: TripId;
  dayNumber: bigint;
  date: string;
  time: string;
  title: string;
  description: string;
  durationMinutes: bigint;
}

export interface UpdateActivityInput {
  tripId: TripId;
  dayNumber: bigint;
  activityId: ActivityId;
  time: string;
  title: string;
  description: string;
  durationMinutes: bigint;
}

export interface UserProfile {
  userId: UserId;
  displayName: string;
  createdAt: bigint;
}

// Static destination data for the app (since backend is being developed)
export const STATIC_DESTINATIONS: Destination[] = [
  {
    id: BigInt(1),
    name: "Santorini",
    country: "Greece",
    description:
      "Iconic white-washed villages perched on volcanic cliffs, world-class sunsets, and the sparkling Aegean Sea make Santorini a timeless dream destination.",
    imageUrl: "/assets/generated/santorini-hero.dim_1400x800.jpg",
    activities: [
      "Sailing",
      "Wine Tasting",
      "Hiking Caldera Trail",
      "Beach Relaxation",
      "Photography",
    ],
    estimatedDailyBudget: BigInt(180),
    rating: 4.9,
    tags: ["romantic", "beach", "luxury", "culture"],
  },
  {
    id: BigInt(2),
    name: "Kyoto",
    country: "Japan",
    description:
      "Ancient temples, bamboo forests, and cherry blossoms define this cultural capital. Kyoto offers an unparalleled journey through Japan's imperial heritage.",
    imageUrl: "/assets/generated/kyoto-forest.dim_800x600.jpg",
    activities: [
      "Temple Visits",
      "Tea Ceremony",
      "Bamboo Grove Walk",
      "Geisha District Tour",
      "Zen Meditation",
    ],
    estimatedDailyBudget: BigInt(120),
    rating: 4.8,
    tags: ["culture", "nature", "history", "food"],
  },
  {
    id: BigInt(3),
    name: "Amalfi Coast",
    country: "Italy",
    description:
      "Dramatic cliffs dropping into turquoise waters, pastel-colored villages, and exceptional Italian cuisine make the Amalfi Coast unforgettable.",
    imageUrl: "/assets/generated/amalfi-coast.dim_800x600.jpg",
    activities: [
      "Coastal Hiking",
      "Boat Tours",
      "Limoncello Tasting",
      "Cliff Diving",
      "Local Markets",
    ],
    estimatedDailyBudget: BigInt(200),
    rating: 4.8,
    tags: ["romantic", "beach", "luxury", "food"],
  },
  {
    id: BigInt(4),
    name: "Patagonia",
    country: "Argentina",
    description:
      "At the end of the world lies one of Earth's last wild places. Towering granite peaks, glaciers, and pristine wilderness await the adventurous traveler.",
    imageUrl: "/assets/generated/patagonia-mountains.dim_800x600.jpg",
    activities: [
      "Trekking",
      "Glacier Hiking",
      "Wildlife Watching",
      "Rock Climbing",
      "Kayaking",
    ],
    estimatedDailyBudget: BigInt(95),
    rating: 4.9,
    tags: ["adventure", "nature", "hiking", "wildlife"],
  },
  {
    id: BigInt(5),
    name: "Bali",
    country: "Indonesia",
    description:
      "Spiritual temples, lush rice terraces, vibrant arts scene, and world-class surf breaks — Bali offers a rich tapestry of culture and natural beauty.",
    imageUrl: "/assets/generated/bali-rice-terraces.dim_800x600.jpg",
    activities: [
      "Surfing",
      "Yoga Retreat",
      "Temple Ceremonies",
      "Rice Terrace Walks",
      "Cooking Class",
    ],
    estimatedDailyBudget: BigInt(65),
    rating: 4.7,
    tags: ["relaxation", "culture", "adventure", "affordable"],
  },
  {
    id: BigInt(6),
    name: "Marrakech",
    country: "Morocco",
    description:
      "A sensory feast of spice-filled souks, ornate palaces, and the legendary Djemaa el-Fna square. Marrakech is where ancient tradition meets modern luxury.",
    imageUrl: "/assets/generated/marrakech-medina.dim_800x600.jpg",
    activities: [
      "Medina Exploration",
      "Cooking Class",
      "Desert Safari",
      "Hammam Spa",
      "Souks Shopping",
    ],
    estimatedDailyBudget: BigInt(75),
    rating: 4.6,
    tags: ["culture", "food", "adventure", "affordable"],
  },
  {
    id: BigInt(7),
    name: "New York City",
    country: "United States",
    description:
      "The city that never sleeps — an electrifying metropolis of iconic skyscrapers, world-class museums, Broadway shows, and an unparalleled culinary scene.",
    imageUrl:
      "https://source.unsplash.com/featured/?newyorkcity,travel,800x600",
    activities: [
      "Central Park Walk",
      "Broadway Show",
      "Museum of Modern Art",
      "Brooklyn Bridge Crossing",
      "Rooftop Bar Hopping",
      "Times Square at Night",
    ],
    estimatedDailyBudget: BigInt(220),
    rating: 4.7,
    tags: ["urban", "culture", "food", "luxury"],
  },
  {
    id: BigInt(8),
    name: "Cape Town",
    country: "South Africa",
    description:
      "Where the Atlantic meets dramatic mountain peaks, Cape Town dazzles with vineyard visits, penguin colonies, and a vibrant, multicultural spirit unlike anywhere else.",
    imageUrl: "https://source.unsplash.com/featured/?capetown,travel,800x600",
    activities: [
      "Table Mountain Hike",
      "Boulders Beach Penguins",
      "Cape Winelands Tour",
      "Cape of Good Hope",
      "Robben Island Visit",
      "Bo-Kaap Neighbourhood Walk",
    ],
    estimatedDailyBudget: BigInt(90),
    rating: 4.8,
    tags: ["nature", "adventure", "culture", "wildlife"],
  },
];
