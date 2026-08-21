import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // This Next.js build defaults to "attachment", which makes browsers
    // treat every optimized image response as a download instead of
    // painting it inline — restoring the standard inline behavior so
    // next/image actually renders on the page.
    contentDispositionType: "inline",
    // Next 16 defaults images.qualities to [75] and silently coerces any
    // other `quality` prop to the nearest allowed value — add 90 so
    // portfolio screenshots stay crisp.
    qualities: [75, 90],
  },
};

export default nextConfig;
