import { useEffect } from "react";

const Loader = () => {
  // Optional: auto-hide after a short delay (buffer effect)
  useEffect(() => {
    const timer = setTimeout(() => {
      // Trigger transition to main interface here
      // e.g., setLoading(false)
    }, 1500); // 1.5s intro buffer

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.container}>
      <img src="/logo1.png" alt="Firm Logo" style={styles.logo} />
    </div>
  );
};

const styles: any = {
  container: {
    position: "fixed",
    inset: 0,
    backgroundColor: "#ffffff", // Change to "#000" or subtle neutral if preferred
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },

  logo: {
    width: "160px", // Adjust as needed
    height: "auto",
    objectFit: "contain",
  },
};

export default Loader;