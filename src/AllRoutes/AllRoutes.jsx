import React from "react";
import { Route, Routes } from "react-router";
import CharacterList from "../Pages/CharacterList";
import DetailedView from "../Pages/DetailedView";

function AllRoutes(){
    return(
        <>
        <Routes>
            <Route path='/' element={<CharacterList/>} />
            <Route path='/detailedview' element={<DetailedView/>}/>
        </Routes>
        </>
    )
}

export default AllRoutes;