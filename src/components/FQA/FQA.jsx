import React, { useState } from "react";
import { PlusCircle, MinusCircle } from "lucide-react";
import "./FQA.css";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        {isOpen ? <MinusCircle className="faq-icon" /> : <PlusCircle className="faq-icon" />}
      </button>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "What is AlignCon?",
      answer: "AlignCon is a conference focused on AI alignment and effective altruism.",
    },
    {
      question: "When and where is AlignCon taking place?",
      answer:
        "AlignCon is taking place in Chicago. Please check our schedule for specific dates and venue information.",
    },
    {
      question: "How can I get involved?",
      answer:
        "You can get involved by registering for the conference and attending the various talks and workshops.",
    },
    {
      question: "Who are the speakers?",
      answer:
        "We have a diverse lineup of speakers from various backgrounds. Please check our speakers page for more information.",
    },
  ];

  return (
    <div className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
