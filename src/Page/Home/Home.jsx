import React from 'react'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import MissionVision from './MissionVision'
import CoreValues from './CoreValues'
import ServicesSection from './ServicesSection'
import WhyChooseUs from './WhyChooseUs'
import FeaturesSection from './FeaturesSection'
import ProductShowcase from './ProductShowcase'
import StatisticsSection from './StatisticsSection'
import PortfolioSection from './PortfolioSection'
import TechnologiesUsed from './TechnologiesUsed'
import TeamSection from './TeamSection'
import TestimonialsSection from './TestimonialsSection'
import PricingSection from './PricingSection'
import BlogSection from './BlogSection'
import FAQSection from './FAQSection'
import NewsletterSection from './NewsletterSection'
import Navbar from '../../Components/Share/Navber'

export default function Home() {
  return (
    <div>
         {/* <Navbar/> */}
        <HeroSection />

     <AboutSection />
      <MissionVision />
      <CoreValues />
      <ServicesSection />
      <WhyChooseUs />
      <FeaturesSection />
      <ProductShowcase />
      <StatisticsSection />
      <PortfolioSection />
      <TechnologiesUsed />
      <TeamSection />
      <TestimonialsSection/>
      <PricingSection />
      <BlogSection />
      <FAQSection />
      <NewsletterSection />
      {/* <ContactSection /> */}
    </div>
  )
}
