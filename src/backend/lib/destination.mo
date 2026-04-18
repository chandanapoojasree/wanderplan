import Common "../types/common";
import Types "../types/destination";
import List "mo:core/List";

module {
  public func listDestinations(
    destinations : List.List<Types.Destination>
  ) : [Types.Destination] {
    destinations.toArray();
  };

  public func getDestination(
    destinations : List.List<Types.Destination>,
    id : Common.DestinationId
  ) : ?Types.Destination {
    destinations.find(func(d) { d.id == id });
  };

  public func filterDestinations(
    destinations : List.List<Types.Destination>,
    filter : Types.DestinationFilter
  ) : [Types.Destination] {
    destinations.filter(func(d) {
      let minBudgetOk = switch (filter.minBudget) {
        case (?min) { d.estimatedDailyBudget >= min };
        case null { true };
      };
      let maxBudgetOk = switch (filter.maxBudget) {
        case (?max) { d.estimatedDailyBudget <= max };
        case null { true };
      };
      let budgetOk = minBudgetOk and maxBudgetOk;
      let ratingOk = switch (filter.minRating) {
        case (?min) { d.rating >= min };
        case null { true };
      };
      let tagsOk = if (filter.tags.size() == 0) {
        true
      } else {
        filter.tags.all(func(tag) {
          d.tags.any(func(dt) { dt == tag })
        })
      };
      budgetOk and ratingOk and tagsOk
    }).toArray();
  };

  public func seedDestinations(
    destinations : List.List<Types.Destination>,
    nextId : Nat
  ) : Nat {
    let seeds : [Types.Destination] = [
      {
        id = nextId;
        name = "Paris";
        country = "France";
        description = "The City of Light, famous for the Eiffel Tower, world-class cuisine, and iconic art museums like the Louvre. A romantic and culturally rich destination.";
        imageUrl = "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800";
        activities = ["Eiffel Tower visit", "Louvre Museum", "Seine River cruise", "Montmartre stroll", "Versailles day trip", "French cooking class"];
        estimatedDailyBudget = 150;
        rating = 4.8;
        tags = ["romantic", "culture", "art", "food", "history"];
      },
      {
        id = nextId + 1;
        name = "Tokyo";
        country = "Japan";
        description = "A dazzling metropolis blending ultra-modern technology with ancient temples and shrines. Experience world-renowned cuisine, anime culture, and cherry blossoms.";
        imageUrl = "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800";
        activities = ["Shibuya Crossing", "Senso-ji Temple", "Tsukiji Fish Market", "Akihabara electronics", "Harajuku fashion", "Mount Fuji day trip"];
        estimatedDailyBudget = 120;
        rating = 4.9;
        tags = ["culture", "food", "technology", "adventure", "history"];
      },
      {
        id = nextId + 2;
        name = "Bali";
        country = "Indonesia";
        description = "A tropical paradise with stunning rice terraces, ancient temples, and vibrant nightlife. Known for spiritual retreats, surfing, and affordable luxury.";
        imageUrl = "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800";
        activities = ["Tanah Lot Temple", "Ubud rice terraces", "Surfing at Kuta", "Spa and wellness retreat", "Monkey Forest", "Traditional dance show"];
        estimatedDailyBudget = 60;
        rating = 4.7;
        tags = ["beach", "relaxation", "culture", "adventure", "budget-friendly"];
      },
      {
        id = nextId + 3;
        name = "New York City";
        country = "USA";
        description = "The city that never sleeps — Times Square, Central Park, world-class Broadway shows, and an unmatched food scene across every cuisine imaginable.";
        imageUrl = "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=800";
        activities = ["Times Square", "Central Park", "Broadway show", "Statue of Liberty", "Brooklyn Bridge walk", "Museum of Modern Art"];
        estimatedDailyBudget = 200;
        rating = 4.7;
        tags = ["urban", "culture", "food", "entertainment", "shopping"];
      },
      {
        id = nextId + 4;
        name = "Santorini";
        country = "Greece";
        description = "Famous for its iconic blue-domed churches, dramatic caldera views, and spectacular sunsets. A quintessential Mediterranean escape with excellent seafood.";
        imageUrl = "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800";
        activities = ["Oia sunset viewing", "Caldera boat tour", "Wine tasting", "Black sand beach", "Akrotiri ruins", "Fira village walk"];
        estimatedDailyBudget = 180;
        rating = 4.8;
        tags = ["romantic", "beach", "relaxation", "food", "history"];
      },
      {
        id = nextId + 5;
        name = "Safari in Kenya";
        country = "Kenya";
        description = "Experience the Great Migration in the Maasai Mara, witness the Big Five in their natural habitat, and immerse yourself in Maasai culture and stunning African landscapes.";
        imageUrl = "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800";
        activities = ["Maasai Mara game drive", "Hot air balloon safari", "Maasai village visit", "Amboseli National Park", "Giraffe Centre Nairobi", "Lake Nakuru flamingos"];
        estimatedDailyBudget = 250;
        rating = 4.9;
        tags = ["adventure", "nature", "wildlife", "culture"];
      },
      {
        id = nextId + 6;
        name = "Barcelona";
        country = "Spain";
        description = "A vibrant city with stunning Gaudí architecture, beautiful beaches, world-famous tapas, and an electric nightlife. The capital of Catalonia blends art and leisure perfectly.";
        imageUrl = "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800";
        activities = ["Sagrada Família", "Park Güell", "La Rambla stroll", "Gothic Quarter tour", "Barceloneta beach", "Flamenco show"];
        estimatedDailyBudget = 130;
        rating = 4.7;
        tags = ["culture", "beach", "food", "art", "nightlife"];
      },
      {
        id = nextId + 7;
        name = "Machu Picchu";
        country = "Peru";
        description = "The legendary Incan citadel set high in the Andes Mountains, surrounded by cloud forest. One of the most awe-inspiring archaeological sites in the world.";
        imageUrl = "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800";
        activities = ["Machu Picchu ruins tour", "Inca Trail hike", "Sun Gate sunrise", "Aguas Calientes hot springs", "Cusco city tour", "Sacred Valley visit"];
        estimatedDailyBudget = 80;
        rating = 4.9;
        tags = ["adventure", "history", "nature", "culture", "hiking"];
      },
    ];
    for (dest in seeds.values()) {
      destinations.add(dest);
    };
    nextId + seeds.size();
  };
};
