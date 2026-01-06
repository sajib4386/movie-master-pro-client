import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import StatisticsSection from '../StatisticsSection/StatisticsSection'
import TopRatedMovies from '../TopRatedMovies/TopRatedMovies'
import LatestMovies from '../LatestMovies/LatestMovies'
import Features from '../Features/Features'
import Services from '../Services/Services'
import Categories from '../Categories/Categories'
import TestiMonials from '../TestiMonials/TestiMonials'
import Newsletter from '../NewsLetter/NewsLetter'
import FAQ from '../FAQ/FAQ'
import CTA from '../CTA/CTA'


const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Categories></Categories>
      <TopRatedMovies></TopRatedMovies>
      <LatestMovies></LatestMovies>
      <StatisticsSection></StatisticsSection>
      <Features></Features>
      <FAQ></FAQ>
      <Services></Services>
      <TestiMonials></TestiMonials>
      <CTA></CTA>
      <Newsletter></Newsletter>
    </div>
  )
}

export default Home