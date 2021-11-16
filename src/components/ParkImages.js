import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
export default function ParkImages(props) {
  return props.images.map((image) => {
    return (
      <Carousel>
        <Carousel.Item href={image.url}>
          <img
            className="d-block w-100"
            src={image.url}
            alt={image.id}
            height={700}
          />
          <Carousel.Caption>
            <h3>{image.title}</h3>
            <p>{image.caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  });
}
