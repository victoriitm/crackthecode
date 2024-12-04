import Image from 'next/image'

export default function Partners() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Partners & Sponsors</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-center">
            <Image src="/cf.png" alt="CodeChef Logo" width={200} height={100} className="mx-auto mb-4" />
            <h3 className="text-2xl text-black font-semibold mb-2">CodeChef</h3>
            <p className="text-gray-600">Platform Partner for the Final Round</p>
            <p className="text-gray-600 mt-2">Providing technical support and real-time evaluation</p>
          </div>
          <div className="text-center">
            <Image src="/gfg.png" alt="GeeksforGeeks Logo" width={200} height={100} className="mx-auto mb-4" />
            <h3 className="text-2xl text-black font-semibold mb-2">GeeksforGeeks</h3>
            <p className="text-gray-600">Platform Partner for the Elimination Round</p>
            <p className="text-gray-600 mt-2">Offering marketing support and automated judging system</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a href="https://www.codechef.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mr-8">Visit CodeChef</a>
          <a href="https://www.geeksforgeeks.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Visit GeeksforGeeks</a>
        </div>
      </div>
    </section>
  )
}

