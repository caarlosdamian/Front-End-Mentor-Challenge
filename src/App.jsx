import "./App.css";
import Hills from "./images/pattern-hills.svg";
import Starts from "./images/bg-stars.svg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="starts">
          <img src={Starts} alt="" />
        </div>
        <h1 >We're launching soon</h1>
        <div className="countDown">
          <div>
            <h3>Days</h3>
            <span>Time</span>
          </div>
          <div>
            <h3>Hours</h3>
            <span>Time</span>
          </div>
          <div>
            <h3>Minutes</h3>
            <span>Time</span>
          </div>
          <div>
            <h3>Seconds</h3>
            <span>Time</span>
          </div>
        </div>
        <footer className="hills">
          <img src={Hills} alt='hills' />
        </footer>
      </div>
    </div>
  );
}

export default App;
