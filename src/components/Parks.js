import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Parks() {
  let history = useHistory();

  const { activityName } = useParams();
  const request =
    'https://developer.nps.gov/api/v1/activities/parks?q=' +
    activityName +
    '&api_key=pwVAaI7eyJ3qGEpakWoicbKA0kCPdzM6KVyeH2mB';

  const [park, setPark] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const response = await fetch(request);
    const info = await response.json();

    const item = info.data[0].parks;
    setPark(item);
    setLoading(false);
  }, []);

  const ButtonPressed = (props) => {
    history.push({
      pathname: '/locations/' + props,
      state: { props },
    });
  };

  return (
    <div className="containerL">
      {loading ? (
        <div>..loading</div>
      ) : (
        <center>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Select Parks From Parks That Offer: {activityName}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {park.map((park) => (
                <div>
                  <br></br>{' '}
                  <Dropdown.Item onClick={() => ButtonPressed(park.parkCode)}>
                    {park.fullName}
                  </Dropdown.Item>
                </div>
              ))}{' '}
            </Dropdown.Menu>
          </Dropdown>
        </center>
      )}
    </div>
  );
}

export default Parks;
