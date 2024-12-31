import AuthorCard from '@/components/authorCard';
import Featured from '@/components/featured';
import Mega from '@/components/mega';
import React from 'react'

const Home = () => {
  return (
    <div>
      <Featured/>
      <Mega/>

      <AuthorCard />

    </div>
  )
}

export default Home;