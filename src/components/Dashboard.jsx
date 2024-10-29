import React from 'react'
import UserDataSec from './UserDataSec'
import CredibilitySec from './CredibilitySec'

function Dashboard() {
   return (
      <div className="dashboard">
         <UserDataSec />
         <CredibilitySec />
      </div>
   )
}

export default Dashboard