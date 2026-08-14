import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // This Next.js build defaults to "attachment", which makes browsers
    // treat every optimized image response as a download instead of
    // painting it inline — restoring the standard inline behavior so
    // next/image actually renders on the page.
    contentDispositionType: "inline",
  },
};

export default nextConfig;
