import React from 'react';
import './App.css';
import CoverPhoto from "./assets/cover_image/2.png";
import Card from  "./components/molecule/card/BookCard"
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Card 
    title ="Beyond Entreprenurship"
    author="Jim Collins & Bill Lazier"
    image={CoverPhoto}
    readingTime="13 minute read"
    userCount="19k reads"
    progress={55}
    role="explore"
       
      />
  );
}

export default App;
