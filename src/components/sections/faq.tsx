import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer?: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div
      className={`w-full overflow-hidden rounded-[15px] bg-[#ffb703] transition-all duration-300 md:w-[958px] md:rounded-[20px] ${
        isOpen ? "h-auto" : "h-[70px] md:h-[87px]"
      }`}
    >
      <div
        className="flex h-[70px] cursor-pointer items-center justify-between px-[20px] md:h-[87px] md:px-[43px]"
        onClick={onToggle}
      >
        <p className="font-gellix text-[16px] leading-[24px] font-medium text-black md:text-[30px] md:leading-[30px]">
          {question}
        </p>
        <span
          className={`text-[22px] font-light text-black transition-transform duration-300 md:text-[27px] ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </div>
      {isOpen && answer && (
        <div className="px-[20px] pb-[20px] md:px-[42px] md:pb-[30px]">{answer}</div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(3);

  const faqs = [
    {
      question: "What is Solana Students Africa (SSA)?",
      answer: null,
    },
    {
      question: "Who can join SSA?",
      answer: null,
    },
    {
      question: "Do I need prior blockchain or coding experience?",
      answer: null,
    },
    {
      question: "How can I join SSA?",
      answer: (
        <div className="flex flex-col gap-[15px] md:gap-[20px]">
          <div className="font-gellix text-[14px] leading-[1.8] font-medium text-[rgba(29,29,29,0.8)] md:text-[20px] md:leading-[2]">
            <p className="mb-0">You can join by:</p>
            <ul className="list-disc pl-[20px] md:pl-[30px]">
              <li>Signing up through our official website or social channels.</li>
              <li>Joining an existing campus chapter near you.</li>
              <li>Or starting a new chapter at your school!</li>
            </ul>
          </div>
          <a
            href="https://x.com/SolanaStudentAf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center justify-center rounded-[50px] bg-white px-[15px] py-[12px] md:px-[20px] md:py-[15px]"
          >
            <span className="font-gellix text-[10px] leading-[11px] font-medium text-black md:text-[11px]">
              Join the community
            </span>
          </a>
        </div>
      ),
    },
  ];

  return (
    <section className="faq-section flex w-full flex-col items-center gap-[30px] bg-black px-[15px] md:w-[958px] md:gap-[41px] md:px-0">
      {/* Header */}
      <div className="flex w-full flex-col items-center gap-[30px] md:w-[780px] md:gap-[50px]">
        {/* FAQ's pill */}
        <div className="flex items-center justify-center rounded-[50px] border-2 border-solid border-white px-[15px] py-[12px] md:px-[20px] md:py-[20px]">
          <p className="font-gellix text-[16px] leading-[14px] font-medium text-white md:text-[20px]">
            FAQ's
          </p>
        </div>
        <p className="font-area w-full text-center text-[24px] leading-[32px] font-extrabold tracking-[-0.72px] text-[#0b9444] md:text-[40px] md:leading-[31px] md:tracking-[-1.2px]">
          Everything You Need to Know About SSA
        </p>
      </div>

      {/* FAQ items */}
      <div className="flex w-full flex-col gap-[15px] md:gap-[19px]">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
