import { Container } from "../ui/container";

const Info = () => {
  return (
    <Container className="info-section pt-10 pb-10 md:pt-32 md:pb-10" as="section" id="about">
      <div className="flex w-full flex-col items-center justify-center gap-10 md:gap-16">
        <div className="w-full max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            About Solana Students Africa
          </h2>
          <p className="mb-6 text-base text-white/80 md:text-xl">
            Solana Students Africa (SSA) is a student-led initiative dedicated to advancing
            blockchain education and innovation across Africa through the Solana ecosystem. We
            provide student builders with the knowledge, tools, and opportunities to explore
            decentralized technologies and build impactful solutions on Solana.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Info;
