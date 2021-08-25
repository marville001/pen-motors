import React from "react";

const DetailsCarousel = ({ images }) => {
  return (
    <div className="details-carousel-container">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {images.map((img, i)=>(
            <button
            type="button"
            key={i}
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={i}
            className={i===0 && "active"}
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {images.map((image, i) => (
            <div className= {i===0 ? "carousel-item active":"carousel-item"}>
              <img src={image} alt={"name"}  />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default DetailsCarousel;
