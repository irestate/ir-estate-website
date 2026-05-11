import type { NextConfig } from "next";

const pagesBasePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  env: {
    SITE_PASSWORD_HASH: process.env.NEXT_PUBLIC_SITE_PASSWORD_HASH || "",
  },
  ...(process.env.GITHUB_PAGES === "true" && pagesBasePath
    ? {
        basePath: pagesBasePath,
        assetPrefix: pagesBasePath,
      }
    : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
