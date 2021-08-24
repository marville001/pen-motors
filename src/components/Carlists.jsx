import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Carlists = ({title}) => {
    const {cars} = useSelector(state => state.cars)
    console.log(cars);
    return (
        <div className="page-container">
            <h2 className="products-title">{title}</h2>
            <div className = "list-container">
                {cars?.map(({id,mileage, make, model,images, price, year, name})=>(
                    <div key={id} className="list-card">
                        <Link to={`/details/${id}`}><img src={images[0]} alt="" /></Link>
                        <h4>{name}<span style={{marginLeft:"20px"}}>{year}</span></h4>
                        <h6 className="my-2">Mileage (Km) : <span className="text-primary">{mileage}</span></h6>
                        <h6>{make} - {model}</h6>
                        <div className = "price-cart">
                            <h5 className="text-success">Ksh {price}</h5>
                            <button className = "btn btn-outline-primary btn-sm">Add <i className="fa fa-cart-plus"></i></button>
                            {/* <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-sm btn-primary px-2">-</button>
                                <button type="button" className="btn btn-sm btn-light">3</button>
                                <button type="button" className="btn btn-sm btn-primary px-2">+</button>
                            </div> */}
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Carlists

