'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className={`text-2xl font-bold text-black ${inter.className}`}>
              Crack The Code
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-4">
              <li><Link href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</Link></li>
              <li><Link href="#schedule" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Schedule</Link></li>
              <li><Link href="#team" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Team</Link></li>
              <li><Link href="#prizes" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Prizes</Link></li>
              <li><Link href="https://forms.gle/fkHVz8jin5jqgpYz6" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Register</Link></li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isOpen}
            >
              <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="#about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">About</Link>
          <Link href="#schedule" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Schedule</Link>
          <Link href="#team" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Team</Link>
          <Link href="#prizes" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Prizes</Link>
          <Link href="https://forms.gle/fkHVz8jin5jqgpYz6" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Register</Link>
        </div>
      </div>
    </header>
  )
}

