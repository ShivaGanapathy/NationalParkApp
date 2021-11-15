import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ParkImages from './ParkImages';
export default function Park() {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [parkName, setParkName] = useState(null);
  const [parkDescription, setParkDescription] = useState(null);
  const { parkCode } = useParams();
  console.log(parkCode);

  const request =
    'https://developer.nps.gov/api/v1/parks?parkCode=' +
    parkCode +
    '&parkCode=&api_key=pwVAaI7eyJ3qGEpakWoicbKA0kCPdzM6KVyeH2mB';

  useEffect(async () => {
    const response = await fetch(request);
    const info = await response.json();

    console.log(info);

    setImages(info.data[0].images);
    setParkName(info.data[0].fullName);
    setParkDescription(info.data[0].description);

    setLoading(false);
  }, []);

  return (
    <div>
      <p>Showing Results for: {parkCode}</p>
      {loading ? (
        <div>..loading</div>
      ) : (
        <div>
          <h1>Welcome to {parkName}!!!</h1>
          <article>
            <h2>Park Description</h2>
            <p>{parkDescription}</p>
            <h2>Park Images</h2>
            <ParkImages images={images}></ParkImages>
          </article>
        </div>
      )}
    </div>
  );
}
