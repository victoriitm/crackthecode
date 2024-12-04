import Image from 'next/image'

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Organizing Team</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <Image src="/placeholder.svg?height=200&width=200" alt="Yuvraj Bhadauriya" width={200} height={200} className="rounded-full mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Yuvraj Bhadauriya</h3>
            <p className="text-gray-600 mb-2">Event Head</p>
            <p className="text-gray-600">Email: 24f2001550@ds.study.iitm.ac.in</p>
            <p className="text-gray-600">Phone: +91-6398979052</p>
          </div>
          <div className="text-center">
            <Image src="/placeholder.svg?height=200&width=200" alt="Sanchi Bhatia" width={200} height={200} className="rounded-full mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Sanchi Bhatia</h3>
            <p className="text-gray-600 mb-2">Event Co-head</p>
            <p className="text-gray-600">Email: 24f2000570@ds.study.iitm.ac.in</p>
          </div>
        </div>
      </div>
    </section>
  )
}

