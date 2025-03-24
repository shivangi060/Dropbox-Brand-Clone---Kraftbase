"use client";
import AssetGrid from "@/components/AssetGrid";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react"; // Or any other icon you like

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Navbar />
      <AssetGrid />
      <section
        id="framework"
        className="h-screen bg-teal-100 flex items-center justify-center text-4xl"
      >
        Framework Section
      </section>
      <section
        id="voice"
        className="h-screen bg-teal-200 flex items-center justify-center text-4xl"
      >
        Voice & Tone Section
      </section>
      <section
        id="logo"
        className="h-screen bg-teal-300 flex items-center justify-center text-4xl"
      >
        Logo Section
      </section>
      <section
        id="typography"
        className="h-screen bg-teal-400 flex items-center justify-center text-4xl"
      >
        Typography Section
      </section>
      <section
        id="motion"
        className="h-screen bg-teal-500 flex items-center justify-center text-4xl"
      >
        Motion Section
      </section>
      <section
        id="iconography"
        className="h-screen bg-teal-600 flex items-center justify-center text-4xl"
      >
        Iconography Section
      </section>
      <section
        id="color"
        className="h-screen bg-teal-700 flex items-center justify-center text-4xl"
      >
        Color Section
      </section>
      <section
        id="imagery"
        className="h-screen bg-teal-800 flex items-center justify-center text-white text-4xl"
      >
        Imagery Section
      </section>

      {showButton && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-black text-white p-3 rounded-full shadow-lg"
        >
          <ArrowUp />
        </motion.button>
      )}
    </>
  );
}
