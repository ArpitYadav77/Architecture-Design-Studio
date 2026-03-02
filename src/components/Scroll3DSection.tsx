import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface VideoStage {
  src: string;
  index: string;
  category: string;
  title: string;
  description: string;
}

const stages: VideoStage[] = [
  {
    src: "/architecture/building_view.mp4",
    index: "01",
    category: "Urban Architecture",
    title: "Monumental Civic Design",
    description:
      "Landmark structures that define cityscapes and endure generations of public memory.",
  },
  {
    src: "/architecture/society_view.mp4",
    index: "02",
    category: "Residential Communities",
    title: "Integrated Living Spaces",
    description:
      "Master-planned communities where landscape, light, and living seamlessly converge.",
  },
  {
    src: "/architecture/house_lawn.mp4",
    index: "03",
    category: "Private Residences",
    title: "Craft in Every Detail",
    description:
      "Homes designed with precision, purpose, and a material language built to outlast time.",
  },
  {
    src: "/architecture/reception.mp4",
    index: "04",
    category: "Interior Environments",
    title: "Refined Interior Language",
    description:
      "Spatial experiences that balance sculptural form with the warmth of true habitation.",
  },
];

// Timeline configuration
const UNITS_PER_STAGE = 2;
const TOTAL_UNITS = stages.length * UNITS_PER_STAGE; // 8
const PX_PER_UNIT = 500; // 500px scroll per unit → 4000px total pin

const Scroll3DSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!pinnedRef.current) return;

      // ── Master timeline scrubbed to scroll ──────────────────────────
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinnedRef.current,
          start: "top top",
          end: `+=${TOTAL_UNITS * PX_PER_UNIT}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      stages.forEach((_, i) => {
        const card = cardRefs.current[i];
        const text = textRefs.current[i];
        const dot = dotRefs.current[i];
        if (!card || !text) return;

        const st = i * UNITS_PER_STAGE; // stage start on timeline
        const inEnd = st + 0.85;         // rotate-in completes
        const holdEnd = st + 1.35;       // hold window ends
        const outEnd = st + UNITS_PER_STAGE; // stage ends

        // ─ Initial state ────────────────────────────────────────────
        gsap.set(card, {
          rotationY: -58,
          rotationX: -4,
          opacity: 0,
          scale: 0.86,
          z: -80,
        });
        gsap.set(text, { opacity: 0, y: 28 });

        // ─ Rotate in ────────────────────────────────────────────────
        tl.to(
          card,
          {
            rotationY: 0,
            rotationX: 0,
            opacity: 1,
            scale: 1,
            z: 0,
            duration: 0.85,
            ease: "power2.inOut",
          },
          st
        )
          .to(
            text,
            { opacity: 1, y: 0, duration: 0.65, ease: "power2.out" },
            st + 0.22
          );

        // ─ Activate progress dot ─────────────────────────────────────
        if (dot) {
          tl.to(dot, { scaleX: 1, opacity: 1, duration: 0.3 }, st + 0.35);
        }

        // ─ Rotate out (all but last) ─────────────────────────────────
        if (i < stages.length - 1) {
          tl.to(
            card,
            {
              rotationY: 58,
              rotationX: 4,
              opacity: 0,
              scale: 0.86,
              z: -80,
              duration: 0.65,
              ease: "power2.inOut",
            },
            holdEnd
          )
            .to(
              text,
              { opacity: 0, y: -18, duration: 0.4, ease: "power1.in" },
              holdEnd
            );

          if (dot) {
            tl.to(
              dot,
              { scaleX: 0, opacity: 0.25, duration: 0.25 },
              holdEnd + 0.35
            );
          }
        }
        // Last video: stay visible, subtle zoom to close
        else {
          tl.to(
            card,
            { scale: 1.02, duration: 0.6, ease: "power1.inOut" },
            holdEnd
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <div
        ref={pinnedRef}
        className="relative w-full overflow-hidden"
        style={{
          height: "100vh",
          background:
            "linear-gradient(158deg, #f0ece3 0%, #e9e1d5 45%, #ede6d9 100%)",
        }}
      >
        {/* ── Architectural grid texture ───────────────────────────── */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(110,90,60,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(110,90,60,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />

        {/* ── Top-left section label ───────────────────────────────── */}
        <div className="absolute top-9 left-10 z-20 select-none">
          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "0.62rem",
              letterSpacing: "0.24em",
              color: "#9a8b78",
              textTransform: "uppercase",
            }}
          >
            Architecture in Motion
          </p>
        </div>

        {/* ── Decorative vertical rule ─────────────────────────────── */}
        <div
          aria-hidden="true"
          className="absolute left-10 top-20 bottom-20 pointer-events-none"
          style={{ width: "1px", background: "rgba(110,90,60,0.12)" }}
        />

        {/* ── Perspective stage ────────────────────────────────────── */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ perspective: "1200px", perspectiveOrigin: "50% 48%" }}
        >
          {stages.map((stage, i) => (
            <div
              key={stage.index}
              className="absolute inset-0 flex flex-col items-center justify-center px-4"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* ── Video card ──────────────────────────────────────── */}
              <div
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                style={{
                  position: "relative",
                  width: "min(74vw, 876px)",
                  aspectRatio: "16 / 9",
                  borderRadius: "5px",
                  overflow: "hidden",
                  boxShadow:
                    "0 28px 72px rgba(50,38,18,0.30), 0 4px 14px rgba(50,38,18,0.10)",
                  transformStyle: "preserve-3d",
                  willChange: "transform, opacity",
                  flexShrink: 0,
                }}
              >
                <video
                  src={stage.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                {/* Vignette */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.06) 0%, transparent 28%, transparent 68%, rgba(0,0,0,0.22) 100%)",
                    pointerEvents: "none",
                  }}
                />
                {/* Stage index badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "1.1rem",
                    left: "1.3rem",
                    fontFamily: "sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    color: "rgba(255,255,255,0.75)",
                    textTransform: "uppercase",
                    pointerEvents: "none",
                  }}
                >
                  {stage.index}
                </div>
              </div>

              {/* ── Text block ──────────────────────────────────────── */}
              <div
                ref={(el) => {
                  textRefs.current[i] = el;
                }}
                className="text-center"
                style={{ marginTop: "2rem", maxWidth: "520px", padding: "0 1rem" }}
              >
                <p
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.22em",
                    color: "#9a8b78",
                    textTransform: "uppercase",
                    marginBottom: "0.55rem",
                  }}
                >
                  {stage.category}
                </p>
                <h3
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "clamp(1.35rem, 2.6vw, 2.05rem)",
                    fontWeight: 400,
                    letterSpacing: "0.015em",
                    color: "#221c12",
                    lineHeight: 1.2,
                    marginBottom: "0.75rem",
                  }}
                >
                  {stage.title}
                </h3>
                <p
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "0.825rem",
                    lineHeight: 1.7,
                    color: "#6e6050",
                    fontWeight: 300,
                    letterSpacing: "0.008em",
                  }}
                >
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Progress bar indicator ───────────────────────────────── */}
        <div
          className="absolute bottom-9 left-1/2 flex items-center gap-3"
          style={{ transform: "translateX(-50%)" }}
        >
          {stages.map((_, i) => (
            <span
              key={i}
              ref={(el) => {
                dotRefs.current[i] = el;
              }}
              style={{
                display: "block",
                width: "36px",
                height: "1px",
                background: "#2a2015",
                opacity: 0.25,
                transformOrigin: "left center",
                transform: "scaleX(0)",
              }}
            />
          ))}
        </div>

        {/* ── Scroll cue ──────────────────────────────────────────── */}
        <div
          className="absolute bottom-9 right-10 select-none"
          style={{
            fontFamily: "sans-serif",
            fontSize: "0.58rem",
            letterSpacing: "0.2em",
            color: "#9a8b78",
            textTransform: "uppercase",
          }}
        >
          Scroll to Explore
        </div>

        {/* ── Stage count ─────────────────────────────────────────── */}
        <div
          className="absolute bottom-9 left-10 select-none"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            color: "#9a8b78",
          }}
        >
          {stages.length} Perspectives
        </div>
      </div>
    </div>
  );
};

export default Scroll3DSection;
