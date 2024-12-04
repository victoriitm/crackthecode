import { Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Contact() {
  return (
    <section className="py-12 md:py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">Contact Us</h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Event Head</h3>
              <p className="flex items-center mb-2">
                <span className="font-semibold mr-2">Yuvraj Bhadauriya</span>
              </p>
              <p className="flex items-center mb-2">
                <Mail className="mr-2" size={18} />
                <a href="mailto:24f2001550@ds.study.iitm.ac.in" className="text-blue-600 hover:underline break-all">
                  24f2001550@ds.study.iitm.ac.in
                </a>
              </p>
              <p className="flex items-center">
                <Phone className="mr-2" size={18} />
                <a href="tel:+916398979052" className="text-blue-600 hover:underline">
                  +91-6398979052
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Event Co-head</h3>
              <p className="flex items-center mb-2">
                <span className="font-semibold mr-2">Sanchi Bhatia</span>
              </p>
              <p className="flex items-center">
                <Mail className="mr-2" size={18} />
                <a href="mailto:24f2000570@ds.study.iitm.ac.in" className="text-blue-600 hover:underline break-all">
                  24f2000570@ds.study.iitm.ac.in
                </a>
              </p>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-400">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

