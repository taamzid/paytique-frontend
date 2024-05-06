import up from "../../../assets/home/faq/up.svg";
import down from "../../../assets/home/faq/down.svg";
import line from "../../../assets/home/faq/line.svg";
import { useState } from "react";

export const Faq = () => {
  const faqData = [
    {
      question: "How can I do this and that with this?",
      answer:
        "We have no limits but if you have not heard back from a letting agent, you can check your inbox and find the list of agents that you",
      answer2:
        "have sent your enquiry to. You can contact them directly or if you choose to, use our service again",
    },
    {
      question: "What are the benefits of doing this?",
      answer:
        "We have no limits but if you have not heard back from a letting agent, you can check your inbox and find the list of agents that you",
      answer2:
        "have sent your enquiry to. You can contact them directly or if you choose to, use our service again",
    },
    {
      question:
        "Do you guarantee that I will be able to do this on daily basis?",
      answer:
        "We have no limits but if you have not heard back from a letting agent, you can check your inbox and find the list of agents that you",
      answer2:
        "have sent your enquiry to. You can contact them directly or if you choose to, use our service again",
    },
    {
      question: "Shall I enter a postcode, city or town?",
      answer:
        "We have no limits but if you have not heard back from a letting agent, you can check your inbox and find the list of agents that you",
      answer2:
        "have sent your enquiry to. You can contact them directly or if you choose to, use our service again",
    },
    {
      question: "What areas do you cover?",
      answer:
        "We have no limits but if you have not heard back from a letting agent, you can check your inbox and find the list of agents that you",
      answer2:
        "have sent your enquiry to. You can contact them directly or if you choose to, use our service again",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleAnswerVisibility = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-[rgb(40,66,130)] pt-[56px] pb-[87px] relative">
      <div className="">
        <h1 className="text-center text-[#ffffff] smd:text-[60px] lg:text-[80px] font-SFMedium pb-[32px]">
          FAQ
        </h1>
      </div>
      {faqData.map((faq, index) => (
        <div className="flex items-center justify-center mt-[32px]" key={index}>
          <div className="bg-[#ffffff] smd:w-[1070px] lg:w-[1660px] px-[44px] py-[30px] rounded-xl z-[100]">
            <div className="flex justify-between">
              <h1 className="font-SFMedium text-[20px]">
                {index + 1}. &nbsp; {faq.question}
              </h1>
              <img
                src={openIndex === index ? up : down}
                alt={openIndex === index ? "up" : "down"}
                onClick={() => toggleAnswerVisibility(index)}
                className="cursor-pointer"
              />
            </div>
            {openIndex === index && (
              <div className="text-[#828282] text-[16px] ml-[28px] mt-[15px]">
                {faq.answer} <br />
                {faq.answer2}
              </div>
            )}
          </div>
        </div>
      ))}
      <img src={line} alt="line" className="absolute smd:top-[120px] lg:top-[170px] z-[0]" />
      <img src={line} alt="line" className="absolute right-[0px] bottom-[80px] z-[0]" />
    </div>
  );
};
