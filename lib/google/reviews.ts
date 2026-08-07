export interface GoogleReview {
    author_name: string;
    author_url?: string;
    profile_photo_url?: string;
    rating: number;
    relative_time_description: string;
    text: string;
    time: number;
  }
  
  export interface PlaceReviewsResult {
    reviews: GoogleReview[];
    rating: number;
    userRatingsTotal: number;
  }
  
  export async function getGoogleReviews(): Promise<PlaceReviewsResult | null> {
    const placeId = process.env.GOOGLE_PLACE_ID;
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  
    if (!placeId || !apiKey) return null;
  
    const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
    url.searchParams.set("place_id", placeId);
    url.searchParams.set("fields", "reviews,rating,user_ratings_total");
    url.searchParams.set("key", apiKey);
  
    try {
      const res = await fetch(url.toString(), {
        next: { revalidate: 60 * 60 * 24 }, // cache 24h — don't hit Google on every request
      });
  
      const data = await res.json();
  
      if (data.status !== "OK") {
        console.error("Places API error:", data.status);
        return null;
      }
  
      return {
        reviews: data.result.reviews ?? [],
        rating: data.result.rating ?? 0,
        userRatingsTotal: data.result.user_ratings_total ?? 0,
      };
    } catch (error) {
      console.error("Failed to fetch Google reviews:", error);
      return null;
    }
  }