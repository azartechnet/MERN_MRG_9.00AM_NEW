import c1 from './images/c1.jpeg';
import c2 from './images/c2.jpeg';
import c3 from './images/c3.jpeg';
import cd1 from './images/b1.jpeg';
import cd2 from './images/b2.jpeg';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const Home=()=>{
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          {/* Indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
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
    
          {/* Carousel Items */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={c1} className="d-block w-100" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src={c2} className="d-block w-100" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img src={c3} className="d-block w-100" alt="Slide 3" />
            </div>
          </div>
    
          {/* Navigation */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          {/* card */}
          <div className="card" style={{ width: "18rem" }}>
      <img src={cd1} className="card-img-top" alt="Card Example" />
      <div className="card-body">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text">
          This is a simple card example. You can add text, images, and links inside this card.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
        </div>
        

        
      );
  
}

export default Home;