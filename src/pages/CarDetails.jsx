import React from 'react'
import { useParams } from 'react-router-dom'

const CarDetails = () => {
    const {id} = useParams()
    console.log(id);
    return (
        <div className="details page-container">
            <div className="row">
                <div className="col">

                </div>
            </div>
        </div>
    )
}

export default CarDetails
