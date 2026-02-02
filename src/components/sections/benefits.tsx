import { Container } from "@/components/ui/container";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

const BenefitCard = ({ icon, title, description, color, bgColor }: BenefitCardProps) => (
  <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
    {/* Icon */}
    <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${bgColor}`}>
      {icon}
    </div>

    {/* Content */}
    <h3 className={`mb-3 text-2xl font-bold ${color}`}>{title}</h3>
    <p className="leading-relaxed text-white/60">{description}</p>

    {/* Decorative gradient */}
    <div
      className={`absolute -right-10 -bottom-10 h-32 w-32 rounded-full ${bgColor} opacity-20 blur-3xl transition-opacity duration-300 group-hover:opacity-40`}
    />
  </div>
);

const Benefits = () => {
  const benefits = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
      title: "Learn",
      description:
        "Access comprehensive blockchain education, from fundamentals to advanced Solana development. Join workshops, bootcamps, and self-paced courses designed for African students.",
      color: "text-ssa-green",
      bgColor: "bg-ssa-green",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: "Build",
      description:
        "Get hands-on experience building real decentralized applications on Solana. Access mentorship from experienced developers and contribute to open-source projects.",
      color: "text-ssa-orange",
      bgColor: "bg-ssa-orange",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Connect",
      description:
        "Join a vibrant network of ambitious African students passionate about Web3. Attend meetups, hackathons, and events to grow your network and find collaborators.",
      color: "text-primary-blue",
      bgColor: "bg-primary-blue",
    },
  ];

  return (
    <section className="benefits-section py-20 lg:py-32">
      <Container>
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-white/70">
            <span className="bg-ssa-green h-2 w-2 rounded-full" />
            Why Join Us
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            What You'll Get as a Member
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/60">
            Solana Students Africa provides everything you need to succeed in the Web3 space. Join
            thousands of students who are already building the future.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>

        {/* Additional Value Props */}
        <div className="from-ssa-green/5 to-primary-blue/5 mt-16 grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-br via-transparent p-8 sm:grid-cols-2 lg:grid-cols-4 lg:p-12">
          <div className="text-center">
            <p className="text-ssa-green mb-1 text-4xl font-bold lg:text-5xl">Free</p>
            <p className="text-white/60">Education & Resources</p>
          </div>
          <div className="text-center">
            <p className="text-ssa-orange mb-1 text-4xl font-bold lg:text-5xl">24/7</p>
            <p className="text-white/60">Community Support</p>
          </div>
          <div className="text-center">
            <p className="text-primary-blue mb-1 text-4xl font-bold lg:text-5xl">$$$</p>
            <p className="text-white/60">Grant Opportunities</p>
          </div>
          <div className="text-center">
            <p className="text-ssa-yellow mb-1 text-4xl font-bold lg:text-5xl">🌍</p>
            <p className="text-white/60">Pan-African Network</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
