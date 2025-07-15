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
    <div className="grid h-[600px] grid-cols-3 grid-rows-3 justify-between gap-3">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`bg-gradient-to-br ${card.gradient} group relative flex items-center justify-center overflow-hidden rounded-3xl p-8 transition-all duration-500 ${card.span}`}
        >
          {/* Big Overlay Number */}
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <span className="font-gellix text-[400px] leading-none font-medium text-white/20 select-none">
              {index + 1}
            </span>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 z-5 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

          {/* Content Container */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center">
            {/* Title - Centered by default, moves up on hover */}
            <h2 className="text-center text-3xl font-bold text-white transition-all duration-500 group-hover:-translate-y-12">
              {card.titleBreaks.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < card.titleBreaks.length - 1 && <br />}
                </span>
              ))}
            </h2>

            {/* Description - Appears below title on hover */}
            <div className="mt-6 max-w-xs text-center text-sm leading-relaxed text-white/90 opacity-0 transition-all delay-200 duration-500 group-hover:opacity-100">
              {card.description}
            </div>
          </div>

          {/* Decorative Elements - Specific to each card */}
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

      {/* Empty space - Bottom Center */}
      <div className=""></div>
    </div>
  );
};

export default SolanaAIGrid;
