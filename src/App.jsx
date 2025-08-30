import React from "react";
import Hero from "./components/Hero";
import FlavorGallery from "./components/FlavorGallery";
import ShippingTimeline from "./components/ShippingTimeline";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-zinc-100 antialiased">
      <Hero />
      <FlavorGallery />
      <ShippingTimeline />
      <Testimonials />
      <footer className="border-t border-zinc-800/60 py-10 mt-20">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-400 text-sm">© {new Date().getFullYear()} FedEx Ice Cream — Guilt-free joy in minutes.</p>
          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <a href="#flavors" className="hover:text-zinc-200 transition">Flavors</a>
            <a href="#shipping" className="hover:text-zinc-200 transition">Shipping</a>
            <a href="#testimonials" className="hover:text-zinc-200 transition">Reviews</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
