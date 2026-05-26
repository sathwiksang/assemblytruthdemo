export type GalleryPhoto = { src: string; alt: string };

/** Number of optimized 2025 gallery photos in /public/images/conference. */
export const GALLERY_COUNT = 57;

export const galleryPhotos: GalleryPhoto[] = Array.from(
  { length: GALLERY_COUNT },
  (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return {
      src: `/images/conference/conf-2025-${n}.jpg`,
      alt: `Assembly Truth Conference 2025 — moment ${i + 1}`,
    };
  },
);

/** Latest promo video (YouTube). */
export const promo = {
  videoId: "NYrY9VpFWjQ",
  thumbnail: "/images/conference/promo-thumb.jpg",
  title: "Assembly Truth Conference — Promo",
};

export type RegistrationTier = { label: string; price: string; note: string };

export const registrationTiers: RegistrationTier[] = [
  { label: "Individual", price: "₹250", note: "Per person" },
  { label: "Families", price: "₹500", note: "Whole family" },
  { label: "Evangelists", price: "₹200", note: "Commended workers" },
];

export type Playlist = {
  title: string;
  year: string;
  videoCount: number;
  embedId: string;
  description: string;
  image: string;
};

export const playlists: Playlist[] = [
  {
    title: "Assembly Truth Conference 2025",
    year: "2025",
    videoCount: 27,
    embedId: "videoseries?list=PLjHiQBjkNJO5m2024",
    description:
      "Complete sessions from the 2025 Assembly Truth Conference featuring expository messages and Bible teaching.",
    image: "/images/conference-worship.jpg",
  },
  {
    title: "Assembly Bible Classes 2025",
    year: "2025",
    videoCount: 18,
    embedId: "videoseries?list=PLjHiQBjkNJO5m2024b",
    description:
      "In-depth Bible class series covering foundational doctrines and assembly principles.",
    image: "/images/conference-study.jpg",
  },
  {
    title: "Assembly Principles & Practices",
    year: "2024",
    videoCount: 8,
    embedId: "videoseries?list=PLjHiQBjkNJO5m2024c",
    description:
      "A comprehensive look at New Testament assembly principles for the local church.",
    image: "/images/conference-speaker.jpg",
  },
  {
    title: "Bible Readings in Ephesians",
    year: "2024",
    videoCount: 5,
    embedId: "videoseries?list=PLjHiQBjkNJO5m2024d",
    description:
      "Verse-by-verse readings and exposition through the book of Ephesians.",
    image: "/images/conference-stage.jpg",
  },
];
