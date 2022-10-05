import React from 'react'
import PostSide from '../../Components/PostSide/PostSide';
import Ps from '../../Components/profileSide/Ps';
import RightSide from '../../Components/RightSide/RightSide';
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
        <Ps/>
        <PostSide/>
        <RightSide/>
    </div>
  )
}

export default Home