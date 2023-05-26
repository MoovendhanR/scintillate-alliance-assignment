import React from 'react'
import CharacterList from '../Pages/CharacterList'
import { Route, Routes } from 'react-router'
import DetailedView from '../Pages/Detailedview'

const AllRoutes = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<CharacterList/>}/>
          <Route path="/detailview" element={<DetailedView/>}/>
        </Routes>
    </>
  )
}

export default AllRoutes
