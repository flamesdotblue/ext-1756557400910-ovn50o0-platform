import React from "react";
import { motion } from "framer-motion";
import { Rocket, Package, Snowflake, Home } from "lucide-react";

const STEPS = [
  { label: "Order Placed", icon: Package },
  { label: "Packed Cold", icon: Snowflake },
  { label: "Out for Delivery", icon: Rocket },
  { label: "At Your Door", icon: Home },
];

export default function ShippingTimeline() {
  return (
    <section id="shipping" className="py-18 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Delivered in a flash</h2>
          <p className="text-sm text-zinc-400">Under 30 minutes in most areas</p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-zinc-800/70 bg-zinc-950">
          <div className="p-8">
            <div className="relative">
              <div className="h-1 w-full bg-zinc-800 rounded-full" />
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 shadow-[0_0_0_6px_rgba(236,72,153,0.15)]"
                initial={{ x: 0 }}
                animate={{ x: [0, "calc(100% - 0.75rem)", 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
                {STEPS.map((s, i) => (
                  <div key={s.label} className="text-center">
                    <div className="inline-flex items-center justify-center size-12 rounded-2xl border border-zinc-800 bg-zinc-900/70">
                      <s.icon className="size-5 text-zinc-200" />
                    </div>
                    <div className="mt-2 text-sm text-zinc-300">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
