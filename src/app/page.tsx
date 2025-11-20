"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About";
import Services from "./components/Services";
import CarList from "./components/CarList";
import Testimonials from "./components/Testimonials";
import AppStoreBanner from "./components/AppStoreBanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  // Dark mode features
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Read persisted preference on the client
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined" || typeof window === "undefined") {
      return;
    }
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [theme]);
  // AOS Initialization
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <HeroSection theme={theme} />
      <About />
      <Services />
      <CarList />
      <Testimonials />
      <AppStoreBanner />
      <Contact />
      <Footer />
    </div>
  );
}
