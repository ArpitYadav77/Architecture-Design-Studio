import { useEffect, useState } from "react";

const images = [
  "/architecture/arch1.png",
  "/architecture/arch2.png",
  "/architecture/arch3.png",
  "/architecture/arch4.png",
];

const Loader = () => {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);

      setTimeout(() => {
        const newIndex = Math.floor(Math.random() * images.length);
        setCurrent(newIndex);
        setNext((newIndex + 1) % images.length);
        setFade(false);
      }, 400);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      {/* Image Wrapper (keeps ratio clean) */}
      <div style={styles.imageWrapper}>
        {/* Current Image */}
        <img
          src={images[current]}
          alt="Architecture"
          style={{
            ...styles.image,
            opacity: fade ? 0 : 1,
          }}
        />

        {/* Next Image */}
        <img
          src={images[next]}
          alt="Architecture"
          style={{
            ...styles.image,
            opacity: fade ? 1 : 0,
          }}
        />
      </div>

      {/* Overlay Content */}
      <div style={styles.overlay}>
        <img src="/logo1.png" alt="Logo" style={styles.logo} />
        <p style={styles.text}>
          If the architecture is any
          good, a person who looks and
          listens will feel its good effects
          without noticing
        </p>
      </div>
    </div>
  );
};

const styles: any = {
  container: {
    position: "fixed",
    inset: 0,
    background: "#111",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },

  imageWrapper: {
    position: "relative",
    width: "70%",
    maxWidth: "1000px",
    height: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    position: "absolute",
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain", // prevents stretching
    transition: "opacity 0.4s ease-in-out",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.45)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
  },

  logo: {
    width: "120px",
    marginBottom: "20px",
  },

  text: {
    fontSize: "18px",
    letterSpacing: "1px",
    lineHeight: "1.6",
    maxWidth: "600px",
  },
};

export default Loader;