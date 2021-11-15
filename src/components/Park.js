import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Park() {
  const [park, setPark] = useState(null);
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
    const parkName = info.data[0].fullName;
    const parkDescription = info.data[0].description;

    setParkName(parkName);
    setParkDescription(parkDescription);

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
            <p>{parkDescription}</p>
          </article>
        </div>
      )}
    </div>
  );
}
