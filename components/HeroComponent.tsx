/* eslint-disable @next/next/no-img-element */
// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { ArrowRight, Play, Star, Award, Users } from "lucide-react";

// export default function Hero() {
//   const [currentText, setCurrentText] = useState(0);

//   const rotatingTexts = [
//     "Web Development",
//     "UI/UX Design",
//     "Digital Marketing",
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16">
//       {/* Background decorative elements */}
//       <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
//       <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
//       <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
//           {/* Left content */}
//           <div className="lg:w-1/2 text-center lg:text-left">
//             <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm">
//               <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
//               Three skills, one vision
//             </div>

//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
//               We Transform <span className="text-blue-600">Ideas</span> Into
//               <span className="relative">
//                 <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//                   Digital Excellence
//                 </span>
//                 <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-1"></div>
//               </span>
//             </h1>

//             <p className="text-xl text-gray-600 mb-8 max-w-2xl">
//               MadeByThree combines expert web development, stunning design, and
//               strategic marketing to create digital solutions that drive your
//               business forward.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 mb-12">
//               <Link
//                 href="/contact"
//                 className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
//               >
//                 Start Your Project
//                 <ArrowRight
//                   size={20}
//                   className="group-hover:translate-x-1 transition-transform"
//                 />
//               </Link>

//               <button className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-full shadow-md hover:shadow-lg border border-gray-200 transition-all duration-300">
//                 <Play size={20} className="text-blue-600" fill="currentColor" />
//                 Watch Showreel
//               </button>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-md">
//               <div className="text-center lg:text-left">
//                 <div className="flex items-center justify-center lg:justify-start">
//                   <Users className="text-blue-600 mr-2" size={20} />
//                   <span className="text-2xl font-bold text-gray-900">8+</span>
//                 </div>
//                 <p className="text-gray-600 text-sm">Happy Clients</p>
//               </div>

//               <div className="text-center lg:text-left">
//                 <div className="flex items-center justify-center lg:justify-start">
//                   <Award className="text-purple-600 mr-2" size={20} />
//                   <span className="text-2xl font-bold text-gray-900">8+</span>
//                 </div>
//                 <p className="text-gray-600 text-sm">Projects Completed</p>
//               </div>

//               <div className="text-center lg:text-left col-span-2 md:col-span-1">
//                 <div className="flex items-center justify-center lg:justify-start">
//                   <Star className="text-indigo-600 mr-2" size={20} />
//                   <span className="text-2xl font-bold text-gray-900">
//                     4.9/5
//                   </span>
//                 </div>
//                 <p className="text-gray-600 text-sm">Client Rating</p>
//               </div>
//             </div>
//           </div>

//           {/* Right content - visual element */}
//           <div className="lg:w-1/2 relative">
//             <div className="relative">
//               {/* Main card */}
//               <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform rotate-3">
//                 <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
//                   Featured Work
//                 </div>

//                 <div className="mb-4 h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl overflow-hidden">
//                   <div className="h-full flex items-center justify-center">
//                     <div className="text-white text-center">
//                       <div className="text-4xl font-bold mb-2">
//                         Project Showcase
//                       </div>
//                       <div className="text-sm">Modern Web Solution</div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex justify-between items-center mb-4">
//                   <h3 className="font-bold text-gray-900">
//                     E-commerce Platform
//                   </h3>
//                   <span className="text-sm text-blue-600 font-semibold">
//                     Web Dev + Design
//                   </span>
//                 </div>

//                 <p className="text-gray-600 text-sm mb-6">
//                   A fully responsive e-commerce solution with seamless checkout
//                   and modern UI.
//                 </p>

//                 <div className="flex gap-2">
//                   <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
//                     React
//                   </span>
//                   <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
//                     Node.js
//                   </span>
//                   <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
//                     MongoDB
//                   </span>
//                 </div>
//               </div>

//               {/* Decorative elements */}
//               <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 rounded-2xl transform -rotate-12 z-[-1]"></div>
//               <div className="absolute -top-6 -right-6 w-28 h-28 bg-purple-100 rounded-2xl transform rotate-6 z-[-1]"></div>
//             </div>

//             {/* Floating elements */}
//             <div className="absolute -top-4 left-10 bg-white p-3 rounded-lg shadow-lg flex items-center">
//               <div className="mr-3">
//                 <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
//                   <Star
//                     className="text-green-600"
//                     size={20}
//                     fill="currentColor"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <div className="text-sm font-semibold">Client Review</div>
//                 <div className="text-xs text-gray-500">
//                   &quot;Exceeded expectations!&quot;
//                 </div>
//               </div>
//             </div>

//             <div className="absolute bottom-10 -right-4 bg-white p-3 rounded-lg shadow-lg">
//               <div className="flex">
//                 {[1, 2, 3].map((item) => (
//                   <div
//                     key={item}
//                     className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white text-xs font-bold -ml-2 first:ml-0 border-2 border-white"
//                   >
//                     {item}
//                   </div>
//                 ))}
//               </div>
//               <div className="text-xs font-semibold mt-2">
//                 Team Collaboration
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
//         <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes blob {
//           0% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//           100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Play, Zap, MessageCircle, Code2 } from "lucide-react";

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
                  500+ Projects
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
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-40 animate-pulse"></div>
                  </div>
                  <div className="absolute bottom-0 w-full p-6">
                    <div className="w-full h-32 bg-white/40 backdrop-blur-md rounded-xl border border-white/50 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <div className="flex justify-between items-start mb-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                          <Zap size={16} fill="currentColor" />
                        </div>
                        <span className="text-xs font-bold text-blue-900 bg-blue-100 px-2 py-1 rounded-md">
                          NEW
                        </span>
                      </div>
                      <div className="h-2 w-2/3 bg-slate-900/10 rounded-full mb-2"></div>
                      <div className="h-2 w-1/2 bg-slate-900/10 rounded-full"></div>
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
