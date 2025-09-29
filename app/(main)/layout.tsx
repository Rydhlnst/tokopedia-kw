import React from 'react'
import Navbar from '../_components/Navbar'

type Props = {
    children: React.ReactNode
}

const MainLayout = ({children}: Props) => {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default MainLayout