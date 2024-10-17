"use client";

import { useState } from "react";
import Image from "next/image";

interface FaqInterface {
  question: string;
  answer: string;
}

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqInterface[] = [
    {
      question: "What chain is $LUCKY on?",
      answer: "$LUCKY runs on the Base Chain.",
    },
    {
      question: "When is the Public Sale?",
      answer: "TBD",
    },
    {
      question: "What is the Price per $LUCKY at launch?",
      answer: "$0.00064286 per token",
    },
    {
      question: "Can US and China Residents participate in the token sale?",
      answer:
        "No, the public sale excludes any US and Chinese citizens or residents. Furthermore, no residents from sanctioned countries may participate.",
    },
    {
      question: "Will the Smart Contract have an audit?",
      answer: "TBD",
    },
    {
      question: "Will there be airdrops?",
      answer:
        "Yes, aside from the $LUCKY spin, 7% of total supply is allocated for Community Airdrops and Giveaways!",
    },
    {
      question: "Will there be token burns?",
      answer:
        "No. Every $LUCKY token created has a special place in our hearts.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-meme-yellow">
      <div className="relative bg-gradient-to-t-meme h-52 w-full"></div>
      <div className="container relative py-8">
        <h2 className="text-center text-[54px] text-black mb-16">
          $LUCKY FAQ’s
        </h2>
        <div className="max-w-7xl mx-auto space-y-4">
          {faqs.map((faq: FaqInterface, index: number) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-faq-shadow transition-shadow duration-300"
            >
              <button
                className="w-full text-left px-6 py-4 font-bold text-lg text-black flex justify-between items-center transition-colors duration-300 hover:bg-gray-200 hover:rounded-t-lg"
                onClick={() => handleToggle(index)}
              >
                <span>{faq.question}</span>
                <Image
                  src={
                    openIndex === index
                      ? "/faq/arrow-up-right.svg"
                      : "/faq/arrow-up-right.svg"
                  }
                  alt="chevron down"
                  width={24}
                  height={24}
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-screen" : "max-h-0"
                }`}
                style={{ maxHeight: openIndex === index ? "300px" : "0px" }}
              >
                <div className="px-6 py-4 text-gray-700">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative bg-gradient-to-b-meme h-52 w-full"></div>
    </div>
  );
};
