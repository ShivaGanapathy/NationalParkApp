import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

function Activities(props) {
  const [data, setData] = useState([{}]);
  let history = useHistory();

  const ButtonPressed = (props) => {
    history.push({
      pathname: '/parks/' + props,
      state: { props },
    });
  };

  useEffect(() => {
    fetch('/activities')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div id="a1">
      <h1>Activity Search Menu</h1>
      <p>
        Here, you can browse for activties, and which national parks are
        associated with them!
      </p>
      {typeof data.members === 'undefined' ? (
        <p>Loading...</p>
      ) : (
        data.members.map((member, i) => (
          <div>
            <br></br>{' '}
            <Button key={i} onClick={() => ButtonPressed(member)}>
              {member}
            </Button>
          </div>
        ))
      )}

      <br></br>
    </div>
  );
}

export default Activities;
