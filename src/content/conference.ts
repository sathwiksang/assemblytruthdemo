import type { IconName } from "@/components/ui/Icon";

export type GalleryPhoto = { src: string; alt: string; category: string };

export const galleryPhotos: GalleryPhoto[] = [
  { src: "/images/conference-hero.jpg", alt: "Main auditorium", category: "Venue" },
  { src: "/images/conference-worship.jpg", alt: "Worship & praise", category: "Worship" },
  { src: "/images/conference-speaker.jpg", alt: "Bible exposition", category: "Teaching" },
  { src: "/images/conference-group.jpg", alt: "Fellowship gathering", category: "Fellowship" },
  { src: "/images/conference-study.jpg", alt: "Community meals", category: "Community" },
  { src: "/images/conference-kids.jpg", alt: "Youth sessions", category: "Youth" },
  { src: "/images/conference-crowd.jpg", alt: "Conference attendees", category: "Gathering" },
  { src: "/images/conference-stage.jpg", alt: "Evening sessions", category: "Sessions" },
];

export type TimelineEntry = {
  year: string;
  theme: string;
  sessions: number;
  speakers: number;
  attendees: string;
};

export const timeline: TimelineEntry[] = [
  { year: "2025", theme: "Walking in the Light", sessions: 27, speakers: 8, attendees: "500+" },
  { year: "2024", theme: "The Church — God's Masterpiece", sessions: 22, speakers: 7, attendees: "450+" },
  { year: "2023", theme: "Beholding His Glory", sessions: 20, speakers: 6, attendees: "400+" },
  { year: "2022", theme: "Rooted & Built Up in Christ", sessions: 18, speakers: 6, attendees: "350+" },
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

export type Expectation = { icon: IconName; title: string; desc: string };

export const expectations: Expectation[] = [
  { icon: "BookOpen", title: "Expository Teaching", desc: "Verse-by-verse Bible exposition from gifted servants of the Lord." },
  { icon: "Mic2", title: "Conference Sessions", desc: "Morning readings, afternoon Bible classes, and evening gospel meetings." },
  { icon: "Heart", title: "Sweet Fellowship", desc: "Gather with believers from across India united around the Lord's table." },
  { icon: "Users", title: "Youth & Children", desc: "Dedicated sessions for young people with age-appropriate Bible teaching." },
];

export const conferenceStats = [
  { val: "500+", label: "Believers" },
  { val: "27+", label: "Sessions" },
  { val: "8", label: "Speakers" },
  { val: "4", label: "Days" },
];
