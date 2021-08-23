import React from "react";

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item c-i-one active">
            <div className="carousel-details">
                <h2 className="my-5 text-white">Get a car Faster at Affordable price</h2>
                <button className="btn btn-primary">View Our Car</button>
            </div>
          </div>
          <div class="carousel-item c-i-two">
          <div className="carousel-details">
                <h2 className="my-5 text-white">Fast delivery or pick up</h2>
                <button className="btn btn-success">Shop Now</button>
            </div>
          </div>
          <div class="carousel-item c-i-three">
          <div className="carousel-details">
                <h2 className="my-5 text-white">It was never this simple</h2>
                <button className="btn btn-primary">Get your dream Car</button>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
