import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import StatisticsSection from '../StatisticsSection/StatisticsSection'
import TopRatedMovies from '../TopRatedMovies/TopRatedMovies'
import LatestMovies from '../LatestMovies/LatestMovies'
import GenreSection from '../GenreSection/GenreSection'
import AboutPlatform from '../AboutPlatform/AboutPlatform'


const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <GenreSection></GenreSection>
      <TopRatedMovies></TopRatedMovies>
      <LatestMovies></LatestMovies>
      <StatisticsSection></StatisticsSection>
      <AboutPlatform></AboutPlatform>
    </div>
  )
}

export default Home