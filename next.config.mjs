/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Static HTML export → deployable to GitHub Pages (no Node server).
  output: "export",
  // Each route becomes a folder with index.html, served cleanly by Pages.
  trailingSlash: true,

  // Custom domain (assemblytruth.org) serves at the root, so no basePath.

  images: {
    // Required for static export. <Image> points straight at the static files.
    // On a host with a working image optimizer you could drop `output: 'export'`
    // and restore: formats: ['image/avif', 'image/webp'].
    unoptimized: true,
  },
};

export default nextConfig;
