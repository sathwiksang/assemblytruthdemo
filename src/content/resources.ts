import type { IconName } from "@/components/ui/Icon";

export type ResourceCategory = "publishers" | "tracts" | "audio" | "study";

export type Resource = {
  name: string;
  category: ResourceCategory;
  description: string;
  url: string;
  tags: string[];
  image: string;
  featured?: boolean;
};

export const categories: { id: ResourceCategory | "all"; label: string; icon: IconName }[] = [
  { id: "all", label: "All Resources", icon: "Library" },
  { id: "publishers", label: "Publishers", icon: "BookOpen" },
  { id: "tracts", label: "Gospel Tracts", icon: "FileText" },
  { id: "audio", label: "Audio & Video", icon: "Headphones" },
  { id: "study", label: "Bible Study", icon: "BookMarked" },
];

/** Maps a resource category to the icon shown on its card. */
export const categoryIcon: Record<ResourceCategory, IconName> = {
  publishers: "BookOpen",
  tracts: "FileText",
  audio: "Headphones",
  study: "BookMarked",
};

const publishers: Resource[] = [
  {
    name: "Gospel Folio Press",
    category: "publishers",
    description:
      "Publishing sound biblical literature for over 80 years — commentaries, devotionals, children's books, and ministry aids for the local assembly.",
    url: "https://www.gospelfolio.com",
    tags: ["Commentaries", "Devotionals", "Children"],
    image: "/images/resource-books.jpg",
    featured: true,
  },
  {
    name: "Bible Truth Publishers",
    category: "publishers",
    description:
      "A trusted source for ministry writings, hymnbooks, and Bible study materials rooted in New Testament assembly principles.",
    url: "https://www.bibletruthpublishers.com",
    tags: ["Hymnbooks", "Ministry", "Bible Study"],
    image: "/images/resource-tracts.jpg",
    featured: true,
  },
  {
    name: "Believers Bookshelf",
    category: "publishers",
    description:
      "Distributing quality Christian literature — books, pamphlets, and tracts for evangelism and edification of believers worldwide.",
    url: "https://www.bbusa.org",
    tags: ["Books", "Pamphlets", "Evangelism"],
    image: "/images/resource-study.jpg",
    featured: true,
  },
  {
    name: "Chapter Two",
    category: "publishers",
    description:
      "London-based publisher specializing in assembly history, biographies, and expository works from trusted brethren authors.",
    url: "https://www.chaptertwobooks.org.uk",
    tags: ["History", "Biographies", "Exposition"],
    image: "/images/resource-books.jpg",
    featured: false,
  },
];

const tracts: Resource[] = [
  {
    name: "Moments With the Book",
    category: "tracts",
    description:
      "Gospel tracts and evangelistic literature designed for personal distribution — clear, concise presentations of the Gospel message.",
    url: "https://www.mwtb.org",
    tags: ["Gospel Tracts", "Evangelism", "Free Samples"],
    image: "/images/resource-tracts.jpg",
  },
  {
    name: "Echoes of Service",
    category: "tracts",
    description:
      "Supporting and connecting missionaries commended from assemblies worldwide. News, prayer requests, and missionary resources.",
    url: "https://www.echoes.org.uk",
    tags: ["Missions", "Prayer", "Global"],
    image: "/images/resource-study.jpg",
  },
  {
    name: "MSC Canada",
    category: "tracts",
    description:
      "Missionary literature and support resources — gospel calendars, tracts in multiple languages, and assembly missionary coordination.",
    url: "https://www.msccanada.org",
    tags: ["Calendars", "Multi-language", "Missions"],
    image: "/images/resource-books.jpg",
  },
];

const audioVideo: Resource[] = [
  {
    name: "Assembly Media (YouTube)",
    category: "audio",
    description:
      "Conference messages, Bible classes, and teaching sessions from Bethany Christian Media — the Assembly Truth conference archive.",
    url: "https://www.youtube.com/@AssemblyMedia",
    tags: ["Conferences", "Bible Classes", "Telugu"],
    image: "/images/resources-hero.jpg",
  },
  {
    name: "Brethren Online",
    category: "audio",
    description:
      "Audio ministry from assemblies — conference recordings, gospel messages, and Bible readings from servants of the Lord.",
    url: "https://www.brethrenonline.org",
    tags: ["Audio", "Conferences", "Ministry"],
    image: "/images/resource-study.jpg",
  },
  {
    name: "Truth for Today",
    category: "audio",
    description:
      "Daily radio broadcast bringing sound Bible teaching to listeners — clear exposition of Scripture for everyday Christian living.",
    url: "https://www.truthfortoday.org.uk",
    tags: ["Radio", "Daily", "Exposition"],
    image: "/images/resource-tracts.jpg",
  },
];

const bibleStudy: Resource[] = [
  {
    name: "BibleHub",
    category: "study",
    description:
      "Comprehensive Bible study tools — parallel translations, concordances, commentaries, and original language resources all in one place.",
    url: "https://biblehub.com",
    tags: ["Concordance", "Commentary", "Greek/Hebrew"],
    image: "/images/resource-study.jpg",
  },
  {
    name: "Bible Gateway",
    category: "study",
    description:
      "Read and search the Bible in multiple translations — devotionals, reading plans, and audio Bible available free online.",
    url: "https://www.biblegateway.com",
    tags: ["Multi-translation", "Audio", "Reading Plans"],
    image: "/images/resource-books.jpg",
  },
  {
    name: "MySword Bible (App)",
    category: "study",
    description:
      "Powerful offline Bible study app with commentaries from Darby, Kelly, Mackintosh, and other assembly authors — free for Android.",
    url: "https://mysword.info",
    tags: ["Android App", "Offline", "Commentaries"],
    image: "/images/resource-tracts.jpg",
  },
];

export const featuredPublishers = publishers.filter((p) => p.featured);
export const allResources: Resource[] = [...publishers, ...tracts, ...audioVideo, ...bibleStudy];

export const resourceStats: { icon: IconName; value: string; label: string }[] = [
  { icon: "BookOpen", value: "12+", label: "Publishers" },
  { icon: "Globe", value: "50+", label: "Languages" },
  { icon: "Users", value: "1000+", label: "Resources" },
  { icon: "Newspaper", value: "Free", label: "Gospel Tracts" },
];
