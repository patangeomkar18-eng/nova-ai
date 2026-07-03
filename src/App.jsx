import { Routes, Route } from "react-router-dom";
import LandingLayout from "./layouts/LandingLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import ImageGenerator from "./pages/ImageGenerator";
import Documents from "./pages/Documents";

export default function App() {
  return (
    <Routes>
      <Route element={<LandingLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
      </Route>

      <Route path="/login" element={<Login />} />

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/image-generator" element={<ImageGenerator />} />
        <Route path="/documents" element={<Documents />} />
      </Route>

      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}