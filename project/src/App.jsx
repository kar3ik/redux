import React from 'react'
import CakeView from './features/cake/cakeView'
import IceCreameView from './features/iceCream/iceCreameView'
import UserView from './features/user/userView'

const App = () => {
  return (
    <div>
      <CakeView />
      <IceCreameView />
      <UserView />
    </div>
  )
}

export default App