import React from 'react';

export default function ParkImages(props) {
  console.log(props.images[0].url);
  return props.images.map((image) => {
    return (
      <div>
        <center>
          <img src={image.url} alt={image.title} height="500"></img>
          <p>{image.title}</p>
        </center>
      </div>
    );
  });
}
