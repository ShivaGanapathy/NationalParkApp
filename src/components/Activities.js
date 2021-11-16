import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import image from './nps.jpeg';
import './Activities.css';

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
      <img id="nps" src={image} alt="background img"></img>
      <img id="nps" src={image} alt="background img"></img>
      <img id="nps" src={image} alt="background img"></img>
      <div>
        <h1 id="title">Activity Menu</h1>
        <p id="description">
          You probably already know that the National Park Service offers a
          range of traditional outdoor recreational activities for visitor
          enjoyment including bicycling, camping, climbing, equestrianism,
          fishing, hiking, hunting, swimming, snowshoeing, and more. And you
          maybe knew that you can find outdoor adventures in cultural and
          natural resource programs and events such as interpretive ranger
          talks, live music, theater, and craft demonstrations. But did you know
          that several national parks also maintain exercise and sports
          facilities and offer opportunities for golf, tennis, and running?
          Select from the dropdown of activities to the right to browse which
          national parks have each!
        </p>
      </div>

      {loading ? (
        <div>..loading</div>
      ) : (
        <Dropdown id="drop">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Select Activities
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {data.map((data) => (
              <div>
                <br></br>{' '}
                <Dropdown.Item onClick={() => ButtonPressed(data.name)}>
                  {data.name}
                </Dropdown.Item>
              </div>
            ))}{' '}
          </Dropdown.Menu>
        </Dropdown>
      )}
    </div>
  );
}

export default Activities;
