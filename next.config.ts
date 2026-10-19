import type { NextConfig } from "next";

// STATIC_EXPORT=1 builds a fully static site for GitHub Pages (served under /portfolio-website/).
const isStatic = !!process.env.STATIC_EXPORT;

const nextConfig: NextConfig = {
    typescript: {
          ignoreBuildErrors: true,
    },
    eslint: {
          ignoreDuringBuilds: true,
    },
    ...(isStatic
        ? {
              output: "export" as const,
              basePath: "/portfolio-website",
              trailingSlash: true,
              images: { unoptimized: true },
          }
        : {}),
};

export default nextConfig;
