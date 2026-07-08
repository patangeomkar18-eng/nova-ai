import commonBg from "../assets/common-bg.png";

export default function PageBackground({ children }) {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundImage: `url(${commonBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#09090F",
      }}
    >
      {children}
    </div>
  );
}