'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  function calculateTimeLeft() {
    const difference = +new Date('2024-12-27') - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  return (
    <section 
      className="relative bg-cover bg-center text-white py-16 md:py-32"
      style={{
        backgroundImage: 'url("/Header.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '90vh',
      }}
    >
      <div className="absolute inset-0 z-0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
      </div>
      <div 
        className="absolute top-50 right-8 bg-black p-4 rounded-lg shadow-lg z-10"
        style={{ minWidth: '200px' }}
      >
        <h2 className="text-lg md:text-xl font-semibold mb-2">Event Starts In:</h2>
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center">
              <span className="text-2xl md:text-3xl font-bold">{value}</span>
              <span className="block text-xs md:text-sm">{unit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
