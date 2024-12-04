import Image from 'next/image'

export default function Prizes() {
  return (
    <section id="prizes" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Prizes & Rewards</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-6 rounded-lg shadow-md text-white">
            <h3 className="text-2xl font-semibold mb-4">1st Prize</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>GeeksforGeeks Premium Subscription</li>
              <li>Zebronics Gaming Headphones</li>
              <li>CodeChef Pro Subscription</li>
              <li>Excellence Certificate</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-gray-300 to-gray-500 p-6 rounded-lg shadow-md text-white">
            <h3 className="text-2xl font-semibold mb-4">2nd Prize</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>GeeksforGeeks Standard Subscription</li>
              <li>Zebronics Bluetooth Earbuds</li>
              <li>CodeChef Standard Subscription</li>
              <li>Excellence Certificate</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-6 rounded-lg shadow-md text-white">
            <h3 className="text-2xl font-semibold mb-4">3rd Prize</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>GeeksforGeeks Basic Subscription</li>
              <li>Zebronics Power Bank</li>
              <li>CodeChef Basic Subscription</li>
              <li>Excellence Certificate</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-600 mb-4">All participants will receive a participation certificate.</p>
          <div className="flex justify-center space-x-8 mt-8">
            <Image src="/cf.png" alt="CodeChef Logo" width={150} height={50} />
            <Image src="/gfg.png" alt="GeeksforGeeks Logo" width={150} height={50} />
          </div>
        </div>
      </div>
    </section>
  )
}

