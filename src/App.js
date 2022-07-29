
import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Demo from './components/Demo';
import Error from './components/Error';
import Menu from './Menu';
import User from './components/User';
import Home from './components/Home';



class App extends React.Component {
  render() {

    return (
      <>
        <Menu />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/demo' element={<Demo />} />
          <Route path='/user' element={<User />} />
          <Route element={<Error />} />
        </Routes>

      </>
    );
  }
}

export default App;

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
