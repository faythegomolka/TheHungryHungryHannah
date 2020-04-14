// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './About';
import Events from './Events';
import Menu from './Menu';
import Contact from './Contact';
import LocationAndHours from './LocationAndHours';
import Home from './Home';
import Slider from "./Slider.js";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="Header-container">
            <div className="Logo">
              <Link to={'/home'} className="Logo-text">The Hungry Hungry Hannah</Link>
              <i class="fas fa-apple-alt"></i>
            </div>
            <div className="Navbar-container">
              <Link to={'/about'} className="Nav-text">ABOUT</Link>
              <Link to={'/menu'} className="Nav-text">MENU</Link>
              <Link to={'/location-and-hours'} className="Nav-text">LOCATIONS & HOURS</Link>
              <Link to={'/contact'} className="Contact-text">CONTACT</Link>
            </div>
          </div>
        </header>
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/menu' component={Menu} />
          <Route path='/contact' component={Contact} />
          <Route path='/location-and-hours' component={LocationAndHours} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
