import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-2">
      <button
        className={`w-full flex justify-between items-center p-3 rounded-lg transition-all duration-200 ${
          isOpen ? 'bg-gray-100' : 'bg-gray-50 hover:bg-gray-100'
        }`}
        onClick={onClick}
      >
        <span className="text-left text-sm text-gray-600">{question}</span>
        <ChevronDown
          className={`transition-transform duration-200 text-gray-400 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          size={16}
        />
      </button>
      {isOpen && (
        <div className="p-3 text-sm text-gray-500 bg-white">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default as shown in image

  const faqData = [
    {
      question: "What Does Sample Text Mean?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. You are looking at a sample text that demonstrates how content will look when populated in this space. No need to take any specific action."
    },
    {
      question: "What Does Sample Text Mean?",
      answer: "Sample text explanation here."
    },
    {
      question: "What Does Sample Text Mean?",
      answer: "Sample text explanation here."
    },
    {
      question: "What Does Sample Text Mean?",
      answer: "Sample text explanation here."
    },
    {
      question: "What Does Sample Text Mean?",
      answer: "Sample text explanation here."
    },
    {
      question: "What Does Sample Text Mean?",
      answer: "Sample text explanation here."
    }
  ];

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 flex gap-8">
      <div className="w-1/3">
        <img
          src="/images/faq.png"
          alt="FAQ illustration"
          className="w-full"
        />
      </div>
      <div className="w-2/3">
        <h1 className="text-4xl font-semibold mb-6 text-gray-800">FAQs</h1>
        <div className='max-w-2xl'>
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;