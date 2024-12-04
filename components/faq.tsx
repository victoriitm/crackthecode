'use client'

import { useState } from 'react'

const faqs = [
  {
    question: "What is the format of the event?",
    answer: "The event consists of two phases: an elimination round (coding contest) on December 27th, and a hackathon final on December 29th. The top performers from the elimination round will advance to the hackathon."
  },
  {
    question: "Who is eligible to participate?",
    answer: "The event is open to all college students at a pan-BS level. Both undergraduate and graduate students are welcome to participate."
  },
  {
    question: "How can I prepare for the event?",
    answer: "To prepare, practice coding problems on platforms like CodeChef and GeeksforGeeks. Familiarize yourself with algorithms, data structures, and problem-solving techniques. Also, brush up on your teamwork and presentation skills for the hackathon phase."
  },
  {
    question: "What programming languages are allowed?",
    answer: "Participants can use any popular programming language supported by the CodeChef and GeeksforGeeks platforms. This includes but is not limited to C++, Java, Python, and JavaScript."
  },
  {
    question: "Is there a registration fee?",
    answer: "No, there is no registration fee for this event. Participation is completely free of charge."
  }
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left font-semibold p-4 bg-white rounded-lg shadow-md hover:bg-gray-50 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className='text-black'>{faq.question}</span>
                <span className="text-xl text-black">{activeIndex === index ? '−' : '+'}</span>
              </button>
              {activeIndex === index && (
                <div className="mt-2 p-4 bg-white rounded-lg shadow-md">
                  <p className="text-black">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

