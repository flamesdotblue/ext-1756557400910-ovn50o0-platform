import React, { useMemo, useState } from "react";
import { Rocket, Clock, Package, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [address, setAddress] = useState("");
  const [showEta, setShowEta] = useState(false);
  const eta = useMemo(() => {
    const min = 12;
    const max = 30;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }, [showEta]);

  const handleOrder = (e) => {
    e.preventDefault();
    if (!address.trim()) return;
    setShowEta(true);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight"
            >
              FedEx Ice Cream
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-cyan-400">Mini. Mighty. Delivered fast.</span>
            </motion.h1>

            <p className="mt-5 text-zinc-300 text-lg max-w-prose">
              Mini-sized, sugar-free, low-calorie, and packed with protein. Your guilt-free indulgence, delivered in 30 minutes or less.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Badge icon={ShieldCheck} label="Guilt-Free Indulgence" />
              <Badge icon={Package} label="Packed with Protein" />
              <Badge icon={Rocket} label="Delivered in a Flash" />
            </div>

            <form onSubmit={handleOrder} className="mt-8 flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your address to check delivery time"
                  className="w-full rounded-xl border border-zinc-800/80 bg-zinc-900/60 focus:bg-zinc-900 px-4 py-3 outline-none ring-0 focus:border-zinc-700 transition placeholder:text-zinc-500"
                />
                <Clock className="absolute right-3 top-1/2 -translate-y-1/2 size-5 text-zinc-500" />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-tr from-fuchsia-600 to-cyan-500 px-5 py-3 font-medium text-white shadow-[0_10px_40px_-10px] shadow-fuchsia-600/40 hover:shadow-cyan-500/30 transition-transform active:scale-95"
              >
                <Rocket className="size-5" /> Order Now
              </button>
            </form>
            <AnimatePresence>
              {showEta && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="mt-3 text-sm text-zinc-300"
                >
                  Estimated delivery: <span className="text-white font-medium">{eta} minutes</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative mx-auto w-full max-w-md"
            >
              {/* 3D-inspired product hero */}
              <div className="relative h-80">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/40 shadow-2xl shadow-black/50 backdrop-blur-sm" />

                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <Tub colorFrom="from-fuchsia-400" colorTo="to-pink-400" label="Berry Boost" />
                </div>
                <div className="absolute top-16 -left-2 rotate-[-8deg]">
                  <Tub small colorFrom="from-cyan-400" colorTo="to-blue-400" label="Mint Sprint" />
                </div>
                <div className="absolute top-24 -right-4 rotate-[8deg]">
                  <Tub small colorFrom="from-amber-400" colorTo="to-orange-400" label="Vanilla Volt" />
                </div>

                <div className="absolute bottom-6 inset-x-6 h-24 rounded-2xl bg-gradient-to-t from-black/50 to-transparent blur-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon: Icon, label }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-sm text-zinc-300">
      <Icon className="size-4 text-zinc-400" />
      <span>{label}</span>
    </div>
  );
}

function Tub({ small = false, colorFrom = "from-fuchsia-400", colorTo = "to-cyan-400", label = "" }) {
  const scale = small ? "scale-75" : "scale-100";
  return (
    <div className={`relative ${scale}`}>
      <div className={`relative h-40 w-40 rounded-b-3xl bg-gradient-to-br ${colorFrom} ${colorTo} shadow-[0_25px_60px_-20px_rgba(0,0,0,0.6)]`}> 
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 h-10 w-[90%] rounded-t-[28px] bg-white/90 backdrop-blur border border-white/40" />
        <div className="absolute inset-x-2 bottom-2 h-10 rounded-xl bg-white/10 border border-white/30 backdrop-blur-sm" />
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-6 w-36 rounded-full bg-black/40 blur" />
      </div>
      {label && (
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center text-xs uppercase tracking-wide text-zinc-300">
          {label}
        </div>
      )}
    </div>
  );
}
