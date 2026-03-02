import { useEffect, useState } from "react";

/**
 * Loader renders as a fixed overlay ON TOP of the already-mounted app.
 * Phases:
 *   0 ms  — visible, logo shown
 *   300ms — logo fades out, overlay starts zooming
 *   2200ms — overlay mostly gone, start full fade-out
 *   2600ms — fully transparent, onFinish unmounts it
 */
const Loader = ({ onFinish }: { onFinish: () => void }) => {
  const [animate, setAnimate] = useState(false);  // zoom phase
  const [leaving, setLeaving] = useState(false);  // final fade-out

  useEffect(() => {
    const t1 = setTimeout(() => setAnimate(true), 300);
    const t2 = setTimeout(() => setLeaving(true), 2200);
    const t3 = setTimeout(() => onFinish(), 2700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onFinish]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        transform: animate ? "scale(5)" : "scale(1)",
        opacity: leaving ? 0 : 1,
        transition: [
          "transform 2.4s cubic-bezier(0.22, 1, 0.36, 1)",
          "opacity 0.45s ease-out",
        ].join(", "),
        transformOrigin: "center center",
        pointerEvents: leaving ? "none" : "all",
      }}
    >
      <img
        src="/logo1.png"
        alt="Firm Logo"
        style={{
          width: "180px",
          height: "auto",
          opacity: animate ? 0 : 1,
          transition: "opacity 1.8s ease-out",
        }}
      />
    </div>
  );
};

export default Loader;