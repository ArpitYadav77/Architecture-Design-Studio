import { useEffect, useState } from "react";

const Loader = ({ onFinish }: { onFinish: () => void }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const start = setTimeout(() => {
      setAnimate(true);
    }, 300);

    const finish = setTimeout(() => {
      onFinish();
    }, 3500); // must match transition duration

    return () => {
      clearTimeout(start);
      clearTimeout(finish);
    };
  }, [onFinish]);

  return (
    <div
      style={{
        ...styles.container,
        transform: animate ? "scale(6)" : "scale(1)",
        opacity: animate ? 0 : 1,
      }}
    >
      <img
  src="/logo1.png"
  alt="Firm Logo"
  style={{
    ...styles.logo,
    opacity: animate ? 0 : 1,
    transition: "opacity 2.2s ease-out"
  }}
/>
    </div>
  );
};

const styles: any = {
  container: {
    position: "fixed",
    inset: 0,
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    transition:
      "transform 3.2s cubic-bezier(0.22, 1, 0.36, 1), opacity 2.5s ease-out",
    transformOrigin: "center center",
  },

  logo: {
    width: "180px",
    height: "auto",
  },
};

export default Loader;