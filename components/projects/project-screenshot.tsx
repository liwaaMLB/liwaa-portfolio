import Image from "next/image";
import type { ProjectImage } from "@/lib/types";

type ProjectScreenshotProps = {
  image: ProjectImage;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export function ProjectScreenshot({
  image,
  priority = false,
  sizes = "100vw",
  className = "",
}: ProjectScreenshotProps) {
  // Screenshots with known intrinsic dimensions render at their true aspect
  // ratio via object-contain, so no UI is ever cropped out of frame; images
  // without dimensions keep the original fixed 2:1 cover crop.
  const hasIntrinsicSize = Boolean(image.width && image.height);

  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-border bg-surface ${
        hasIntrinsicSize ? "" : "aspect-[2/1]"
      } ${className}`}
      style={
        hasIntrinsicSize
          ? { aspectRatio: `${image.width} / ${image.height}` }
          : undefined
      }
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        quality={90}
        className={
          hasIntrinsicSize
            ? "object-contain object-center"
            : "object-cover object-top"
        }
      />
      {!hasIntrinsicSize && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-transparent" />
      )}
      <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-white/5" />
    </div>
  );
}
