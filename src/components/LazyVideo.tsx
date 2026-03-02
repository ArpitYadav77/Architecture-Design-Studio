import { useEffect, useRef, useState, memo } from "react";

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
  /** Root margin for IntersectionObserver — how early to start loading */
  rootMargin?: string;
  /** Whether to force-load regardless of viewport (e.g. above-the-fold) */
  priority?: boolean;
}

/**
 * Viewport-aware lazy video component.
 * - Only loads the video source when the element enters (or is near) the viewport.
 * - Shows a poster image until the video is ready, preventing blank loading states.
 * - Autoplay, muted, loop, playsInline — optimised for background/cinematic use.
 * - Uses `preload="none"` until intersection, then switches to `preload="auto"`.
 * - Pauses videos that scroll out of view to save resources.
 */
const LazyVideo = memo(({
  src,
  poster,
  className = "",
  style,
  rootMargin = "200px 0px",
  priority = false,
}: LazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(priority);
  const [isLoaded, setIsLoaded] = useState(false);

  // Intersection Observer — load video when near viewport
  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { rootMargin, threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [priority, rootMargin]);

  // Play/pause based on visibility to save GPU/CPU
  useEffect(() => {
    if (!videoRef.current || !isInView) return;

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#1a1510",
        ...style,
      }}
    >
      {/* Poster fallback — visible until video loads */}
      {poster && !isLoaded && (
        <img
          src={poster}
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        />
      )}

      {isInView && (
        <video
          ref={videoRef}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload={priority ? "auto" : "metadata"}
          onLoadedData={() => setIsLoaded(true)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        />
      )}
    </div>
  );
});

LazyVideo.displayName = "LazyVideo";

export default LazyVideo;
