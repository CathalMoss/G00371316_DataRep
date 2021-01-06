import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export class Home extends React.Component {

  render() {
    return (
      <div>
        {/*Welcoming Page */}
        <h1>Welcome to MossBros</h1>
        <b><p>We sell Mens Clothes, Womens Clothes and Kids Clothes and well that's it</p></b>

        {/*Carousel input*/}
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/car2.jpg" width="1000" height="600"
              alt="Test"
            />
            <Carousel.Caption>
              <h3>Need Some Summer Wear?</h3>
              <p>Several clothing items selling fast</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/car3.jpg" width="1000" height="600"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Want A New Style</h3>
              <p>Get rid of your old clothes and get some style</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/car5.jpg" width="1000" height="600"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>We Have It All</h3>
              <p>Buy now before it's too late</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>


      </div>
    );
  }
}