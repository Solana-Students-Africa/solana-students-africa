import { Container } from "../ui/container";

const Info = () => {
  const info = [
    {
      index: 1,
      title: "3- Weeks Hackathon",
      description:
        "Not your average hackathon dive into hands-on pre-workshops and build real-world Solana projects from scratch in just 3 weeks.",
    },
    {
      index: 2,

      title: "700+ Brilliant Students",
      description:
        "Join a powerful wave of builders from over 6 leading universities across Nigeria.",
    },
    {
      index: 3,

      title: "Amazing Prizes",
      description: "Dev kits, swag, mentorship, and cash prizes for winners.",
    },
  ];

  return (
    <Container className="flex items-stretch gap-5 py-10" as="section" id="about">
      {info.map((item) => (
        <div
          key={item.index}
          className="relative w-full max-w-md rounded-4xl bg-transparent p-0.5 text-center text-white backdrop-blur-[100px]"
          style={{
            background:
              "conic-gradient(from 175.57deg at 50% 50%, #2B71F8 0deg, #FFFFFF 166.1deg, #2B71F8 360deg)",
          }}
        >
          <div className="h-full w-full rounded-4xl bg-black">
            <div className="flex h-full w-full items-center justify-center p-8">
              <div className="text-center text-white">
                <div className="text-2xl font-medium">{item.title}</div>
                <div className="text-base font-normal">{item.description}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Info;
