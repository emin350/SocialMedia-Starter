import React from 'react'
import FollwersCard from '../FollowersCard/FollowersCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import InfoCard from '../InfoCard/InfoCard'

const ProfileLeft = () => {
  return (
    <div className="ProfileLeft">
        <LogoSearch/>
        <InfoCard/>
        <FollwersCard/>
    </div>
  )
}

export default ProfileLeft