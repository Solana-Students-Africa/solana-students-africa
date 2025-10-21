import { Container } from "@/components/ui/container";

const AboutSection = () => {
  const focusAreas = [
    {
      id: 1,
      title: "Education & Training",
      description: "Equipping students with practical blockchain development skills",
      icon: "📚",
      gradient: "from-purple-600 to-blue-500",
    },
    {
      id: 2,
      title: "Hackathons & Summits",
      description: "Creating platforms that inspire innovation and collaboration",
      icon: "🏆",
      gradient: "from-orange-500 to-pink-500",
    },
    {
      id: 3,
      title: "Community Building",
      description: "Nurturing vibrant, student-led communities across campuses",
      icon: "🤝",
      gradient: "from-green-500 to-teal-500",
    },
    {
      id: 4,
      title: "Ecosystem Growth",
      description: "Connecting African talents to global opportunities",
      icon: "🌍",
      gradient: "from-blue-600 to-cyan-500",
    },
  ];

  return (
    <Container className="info-section relative py-16 md:py-24" as="section" id="about">
      <div className="flex w-full flex-col gap-12 lg:flex-row lg:gap-16 xl:gap-20">
        {/* LEFT COLUMN - About Text & Mission */}
        <div className="flex flex-col gap-8 lg:w-[55%] lg:gap-12">
          {/* About SSA Intro */}
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              About Solana Students Africa
            </h2>
            <p className="text-base leading-relaxed text-white/80 md:text-lg lg:text-xl">
              Solana Students Africa (SSA) is a student-led initiative dedicated to advancing
              blockchain education and innovation across Africa through the Solana ecosystem. We
              provide student builders with the knowledge, tools, and opportunities to explore
              decentralized technologies and build impactful solutions on Solana.
            </p>
          </div>

          {/* Our Mission Card */}
          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-sm md:p-10">
              <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">Our Mission</h3>
              <p className="text-base leading-relaxed text-white/90 md:text-lg">
                To cultivate a thriving network of African student builders who are shaping the
                future of the Solana ecosystem through innovation, education, and collaboration.
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 -z-10 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl md:h-40 md:w-40"></div>
            <div className="absolute -bottom-4 -left-4 -z-10 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl md:h-40 md:w-40"></div>
          </div>
        </div>

        {/* RIGHT COLUMN - Focus Areas Grid */}
        <div className="flex flex-col gap-6 lg:w-[45%]">
          <h3 className="text-3xl font-bold text-white md:text-4xl lg:text-left">Our Focus</h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
            {focusAreas.map((area) => (
              <div
                key={area.id}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${area.gradient} p-6 transition-all duration-300 hover:scale-105 md:p-7`}
              >
                {/* Icon/Number */}
                <div className="mb-3 text-4xl md:text-5xl">{area.icon}</div>

                {/* Title */}
                <h4 className="mb-2 text-lg font-bold text-white md:text-xl">{area.title}</h4>

                {/* Description */}
                <p className="text-sm leading-relaxed text-white/90 md:text-base">
                  {area.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="pointer-events-none absolute top-1/4 left-0 -z-10 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl md:h-96 md:w-96"></div>
      <div className="pointer-events-none absolute right-0 bottom-1/4 -z-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl md:h-96 md:w-96"></div>
    </Container>
  );
};

export default AboutSection;
