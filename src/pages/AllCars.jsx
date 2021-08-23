import React from 'react'
import Carlists from "../components/Carlists";
import FilterForm from '../components/FilterForm';

const AllCars = () => {
    return (
        <div>
            <FilterForm />
            {/* <h2>All Cars</h2> */}
            <Carlists />
        </div>
    )
}

export default AllCars
