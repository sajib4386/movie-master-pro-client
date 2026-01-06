import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import StatisticsSection from '../StatisticsSection/StatisticsSection'
import TopRatedMovies from '../TopRatedMovies/TopRatedMovies'
import LatestMovies from '../LatestMovies/LatestMovies'
import Features from '../Features/Features'
import Services from '../Services/Services'
import Categories from '../Categories/Categories'
import TestiMonials from '../TestiMonials/TestiMonials'


const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Categories></Categories>
      <TopRatedMovies></TopRatedMovies>
      <LatestMovies></LatestMovies>
      <StatisticsSection></StatisticsSection>
      <Features></Features>
      <Services></Services>
      <TestiMonials></TestiMonials>
    </div>
  )
}

export default Home