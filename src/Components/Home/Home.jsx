import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import StatisticsSection from '../StatisticsSection/StatisticsSection'
import TopRatedMovies from '../TopRatedMovies/TopRatedMovies'


const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <StatisticsSection></StatisticsSection>
      <TopRatedMovies></TopRatedMovies>
    </div>
  )
}

export default Home