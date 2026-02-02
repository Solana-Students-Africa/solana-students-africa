import { Container } from "@/components/ui/container";

const Partners = () => {
  const partners = [
    { name: "Superteam", logo: "/images/superteam.jpg" },
    { name: "NitHub", logo: "/images/nithub.jpg" },
    { name: "Web3 Unilag", logo: "/images/web3-unilag.jpg" },
    { name: "Blueshift", logo: "/images/blueshift.jpg" },
  ];

  const universities = [
    { name: "University of Lagos", logo: "/images/unilag-logo.jpeg" },
    { name: "Babcock University", logo: "/images/babcock-logo.png" },
    { name: "University of Ilorin", logo: "/images/ilorin-logo.jpeg" },
    { name: "Lagos State University", logo: "/images/lasu-logo.jpeg" },
    { name: "Caleb University", logo: "/images/caleb-logo.png" },
  ];

  return (
    <section className="partners-section bg-white/[0.02] py-20 lg:py-32">
      <Container>
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-white/70">
            <span className="bg-primary-blue h-2 w-2 rounded-full" />
            Our Network
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Partners & Universities
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/60">
            We collaborate with leading organizations and universities to bring world-class Web3
            education to African students.
          </p>
        </div>

        {/* Ecosystem Partners */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-lg font-medium text-white/40">Ecosystem Partners</h3>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group flex h-20 w-40 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:border-white/20 hover:bg-white/10"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-full w-full object-contain opacity-70 transition-opacity group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>

        {/* University Partners */}
        <div>
          <h3 className="mb-8 text-center text-lg font-medium text-white/40">
            University Partners
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {universities.map((uni, index) => (
              <div
                key={index}
                className="group flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white p-3 transition-all hover:border-white/20 sm:h-28 sm:w-28"
              >
                <img
                  src={uni.logo}
                  alt={uni.name}
                  className="h-full w-full object-contain transition-transform group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          <div className="text-center">
            <p className="text-4xl font-bold text-white lg:text-5xl">50+</p>
            <p className="text-sm text-white/60">Partner Universities</p>
          </div>
          <div className="hidden h-12 w-px bg-white/10 lg:block" />
          <div className="text-center">
            <p className="text-4xl font-bold text-white lg:text-5xl">15+</p>
            <p className="text-sm text-white/60">African Countries</p>
          </div>
          <div className="hidden h-12 w-px bg-white/10 lg:block" />
          <div className="text-center">
            <p className="text-4xl font-bold text-white lg:text-5xl">10+</p>
            <p className="text-sm text-white/60">Ecosystem Partners</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Partners;
