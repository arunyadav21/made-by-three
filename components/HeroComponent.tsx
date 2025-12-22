"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Zap, MessageCircle, Code2 } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const marqueeItems = [
    "WEB DEVELOPMENT",
    "•",
    "UI/UX DESIGN",
    "•",
    "DIGITAL MARKETING",
    "•",
    "BRAND IDENTITY",
    "•",
    "SOCIAL STRATEGY",
    "•",
    "FULL STACK",
    "•",
  ];

  return (
    <section className="relative min-h-screen w-full bg-slate-50 overflow-hidden font-sans selection:bg-blue-500 selection:text-white">
      {/* --- CSS & Keyframes --- */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap");

        .font-grotesk {
          font-family: "Space Grotesk", system-ui, sans-serif;
        }

        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        .glass-panel {
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }
      `}</style>

      {/* --- Background Elements --- */}
      <div className="absolute inset-0 bg-noise opacity-40 z-10 pointer-events-none mix-blend-overlay"></div>

      {/* Sharp Gradients */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] mix-blend-multiply animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] mix-blend-multiply"></div>
      <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-indigo-400/20 rounded-full blur-[80px] mix-blend-multiply"></div>

      {/* --- Top Marquee Bar --- */}
      <div className="relative z-20 w-full bg-white/80 backdrop-blur-sm border-b border-blue-100 py-3 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-4">
              {marqueeItems.map((item, idx) => (
                <span
                  key={idx}
                  className="text-sm font-bold tracking-widest text-blue-900/80 font-grotesk"
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-20 container mx-auto px-4 pt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* --- LEFT COL: Main Headline Area --- */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50/50 backdrop-blur-md mb-8 hover:scale-105 transition-transform cursor-default">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-sm font-bold text-blue-900 tracking-tight">
                MADE BY THREE STUDIO
              </span>
            </div>

            {/* Typography */}
            <h1 className="font-grotesk text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.9] text-slate-900 tracking-tighter mb-8">
              WE BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 italic pr-4">
                DIGITAL
              </span>
              <br />
              REALITIES.
            </h1>

            <p className="text-xl text-slate-600 max-w-lg leading-relaxed mb-10 font-medium">
              We don&apos;t just write code. We engineer vibes, craft pixels,
              and scale visions. The internet is boring.{" "}
              <span className="text-blue-600 font-bold underline decoration-wavy decoration-blue-300">
                Let&apos;s fix that.
              </span>
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
                href="/contact"
                className="group relative px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg overflow-hidden transition-all hover:shadow-[4px_4px_0px_0px_rgba(79,70,229,1)] active:translate-y-1 active:shadow-none"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2">
                  Start Project <ArrowUpRight size={20} />
                </span>
              </a>

              {/* <button className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-colors flex items-center gap-2">
                <Play size={20} className="fill-blue-600 text-blue-600" />
                Showreel
              </button> */}
            </div>

            {/* Social Proof / Stats */}
            <div className="mt-12 flex items-center gap-[-1rem]">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-gradient-to-br from-blue-${
                      i * 100
                    } to-purple-${i * 100} shadow-sm z-${10 - i}`}
                  >
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}&backgroundColor=b6e3f4`}
                      alt="avatar"
                      className="w-full h-full rounded-full"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-6">
                <p className="font-bold text-slate-900 text-lg leading-none">
                  8+ Projects
                </p>
                <p className="text-sm text-slate-500 font-medium">
                  Shipped Worldwide
                </p>
              </div>
            </div>
          </div>

          {/* --- RIGHT COL: Bento Grid Visuals --- */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 h-[600px] lg:h-auto">
            {/* Floating Card 1: The "Visual" */}
            <div className="absolute top-0 right-0 w-full sm:w-4/5 lg:w-full h-[320px] glass-panel rounded-[2rem] p-4 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 z-20">
              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-slate-100 group">
                {/* Mock Browser Header */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-1 rounded-full text-xs font-mono backdrop-blur-md z-10 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  madebythree.dev
                </div>

                {/* Abstract Content */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 p-4">
                  {/* Process Steps */}
                  <div className="grid grid-cols-3 gap-2 h-full">
                    {[
                      {
                        step: "01",
                        label: "Discover",
                        color: "from-blue-400 to-blue-300",
                      },
                      {
                        step: "02",
                        label: "Design",
                        color: "from-indigo-400 to-indigo-300",
                      },
                      {
                        step: "03",
                        label: "Develop",
                        color: "from-purple-400 to-purple-300",
                      },
                    ].map((item) => (
                      <div
                        key={item.step}
                        className="flex flex-col items-center justify-center"
                      >
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold mb-2`}
                        >
                          {item.step}
                        </div>
                        <span className="text-xs font-bold text-blue-900">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom stats */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/30 backdrop-blur-sm rounded-t-xl">
                    <div className="flex justify-between">
                      <div className="text-center">
                        <p className="font-bold text-lg text-blue-900">48h</p>
                        <p className="text-xs text-blue-800">Prototype</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-lg text-blue-900">2w</p>
                        <p className="text-xs text-blue-800">MVP</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-lg text-blue-900">100%</p>
                        <p className="text-xs text-blue-800">Satisfaction</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sticker */}
              <div className="absolute -top-6 -left-6 bg-yellow-300 text-black font-bold p-4 rounded-full rotate-[-12deg] shadow-lg border-2 border-black z-30">
                TOP RATED
                <div className="absolute inset-0 border-2 border-black rounded-full translate-x-1 translate-y-1 -z-10"></div>
              </div>
            </div>

            {/* Floating Card 2: Code Snippet / Tech */}
            <div className="absolute bottom-10 left-0 w-3/4 h-[240px] glass-panel rounded-[2rem] p-6 shadow-xl -rotate-3 hover:rotate-0 transition-transform duration-500 z-10 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <Code2 size={20} className="text-slate-400" />
              </div>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex gap-2">
                  <span className="text-purple-600">const</span>
                  <span className="text-blue-600">success</span>
                  <span className="text-slate-500">=</span>
                </div>
                <div className="pl-4 text-slate-600">
                  <span className="text-slate-900">design</span> +
                  <span className="text-slate-900"> code</span> +
                  <span className="text-slate-900"> strategy</span>;
                </div>
                <div className="text-slate-400"> Ready to launch 🚀</div>
              </div>

              <div className="mt-4 flex gap-2 overflow-hidden">
                {["React", "Next.js", "Tailwind", "Flutter", "iOS"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg border border-slate-200"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Floating Card 3: Small Widget */}
            <div className="absolute bottom-40 right-4 w-40 h-40 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[1.5rem] shadow-2xl z-30 flex flex-col items-center justify-center text-white p-4 text-center rotate-6 hover:rotate-12 transition-transform cursor-pointer">
              <MessageCircle size={32} className="mb-2" />
              <p className="text-sm font-bold leading-tight">
                Let&apos;s Talk Business
              </p>
              <div className="mt-2 text-xs opacity-80 bg-white/20 px-2 py-1 rounded-full">
                Online Now
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Bottom Ticker / Footer of Hero --- */}
      {/* <div className="absolute bottom-0 left-0 w-full py-6 border-t border-blue-100 bg-white/50 backdrop-blur-sm flex justify-between px-6 lg:px-20 text-xs sm:text-sm font-bold text-slate-500 tracking-wider uppercase">
        <div className="flex items-center gap-2">
          <Globe size={16} className="text-blue-500" /> Remote First
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <Sparkles size={16} className="text-purple-500" /> Pixel Perfect
        </div>
        <div className="flex items-center gap-2">
          San Francisco • London • Tokyo
        </div>
      </div> */}
    </section>
  );
}
