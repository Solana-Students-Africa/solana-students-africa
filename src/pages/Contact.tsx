import { useState } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/sections/footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:contact@solanastudentsafrica.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const socialLinks = [
    {
      name: "X (Twitter)",
      handle: "@SolanaStudentAf",
      href: "https://x.com/SolanaStudentAf",
    },
    {
      name: "LinkedIn",
      handle: "Solana Students Africa",
      href: "https://www.linkedin.com/in/solana-students-africa-8454a42a1/",
    },
    {
      name: "Instagram",
      handle: "@solanastudents_africa",
      href: "https://www.instagram.com/solanastudents_africa/",
    },
    {
      name: "TikTok",
      handle: "@solanastudents_africa",
      href: "https://www.tiktok.com/@solanastudents_africa?lang=en",
    },
  ];

  return (
    <div className="font-gellix mx-auto flex w-full max-w-[1512px] flex-col bg-black">
      {/* Hero Section */}
      <div className="relative min-h-[350px] w-full bg-black pb-[40px] md:h-[554px] md:pb-0">
        {/* Navbar */}
        <Navbar />

        {/* Decorative shapes - Hidden on mobile */}
        <img
          src="/images/blue-shape.svg"
          alt=""
          className="absolute top-[347px] left-[1217px] hidden h-[229px] w-[268px] md:block"
        />
        <img
          src="/images/star-yellow.svg"
          alt=""
          className="absolute top-[342px] left-[967px] hidden h-[236px] w-[236px] md:block"
        />
        <img
          src="/images/africa-green.svg"
          alt=""
          className="absolute top-[105px] left-[989px] hidden h-[207px] w-[192px] md:block"
        />
        <img
          src="/images/trophy-orange.svg"
          alt=""
          className="absolute top-[105px] left-[1227px] hidden h-[210px] w-[225px] md:block"
        />

        {/* Contact Us pill */}
        <div className="absolute top-[100px] left-[15px] flex items-center justify-center rounded-[50px] border-2 border-solid border-white px-[15px] py-[12px] md:top-[220px] md:left-[50px] md:px-[20px] md:py-[20px]">
          <p className="font-gellix text-[16px] leading-[28px] font-medium text-white md:text-[20px] md:leading-[45px]">
            Contact Us
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="font-area absolute top-[170px] left-[15px] w-[calc(100%-30px)] text-[32px] leading-[42px] font-extrabold tracking-[-0.96px] text-white md:top-[310px] md:left-[46px] md:w-[952px] md:text-[60px] md:leading-[78px] md:tracking-[-1.8px]">
          We'd Love to Hear From You
        </h1>
      </div>

      {/* Contact Form Section */}
      <section className="relative w-full bg-[#f5f5f5] px-[15px] py-[60px] md:px-[50px] md:py-[100px]">
        <div className="flex flex-col gap-[40px] md:flex-row md:gap-[80px]">
          {/* Form */}
          <div className="w-full md:w-[600px]">
            <p className="font-area text-[28px] leading-[40px] font-extrabold tracking-[-0.84px] text-[#0b9444] md:text-[40px] md:leading-[100px] md:tracking-[-1.2px]">
              Send Us a Message
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-[30px] flex flex-col gap-[20px] md:mt-[40px] md:gap-[25px]"
            >
              <div>
                <label className="font-gellix mb-[10px] block text-[14px] font-medium text-black md:text-[16px]">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="font-gellix w-full rounded-[15px] border-2 border-[#e5e5e5] bg-white px-[20px] py-[15px] text-[14px] text-black transition-colors outline-none focus:border-[#0b9444] md:text-[16px]"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="font-gellix mb-[10px] block text-[14px] font-medium text-black md:text-[16px]">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="font-gellix w-full rounded-[15px] border-2 border-[#e5e5e5] bg-white px-[20px] py-[15px] text-[14px] text-black transition-colors outline-none focus:border-[#0b9444] md:text-[16px]"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="font-gellix mb-[10px] block text-[14px] font-medium text-black md:text-[16px]">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="font-gellix w-full rounded-[15px] border-2 border-[#e5e5e5] bg-white px-[20px] py-[15px] text-[14px] text-black transition-colors outline-none focus:border-[#0b9444] md:text-[16px]"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label className="font-gellix mb-[10px] block text-[14px] font-medium text-black md:text-[16px]">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="font-gellix w-full resize-none rounded-[15px] border-2 border-[#e5e5e5] bg-white px-[20px] py-[15px] text-[14px] text-black transition-colors outline-none focus:border-[#0b9444] md:text-[16px]"
                  placeholder="Your message..."
                  required
                />
              </div>

              <button
                type="submit"
                className="font-gellix mt-[10px] w-full rounded-[50px] bg-[#0b9444] py-[15px] text-[16px] font-medium text-white transition-all hover:bg-[#087735] md:w-fit md:px-[40px] md:py-[20px] md:text-[20px]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="w-full md:w-[500px]">
            <p className="font-area text-[28px] leading-[40px] font-extrabold tracking-[-0.84px] text-[#0b9444] md:text-[40px] md:leading-[100px] md:tracking-[-1.2px]">
              Connect With Us
            </p>
            <p className="font-gellix mt-[10px] text-[16px] leading-[28px] text-[#666] md:mt-[20px] md:text-[18px] md:leading-[32px]">
              Follow us on social media to stay updated with the latest news, events, and
              opportunities.
            </p>

            <div className="mt-[30px] flex flex-col gap-[15px] md:mt-[40px] md:gap-[20px]">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-[15px] rounded-[15px] bg-white p-[20px] transition-all hover:shadow-md md:gap-[20px]"
                >
                  <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#0b9444]/10 md:h-[60px] md:w-[60px]">
                    <span className="font-gellix text-[20px] font-bold text-[#0b9444] md:text-[24px]">
                      {social.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-gellix text-[16px] font-semibold text-black md:text-[18px]">
                      {social.name}
                    </p>
                    <p className="font-gellix text-[14px] text-[#666] md:text-[16px]">
                      {social.handle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Email CTA Section */}
      <section className="relative w-full bg-black px-[15px] py-[60px] md:px-[50px] md:py-[100px]">
        <div className="flex flex-col items-center gap-[30px] text-center">
          <div className="flex items-center justify-center rounded-[50px] border-2 border-solid border-white px-[15px] py-[12px] md:px-[20px] md:py-[20px]">
            <p className="font-gellix text-[16px] leading-[14px] font-medium text-white md:text-[20px]">
              Email Us Directly
            </p>
          </div>

          <p className="font-area text-[28px] leading-[36px] font-extrabold tracking-[-0.84px] text-[#0b9444] md:text-[40px] md:leading-[50px] md:tracking-[-1.2px]">
            contact@solanastudentsafrica.com
          </p>

          <p className="font-gellix max-w-[600px] text-[16px] leading-[28px] text-white/70 md:text-[20px] md:leading-[36px]">
            For partnerships, sponsorships, or general inquiries, feel free to reach out. We
            typically respond within 24-48 hours.
          </p>

          <a
            href="mailto:contact@solanastudentsafrica.com"
            className="font-gellix flex items-center justify-center rounded-[50px] bg-[#ffb600] px-[30px] py-[15px] text-[16px] font-medium text-white transition-all hover:bg-[#e6a500] md:py-[20px] md:text-[30px]"
          >
            Send Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <div className="w-full px-[15px] pb-[30px] md:px-[50px] md:pb-[38px]">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
