import Button from "./button";
import { Container } from "./container";

const Footer = () => {
  return (
    <div className="py-40">
      <Container className="relative flex items-start justify-between" as="section" id="contact">
        <div className="z-10 flex flex-col items-start justify-start gap-4 text-left">
          <h1 className="text-7xl font-semibold">Get in Touch</h1>
          <p className="text-xl font-medium md:w-[60%]">
            Ready to Join the future of blockchain development in Africa?
          </p>
          <Button variant="secondary" className="w-full sm:w-auto">
            Join our Community
          </Button>
        </div>

        <div className="z-10 flex flex-col items-end justify-end gap-4 text-right">
          <h1 className="text-7xl font-semibold">Tobiloba Adedeji</h1>
          <p className="text-xl font-medium md:w-[60%]">
            Lead Hackathon Organizer and Student Coordinator
          </p>
          <Button variant="secondary" className="w-full sm:w-auto">
            Join our Community
          </Button>
        </div>

        <div
          style={{
            background: "linear-gradient(180deg, #0C41D1 -9.59%, #9E1DD4 90.41%)",
          }}
          className="absolute top-40 left-0 z-0 h-[200px] w-[90vw] rounded-full blur-[390px]"
        ></div>
      </Container>
    </div>
  );
};

export default Footer;
