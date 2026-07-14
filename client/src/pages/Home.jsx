import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AiTools from '../components/AiTools'
import Testimonial from '../components/Testimonial'
import Plan from '../components/Plan'
import Footer from '../components/Footer'
import { Layout } from 'lucide-react'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AiTools/>
      <Testimonial/>
      <Plan/>
      <Footer/>
      <Layout/>
    </div>
  )
}

export default Home
