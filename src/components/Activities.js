import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

function Activities(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  let history = useHistory();

  const ButtonPressed = (props) => {
    history.push({
      pathname: '/parks/' + props,
      state: { props },
    });
  };

  const request =
    'https://developer.nps.gov/api/v1/activities?limit=50&start=0&api_key=pwVAaI7eyJ3qGEpakWoicbKA0kCPdzM6KVyeH2mB';
  useEffect(async () => {
    const response = await fetch(request);
    const info = await response.json();
    setData(info.data);
    setLoading(false);
  }, []);

  return (
    <div>
      <center>
        <h1>Showing Results for All Activities (In Alphabetical Order): </h1>
      </center>
      {loading ? (
        <div>..loading</div>
      ) : (
        data.map((data) => (
          <div>
            <br></br>{' '}
            <Button onClick={() => ButtonPressed(data.name)}>
              {data.name}
            </Button>
          </div>
        ))
      )}
    </div>
  );
}

export default Activities;
