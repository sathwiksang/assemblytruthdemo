export type MagazineArticle = {
  category: string;
  title: string;
  author: string;
  excerpt: string;
  readTime: string;
  featured?: boolean;
};

export type MagazineIssue = {
  title: string;
  volume: string;
  date: string;
  cover: string;
  description: string;
  current: boolean;
  pages: number;
  articles: MagazineArticle[];
};

export const magazineIssues: MagazineIssue[] = [
  {
    title: "The Glory of Christ",
    volume: "Vol. 1 · Issue 1",
    date: "Jan – Mar 2026",
    cover: "/images/magazine-cover.jpg",
    description:
      "Inaugural issue — The Glory of the Lord Jesus Christ, Edification for the Local Assembly, and the Believer's Walk.",
    current: true,
    pages: 48,
    articles: [
      {
        category: "Doctrine",
        title: "The Sufficiency of Scripture",
        author: "P. Surya Prakash Rao",
        excerpt:
          "An exposition on the completeness and authority of the written Word of God for every aspect of the believer's life and testimony.",
        readTime: "12 min read",
        featured: true,
      },
      {
        category: "Typology",
        title: "Christ in the Tabernacle",
        author: "B. John",
        excerpt:
          "Tracing the beauty of the Lord Jesus through the design, materials, and furnishings of the Old Testament Tabernacle.",
        readTime: "15 min read",
        featured: true,
      },
      {
        category: "Ecclesiology",
        title: "The Local Assembly — God's Design",
        author: "K. Isaac",
        excerpt:
          "Understanding the New Testament pattern for gathering, worship, and function within the local assembly of believers.",
        readTime: "10 min read",
        featured: true,
      },
      {
        category: "Practical",
        title: "Walking Worthy of the Calling",
        author: "Howard Raju",
        excerpt:
          "Practical instruction on living a life that honors the Lord in daily conduct, relationships, and service.",
        readTime: "8 min read",
        featured: true,
      },
    ],
  },
  {
    title: "Faithfulness in the Last Days",
    volume: "Vol. 1 · Issue 2",
    date: "Apr – Jun 2026",
    cover: "/images/magazine-issue2.jpg",
    description:
      "The Church as the Pillar of Truth, standing firm in an age of compromise and doctrinal drift.",
    current: false,
    pages: 52,
    articles: [],
  },
  {
    title: "The Sufficiency of Scripture",
    volume: "Vol. 1 · Issue 3",
    date: "Jul – Sep 2026",
    cover: "/images/magazine-issue3.jpg",
    description:
      "Exploring the completeness and authority of God's Word for every area of life and godliness.",
    current: false,
    pages: 50,
    articles: [],
  },
];

export const getTotalArticleCount = () =>
  magazineIssues.reduce((total, issue) => total + issue.articles.length, 0);

export const getFeaturedArticles = () => {
  const currentIssue = magazineIssues.find((issue) => issue.current);
  if (!currentIssue) return [];
  return currentIssue.articles.filter((article) => article.featured);
};

export const getContributorCount = () => {
  const authors = new Set(
    magazineIssues.flatMap((issue) => issue.articles.map((a) => a.author)),
  );
  return authors.size;
};

export const formatArticleCount = (count: number) =>
  `${count} ${count === 1 ? "article" : "articles"}`;
