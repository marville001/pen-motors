import React from 'react'

const Carlists = ({title}) => {
    return (
        <div className="page-container">
            <h2 className="products-title">{title}</h2>
            <div className = "list-container">
                {[1,2,3,4,5,6,7].map(a=>(
                    <div className="list-card">
                        <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7" alt="" />
                        <h4>Car Name <span style={{marginLeft:"20px"}}>2020</span></h4>
                        <h6 className="my-2">Milage : <span className="text-primary">12000my</span></h6>
                        <h6>Make-Model</h6>
                        <div className = "price-cart">
                            <h5 className="text-success">Ksh 1560000</h5>
                            <button className = "btn btn-outline-primary btn-sm">Add <i className="fa fa-cart-plus"></i></button>
                            {/* <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-sm btn-primary px-2">-</button>
                                <button type="button" class="btn btn-sm btn-light">3</button>
                                <button type="button" class="btn btn-sm btn-primary px-2">+</button>
                            </div> */}
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Carlists

