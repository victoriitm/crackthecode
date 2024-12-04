import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">About the Event</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image src="/event.jpg" alt="Coding event" width={600} height={400} className="rounded-lg shadow-lg w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <p className="text-gray-600 mb-4">
              'Crack The Code' is a two-phase coding contest and hackathon designed for students at a pan-BS level. This event aims to foster creativity, collaboration, and innovation among participants.
            </p>
            <p className="text-gray-600 mb-4">
              The event consists of two exciting phases:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Elimination Round (December 27th): A coding contest to test your problem-solving skills.</li>
              <li>Hackathon Final (December 29th): An intensive coding challenge to develop practical solutions.</li>
            </ul>
            <p className="text-gray-600">
              Our objective is to nurture a coding culture and enhance skill development among students, preparing them for real-world challenges in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

