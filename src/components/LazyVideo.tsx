import {
  useRef,
  useState,
  useCallback,
  useEffect,
  forwardRef,
  useImperativeHandle,
  memo,
} from "react";

/* ═══════════════════════════════════════════════════════════════════
   Public imperative API
   ═══════════════════════════════════════════════════════════════════ */
export interface LazyVideoHandle {
  /** Hot-swap the video source without remounting the DOM node. */
  load(src: string, poster?: string): void;
  /** Start playback (catches autoplay rejections silently). */
  play(): Promise<void>;
  /** Pause playback. */
  pause(): void;
  /** `true` once the current source can play without buffering. */
  readonly ready: boolean;
  /** The underlying HTMLVideoElement (escape hatch). */
  readonly el: HTMLVideoElement | null;
}

/* ═══════════════════════════════════════════════════════════════════
   Props
   ═══════════════════════════════════════════════════════════════════ */
interface LazyVideoProps {
  /** Video loaded on first mount — later changes use handle.load(). */
  initialSrc?: string;
  /** Poster image displayed while the video buffers. */
  poster?: string;
  /** Drive layer opacity: true → 1, false → 0. */
  isActive: boolean;
  /** Crossfade transition duration in ms (default 1 200). */
  fadeDuration?: number;
  /** Called when the video finishes playing (no loop). */
  onEnded?: () => void;
  /** Extra Tailwind / CSS classes on the wrapper. */
  className?: string;
}

/* ═══════════════════════════════════════════════════════════════════
   Component

   GPU-accelerated background-video layer for the hero crossfade
   system.

   Guarantees:
   ─ The <video> DOM node is NEVER unmounted / recreated.
   ─ Source changes are imperative (handle.load()), so React never
     tears down the element.
   ─ Opacity is compositor-only (will-change: opacity) → 60 fps.
   ─ A poster <img> dissolves out once the buffer is ready,
     preventing any white / black flash on first load.
   ═══════════════════════════════════════════════════════════════════ */
const LazyVideo = memo(
  forwardRef<LazyVideoHandle, LazyVideoProps>(
    (
      {
        initialSrc,
        poster: initialPoster,
        isActive,
        fadeDuration = 1200,
        onEnded,
        className = "",
      },
      ref,
    ) => {
      const videoRef = useRef<HTMLVideoElement>(null);
      const srcRef = useRef(initialSrc);
      const [ready, setReady] = useState(false);
      const [posterSrc, setPosterSrc] = useState(initialPoster);

      /* ── Imperative handle ────────────────────────────────────── */
      useImperativeHandle(
        ref,
        () => ({
          load(src: string, poster?: string) {
            const v = videoRef.current;
            if (!v || srcRef.current === src) return;
            srcRef.current = src;
            setReady(false);
            setPosterSrc(poster);
            // Disable autoplay so the preloading layer doesn't
            // start playing while it's still hidden (opacity 0).
            v.autoplay = false;
            v.src = src;
            v.load();
          },

          play() {
            const v = videoRef.current;
            if (!v) return Promise.resolve();
            v.muted = true;
            return v.play().catch(() => {});
          },

          pause() {
            videoRef.current?.pause();
          },

          get ready() {
            return ready;
          },

          get el() {
            return videoRef.current;
          },
        }),
        [ready],
      );

      /* ── First mount: set initial source ──────────────────────── */
      useEffect(() => {
        const v = videoRef.current;
        if (!v) return;
        // React's `muted` JSX prop doesn't always propagate the DOM
        // property on every browser — force it for autoplay compat.
        v.muted = true;
        if (initialSrc) {
          v.src = initialSrc;
          v.load();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      const handleCanPlayThrough = useCallback(() => setReady(true), []);

      /* ── Render ───────────────────────────────────────────────── */
      return (
        <div
          className={`absolute inset-0 ${className}`}
          style={{
            opacity: isActive ? 1 : 0,
            transition: `opacity ${fadeDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
            willChange: "opacity",
            zIndex: isActive ? 2 : 1,
            backfaceVisibility: "hidden",
            contain: "layout paint",
          }}
          aria-hidden={!isActive}
        >
          {/* Poster fallback — dissolves once the video can play */}
          {posterSrc && (
            <img
              src={posterSrc}
              alt=""
              aria-hidden="true"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                zIndex: 0,
                opacity: ready ? 0 : 1,
                transition: "opacity 0.6s ease",
              }}
            />
          )}

          {/* Video — this DOM node is NEVER destroyed */}
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            onCanPlayThrough={handleCanPlayThrough}
            onEnded={onEnded}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 1 }}
          />
        </div>
      );
    },
  ),
);

LazyVideo.displayName = "LazyVideo";
export default LazyVideo;
