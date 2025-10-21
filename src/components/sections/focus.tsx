import { Container } from "@/components/ui/container";

const FocusSection = () => {
  const focusAreas = [
    {
      id: 1,
      title: "Education & Training",
      description:
        "Equipping students with practical blockchain development skills through structured learning experiences and hands-on workshops.",
      gradient: "from-[#0b38b7] to-[#45e0e2]",
      span: "row-span-3",
      titleBreaks: ["Education &", "Training"],
    },
    {
      id: 2,
      title: "Hackathons & Summits",
      description:
        "Creating platforms that inspire innovation and collaboration among Africa's brightest minds through competitions and events.",
      gradient: "from-cyan-600 via-cyan-500 to-cyan-300",
      span: "row-span-2",
      titleBreaks: ["Hackathons &", "Summits"],
    },
    {
      id: 3,
      title: "Community Building",
      description:
        "Nurturing vibrant, student-led communities across campuses that foster knowledge sharing, inclusion, and peer-to-peer learning.",
      gradient: "from-blue-800 via-blue-600 to-cyan-500",
      span: "row-span-4",
      titleBreaks: ["Community", "Building"],
    },
    {
      id: 4,
      title: "Ecosystem Growth",
      description:
        "Connecting African talents to global opportunities and supporting builders as they scale their projects on Solana.",
      gradient: "from-blue-700 via-blue-600 to-blue-500",
      span: "row-span-2",
      titleBreaks: ["Ecosystem", "Growth"],
    },
  ];

  return (
    <Container
      className="focus-section flex flex-col items-center justify-center px-4 py-12 sm:py-16 md:py-20"
      as="section"
    >
      <h1 className="font-poppins mb-6 flex h-auto max-w-4xl flex-col items-center text-center text-4xl leading-tight font-semibold sm:h-[150px] sm:text-5xl md:h-[200px] md:text-6xl lg:text-7xl">
        <h1>Our Focus</h1>
      </h1>

      <p className="mb-8 w-full max-w-2xl px-2 text-center text-base font-medium sm:w-[80%] sm:px-4 sm:text-lg md:w-[60%] md:px-0 md:text-xl lg:w-[40%]">
        Empowering Africa's next generation of blockchain innovators
      </p>

      <div className="w-full max-w-7xl">
        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:h-[600px] lg:grid-cols-3 lg:grid-rows-3 lg:justify-between lg:gap-3">
          {focusAreas.map((area, index) => (
            <div
              key={area.id}
              className={`bg-gradient-to-br ${area.gradient} group relative flex items-center justify-center overflow-hidden rounded-3xl p-8 ${area.span}`}
            >
              <div className="absolute inset-0 z-0 flex items-center justify-center">
                <span className="font-gellix text-[400px] leading-none font-medium text-white/20 select-none">
                  {index + 1}
                </span>
              </div>

              <div className="absolute inset-0 z-5 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              <div className="relative z-10 flex h-full flex-col items-center justify-center">
                <h2 className="text-center text-3xl font-bold text-white transition-all duration-500 group-hover:-translate-y-12">
                  {area.titleBreaks.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < area.titleBreaks.length - 1 && <br />}
                    </span>
                  ))}
                </h2>

                <div className="mt-6 max-w-xs text-center text-sm leading-relaxed text-white/90 opacity-0 transition-all delay-200 duration-500 group-hover:opacity-100">
                  {area.description}
                </div>
              </div>

              {area.id === 1 && (
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/10 blur-xl"></div>
              )}
              {area.id === 2 && (
                <div className="absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white/5 blur-2xl"></div>
              )}
              {area.id === 3 && (
                <>
                  <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 transform rounded-full bg-white/5 blur-xl"></div>
                  <div className="absolute bottom-0 left-0 h-24 w-24 -translate-x-4 translate-y-4 transform rounded-full bg-white/5 blur-lg"></div>
                </>
              )}
              {area.id === 4 && (
                <div className="absolute -top-5 -right-5 h-20 w-20 rounded-full bg-white/10 blur-lg"></div>
              )}
            </div>
          ))}

          <div className=""></div>
        </div>

        {/* Mobile List */}
        <div className="space-y-4 lg:hidden">
          {focusAreas.map((area, index) => (
            <div
              key={area.id}
              className={`bg-gradient-to-br ${area.gradient} group relative flex h-[300px] items-center justify-center overflow-hidden rounded-3xl p-6 transition-all duration-500 sm:h-[350px] md:h-[400px]`}
            >
              <div className="absolute inset-0 z-0 flex items-center justify-center">
                <span className="font-gellix text-[150px] leading-none font-medium text-white/20 select-none sm:text-[200px] md:text-[250px]">
                  {index + 1}
                </span>
              </div>

              <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                <h2 className="mb-4 text-center text-xl font-bold text-white sm:text-2xl md:text-3xl">
                  {area.titleBreaks.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < area.titleBreaks.length - 1 && <br />}
                    </span>
                  ))}
                </h2>

                <div className="max-w-sm px-4 text-center text-sm leading-relaxed text-white/90 sm:text-base">
                  {area.description}
                </div>
              </div>

              {area.id === 1 && (
                <div className="absolute -top-5 -right-5 h-20 w-20 rounded-full bg-white/10 blur-xl"></div>
              )}
              {area.id === 2 && (
                <div className="absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white/5 blur-2xl"></div>
              )}
              {area.id === 3 && (
                <>
                  <div className="absolute top-0 right-0 h-20 w-20 translate-x-4 -translate-y-4 transform rounded-full bg-white/5 blur-xl"></div>
                  <div className="absolute bottom-0 left-0 h-16 w-16 -translate-x-2 translate-y-2 transform rounded-full bg-white/5 blur-lg"></div>
                </>
              )}
              {area.id === 4 && (
                <div className="absolute -top-3 -right-3 h-16 w-16 rounded-full bg-white/10 blur-lg"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FocusSection;
