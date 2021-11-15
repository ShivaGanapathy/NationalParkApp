import React from 'react';
import myVideo from './nps.mp4';
import './Home.css';
import { useHistory } from 'react-router';

function Home() {
  let history = useHistory();
  const ButtonPressed = (props) => {
    history.push({
      pathname: '/activities',
    });
  };

  return (
    <div>
      <section class="showcase">
        <header>
          <h2 class="logo">National Park Explorer</h2>
          <div class="toggle"></div>
        </header>
        <video src={myVideo} muted loop autoPlay></video>
        <div class="overlay"></div>
        <div class="text">
          <h2>Welcome To </h2>
          <h3>The National Park App!</h3>
          <p>Select from activities, parks and view park information!</p>

          <button onClick={ButtonPressed}>Explore Activities</button>
        </div>
        <ul class="social">
          <li>
            <a href="#">
              <img src="https://i.ibb.co/x7P24fL/facebook.png"></img>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://i.ibb.co/Wnxq2Nq/twitter.png"></img>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://i.ibb.co/ySwtH4B/instagram.png"></img>
            </a>
          </li>
        </ul>
      </section>
      <div class="menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
