import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import StatisticsSection from '../StatisticsSection/StatisticsSection'
import TopRatedMovies from '../TopRatedMovies/TopRatedMovies'
import LatestMovies from '../LatestMovies/LatestMovies'


const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <StatisticsSection></StatisticsSection>
      <TopRatedMovies></TopRatedMovies>
      <LatestMovies></LatestMovies>
    </div>
  )
}

export default Home