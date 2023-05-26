import React from 'react'
import CharacterList from '../Components/CharacterList'
import { Route, Routes } from 'react-router'

const AllRoutes = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<CharacterList/>}/>
        </Routes>
    </>
  )
}

export default AllRoutes
