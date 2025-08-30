import React from "react";
import { motion } from "framer-motion";

const FLAVORS = [
  {
    name: "Berry Boost",
    gradient: "from-fuchsia-500 to-pink-500",
    calories: 80,
    protein: 12,
    carbs: 6,
  },
  {
    name: "Mint Sprint",
    gradient: "from-cyan-400 to-sky-500",
    calories: 70,
    protein: 11,
    carbs: 5,
  },
  {
    name: "Vanilla Volt",
    gradient: "from-amber-400 to-orange-500",
    calories: 75,
    protein: 12,
    carbs: 5,
  },
  {
    name: "Cocoa Charge",
    gradient: "from-violet-500 to-indigo-500",
    calories: 85,
    protein: 13,
    carbs: 6,
  },
];

export default function FlavorGallery() {
  return (
    <section id="flavors" className="py-18 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Flavors that fuel</h2>
          <p className="text-sm text-zinc-400">Sugar-free • Low-cal • High-protein</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FLAVORS.map((f, i) => (
            <FlavorCard key={f.name} flavor={f} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlavorCard({ flavor, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      className="group relative rounded-3xl border border-zinc-800/70 bg-gradient-to-b from-zinc-900/70 to-zinc-950 p-4 overflow-hidden"
    >
      <div className="absolute -top-20 -left-20 h-52 w-52 rounded-full opacity-25 blur-2xl bg-gradient-to-br from-fuchsia-500 to-cyan-500" />
      <div className="relative aspect-[4/5] rounded-2xl bg-zinc-900/60 border border-zinc-800 grid place-items-center overflow-hidden">
        <div className={`relative h-28 w-28 rounded-b-3xl bg-gradient-to-br ${flavor.gradient} shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] transition-transform duration-300 group-hover:-rotate-1 group-hover:translate-y-[-6px]`}> 
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-8 w-[90%] rounded-t-[24px] bg-white/90 backdrop-blur border border-white/40" />
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 h-5 w-24 rounded-full bg-black/40 blur" />
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{flavor.name}</h3>
          <span className="text-xs text-zinc-400">mini tub</span>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-2 text-xs text-zinc-300">
          <Pill label={`${flavor.calories} kcal`} />
          <Pill label={`${flavor.protein}g protein`} />
          <Pill label={`${flavor.carbs}g carbs`} />
        </div>
        <button className="mt-4 w-full rounded-xl bg-zinc-100 text-black py-2 text-sm font-medium hover:bg-white transition group-hover:shadow-[0_12px_30px_-12px_rgba(255,255,255,0.3)]">
          Add to cart
        </button>
      </div>
    </motion.div>
  );
}

function Pill({ label }) {
  return (
    <div className="rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1 text-center">
      {label}
    </div>
  );
}
