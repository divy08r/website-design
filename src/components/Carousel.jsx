import React from 'react'; 
export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img style={{"filter" : "brightness(80%)",
                "maxHeight":"500px","objectFit":"cover"}} src="https://source.unsplash.com/random/300×300?farming" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Try Premium range of Organic Products</h5>
    
      </div>
    </div>
    <div class="carousel-item">
      <img  src="https://source.unsplash.com/random/300×300?fruit" style={{"filter" : "brightness(80%)",
                "maxHeight":"500px","objectFit":"cover"}} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Buy Organic and Fresh Products Online</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img style={{"filter" : "brightness(80%)",
                "maxHeight":"500px","objectFit":"cover"}} src="https://source.unsplash.com/random/300×300?organicfarming" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Connect with your Trustable Farmer</h5>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
