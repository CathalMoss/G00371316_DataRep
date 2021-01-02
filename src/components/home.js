import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export class Home extends React.Component {

    render() {
        return (
            <div>
                <h1>Welcome to MossBros</h1>
                <b><p>We sell Mens Clothes, Womens Clothes and Kids Clothes and well that's it</p></b>


                <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/home5.jpg" width="1000" height="400"
                alt="Test"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/home3.jpg"  width="1000" height="400"
                alt="Third slide"
              />
          
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/cooldudes.jpg"  width="1000" height="400"
                alt="Third slide"
              />
          
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
              </div>
        );
    }
}