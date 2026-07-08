import { Outlet } from "react-router-dom";

import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import PageBackground from "./PageBackground";

export default function LandingLayout() {
  return (
    <div className="min-h-screen text-white">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-20">

        <PageBackground>
          <Outlet />
        </PageBackground>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}