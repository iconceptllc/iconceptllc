// Add a YouTube ID only after verifying that it is the matching, embeddable video.
// Cloudinary URLs remain in lib/cloudinary.ts for rollback.
export type VideoKey =
  | "iconcept-showreel"
  | "anamorphic"
  | "cgi"
  | "helin_eren"
  | "corporate"
  | "2d"
  | "3d"
  | "3d-detail"
  | "trop"
  | "trop_violet_fabric_softner"
  | "rose_evil_intredeu"
  | "motion-graphics";

type VideoEntry = { youtubeId: string | null; poster: string; posterFit?: "contain" };

export const videos: Record<VideoKey, VideoEntry> = {
  "iconcept-showreel": { youtubeId: "r1vKPgz8cyM", poster: "/video-posters/iconcept-showreel.webp" },
  anamorphic: { youtubeId: "4WJUR7AiFs8", poster: "/video-posters/anamorphic.webp" },
  cgi: { youtubeId: "uXHH2Uhqmzs", poster: "/video-posters/cgi.webp", posterFit: "contain" },
  helin_eren: { youtubeId: "7nqGOOAeCJA", poster: "/video-posters/helin_eren.webp", posterFit: "contain" },
  corporate: { youtubeId: "sSIn1a05qp4", poster: "/video-posters/corporate.webp" },
  "2d": { youtubeId: "yKfpDP6RheE", poster: "/video-posters/2d.webp" },
  "3d": { youtubeId: "5WuAAdEdTGA", poster: "/video-posters/3d.webp" },
  "3d-detail": { youtubeId: "5WuAAdEdTGA", poster: "/video-posters/3d.webp" },
  trop: { youtubeId: "iuYLRC3AiOI", poster: "/video-posters/trop.webp", posterFit: "contain" },
  trop_violet_fabric_softner: { youtubeId: "62huoGNoqE4", poster: "/video-posters/trop_violet_fabric_softner.webp", posterFit: "contain" },
  rose_evil_intredeu: { youtubeId: "3H_3f3bHG4c", poster: "/video-posters/rose_evil_intredeu.webp", posterFit: "contain" },
  "motion-graphics": { youtubeId: "yKfpDP6RheE", poster: "/video-posters/2d.webp" },
};
