import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Schedule from '@/components/schedule'
import Team from '@/components/team'
import Evaluation from '@/components/evaluation'
import Prizes from '@/components/prizes'
import Partners from '@/components/partners'
import Registration from '@/components/registration'
import FAQ from '@/components/faq'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100">
      <Header />
      <Hero />
      <About />
      <Schedule />
      <Evaluation />
      <Prizes />
      <Partners />
      <Registration />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}

