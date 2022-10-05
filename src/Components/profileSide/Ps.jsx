import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import "./ProfileSide.css"

const Ps = () => {
  
  return (

    <div className="ProfileSide">
       <LogoSearch/>
       <ProfileCard/>
       <FollowersCard/>
   </div>

  )
}

export default Ps