import Footer from './components/Footer'
import FAQ from './components/FAQ'
import Hero from './components/Hero'
import Features from './components/Features'
import HowToInstall from './components/HowToInstall'
import Pricing from './components/Pricing'

export default function Home() {
  return (
    <>
      <Hero />
      <Features id="features"/>
      <HowToInstall id="how-to-install" />
      <Pricing id="pricing"/>
      <FAQ  id="faq"/>
      <Footer />
    </>
  )
}