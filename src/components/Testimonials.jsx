import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Ava P.",
    text: "Finally, dessert that fits my macros. Berry Boost is my go-to post-workout treat!",
    rating: 5,
  },
  {
    name: "Jordan K.",
    text: "Actually tastes like real ice cream and shows up crazy fast. I’m obsessed.",
    rating: 5,
  },
  {
    name: "Sam R.",
    text: "Mint Sprint at 10pm without the sugar crash? Say less.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-18 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Loved by late-night snackers</h2>
          <p className="text-sm text-zinc-400">Real reviews from real sweet tooths</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-3xl border border-zinc-800/70 bg-zinc-950 p-6"
            >
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={`size-4 ${idx < r.rating ? "text-yellow-400 fill-yellow-400" : "text-zinc-600"}`}
                  />
                ))}
              </div>
              <p className="mt-4 text-zinc-300 leading-relaxed">{r.text}</p>
              <div className="mt-4 text-sm text-zinc-400">— {r.name}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center">
          <button className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-200 hover:border-zinc-700 hover:bg-zinc-900">
            See more reviews
          </button>
        </div>
      </div>
    </section>
  );
}
