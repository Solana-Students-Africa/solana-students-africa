import { useState } from "react";

const SolanaAIGrid = () => {
  const cards = [
    {
      id: 1,
      title: "Campus Tools with Solana Pay",
      description:
        "Build intelligent decentralized applications powered by AI. Explore how machine learning and data insights can revolutionize on-chain finance.",
      gradient: "from-[#0b38b7] to-[#45e0e2]",
      span: "row-span-3",
      titleBreaks: ["Campus", "Tools with", "Solana Pay"],
    },
    {
      id: 2,
      title: "AI-Powered Metadata Engines",
      description:
        "Advanced AI systems that automatically generate and optimize metadata for blockchain assets and NFTs.",
      gradient: "from-cyan-600 via-cyan-500 to-cyan-300",
      span: "row-span-2",
      titleBreaks: ["AI-Powered", "Metadata", "Engines"],
    },
    {
      id: 3,
      title: "Education & Accessibility",
      description:
        "Making Web3 and AI technologies accessible to everyone through innovative educational platforms and tools.",
      gradient: "from-blue-800 via-blue-600 to-cyan-500",
      span: "row-span-4",
      titleBreaks: ["Education &", "Accessibility"],
    },
    {
      id: 4,
      title: "DeFi + AI Analytics",
      description:
        "Sophisticated analytics tools that combine DeFi protocols with AI-driven insights for better trading decisions.",
      gradient: "from-blue-700 via-blue-600 to-blue-500",
      span: "row-span-2",
      titleBreaks: ["DeFi + AI", "Analytics"],
    },
    {
      id: 5,
      title: "AI Agents",
      description:
        "Autonomous AI agents that can interact with Solana protocols and execute complex blockchain operations.",
      gradient: "from-slate-900 via-slate-700 to-slate-600",
      span: "row-span-1",
      titleBreaks: ["AI Agents"],
    },
  ];

  return (
    <>
      <div className="hidden lg:grid lg:h-[600px] lg:grid-cols-3 lg:grid-rows-3 lg:justify-between lg:gap-3">
        {cards.map((card, index) => (
          <div
            data-animate-scale
            data-delay={index / 10 + 0.5}
            data-easing="NAVIGATION.button"
            key={card.id}
            className={`bg-gradient-to-br ${card.gradient} group relative flex items-center justify-center overflow-hidden rounded-3xl p-8 ${card.span}`}
          >
            <div className="absolute inset-0 z-0 flex items-center justify-center">
              <span className="font-gellix text-[400px] leading-none font-medium text-white/20 select-none">
                {index + 1}
              </span>
            </div>

            <div className="absolute inset-0 z-5 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

            <div className="relative z-10 flex h-full flex-col items-center justify-center">
              <h2 className="text-center text-3xl font-bold text-white transition-all duration-500 group-hover:-translate-y-12">
                {card.titleBreaks.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < card.titleBreaks.length - 1 && <br />}
                  </span>
                ))}
              </h2>

              <div className="mt-6 max-w-xs text-center text-sm leading-relaxed text-white/90 opacity-0 transition-all delay-200 duration-500 group-hover:opacity-100">
                {card.description}
              </div>
            </div>

            {card.id === 1 && (
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/10 blur-xl"></div>
            )}
            {card.id === 2 && (
              <div className="absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white/5 blur-2xl"></div>
            )}
            {card.id === 3 && (
              <>
                <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 transform rounded-full bg-white/5 blur-xl"></div>
                <div className="absolute bottom-0 left-0 h-24 w-24 -translate-x-4 translate-y-4 transform rounded-full bg-white/5 blur-lg"></div>
              </>
            )}
            {card.id === 4 && (
              <div className="absolute -top-5 -right-5 h-20 w-20 rounded-full bg-white/10 blur-lg"></div>
            )}
            {card.id === 5 && (
              <div className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-white/10 blur-xl"></div>
            )}
          </div>
        ))}

        <div className=""></div>
      </div>

      <div className="space-y-4 lg:hidden">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`bg-gradient-to-br ${card.gradient} group relative flex h-[300px] items-center justify-center overflow-hidden rounded-3xl p-6 transition-all duration-500 sm:h-[350px] md:h-[400px]`}
          >
            <div className="absolute inset-0 z-0 flex items-center justify-center">
              <span className="font-gellix text-[150px] leading-none font-medium text-white/20 select-none sm:text-[200px] md:text-[250px]">
                {index + 1}
              </span>
            </div>

            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
              <h2 className="mb-4 text-center text-xl font-bold text-white sm:text-2xl md:text-3xl">
                {card.titleBreaks.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < card.titleBreaks.length - 1 && <br />}
                  </span>
                ))}
              </h2>

              <div className="max-w-sm px-4 text-center text-sm leading-relaxed text-white/90 sm:text-base">
                {card.description}
              </div>
            </div>

            {card.id === 1 && (
              <div className="absolute -top-5 -right-5 h-20 w-20 rounded-full bg-white/10 blur-xl"></div>
            )}
            {card.id === 2 && (
              <div className="absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white/5 blur-2xl"></div>
            )}
            {card.id === 3 && (
              <>
                <div className="absolute top-0 right-0 h-20 w-20 translate-x-4 -translate-y-4 transform rounded-full bg-white/5 blur-xl"></div>
                <div className="absolute bottom-0 left-0 h-16 w-16 -translate-x-2 translate-y-2 transform rounded-full bg-white/5 blur-lg"></div>
              </>
            )}
            {card.id === 4 && (
              <div className="absolute -top-3 -right-3 h-16 w-16 rounded-full bg-white/10 blur-lg"></div>
            )}
            {card.id === 5 && (
              <div className="absolute -bottom-5 -left-5 h-18 w-18 rounded-full bg-white/10 blur-xl"></div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

const TracksSection = () => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-12 sm:py-16 md:py-20">
      <SolanaAIGrid />
    </div>
  );
};

export default TracksSection;
