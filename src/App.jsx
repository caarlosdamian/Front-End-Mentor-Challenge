import "./App.css";
import Hills from "./images/pattern-hills.svg";
import Starts from "./images/bg-stars.svg";
import Facebook from "./images/facebook.svg";
import Instagram from "./images/instagram.svg";
import Pinterest from "./images/pinterest.svg";
import { useEffect, useState } from "react";

function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [counter, setCounter] = useState(0);
  const countdown = () => {
    const now = new Date();
    const endDate = new Date("Jan 01 2022 00:00:00").getTime();
    const difference = endDate - now;
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;
    setDays(Math.floor(difference / days));
    setHours(Math.floor((difference % days) / hours));
    setMinutes(Math.floor((difference % hours) / minutes));
    setSeconds(Math.floor((difference % minutes) / seconds));
    return;
  };

  useEffect(() => {
    countdown();
  }, [counter]);
  window.setInterval(() => setCounter(counter + 1), 1000);
  return (
    <div className="App">
      <div className="container">
        <div className="starts">
          <img src={Starts} alt="" />
        </div>
        <h1>New Year 2022</h1>
        <div className="countDown">
          <div>
            <p>{days}</p>
            <h3>Days</h3>
          </div>
          <div>
            <p>{hours}</p>
            <h3>Hours</h3>
          </div>
          <div>
            <p>{minutes}</p>
            <h3>Minutes</h3>
          </div>
          <div>
            <p>{seconds}</p>
            <h3>Seconds</h3>
          </div>
        </div>
        <div className="socials">
          <ul>
            <li>
              <img src={Facebook} alt="Facebook" />
            </li>
            <li>
              <img src={Instagram} alt="Instagram" />
            </li>
            <li>
              <img src={Pinterest} alt="Pinteres" />
            </li>
          </ul>
        </div>
        <footer className="hills">
          <img src={Hills} alt="hills" />
        </footer>
      </div>
    </div>
  );
}

export default App;
