import {
  BookOpen,
  Sparkles,
  Crown,
  Flame,
  Eye,
  Heart,
  Users,
  Cross,
  Shield,
  Globe,
  Mic2,
  Library,
  FileText,
  Headphones,
  BookMarked,
  Newspaper,
  type LucideProps,
} from "lucide-react";

/**
 * Maps a string name (used in pure-data content files) to a Lucide icon,
 * so content stays serializable and free of React imports.
 */
const map = {
  BookOpen,
  Sparkles,
  Crown,
  Flame,
  Eye,
  Heart,
  Users,
  Cross,
  Shield,
  Globe,
  Mic2,
  Library,
  FileText,
  Headphones,
  BookMarked,
  Newspaper,
} as const;

export type IconName = keyof typeof map;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Component = map[name];
  return <Component aria-hidden="true" {...props} />;
}
