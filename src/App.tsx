import React from 'react';
import './App.css';
import MyLibrary from './components/organisms/MyLibrary/MyLibrary';
import Template from './components/page/MyLibraryPage';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import BookView from './components/organisms/bookView/BookView';
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
    // <Card 
    // title ="Beyond Entreprenurship"
    // author="Jim Collins & Bill Lazier"
    // image={CoverPhoto}
    // readingTime="13 minute read"
    // userCount="19k reads"
    // progress={55}
    // role="explore"
       
    //   />
    // <ListTabs />
    // <Footer />
    <BrowserRouter>
    <Routes>
    <Route path="/book" element={<BookView />}></Route>
    </Routes>
    
     <Template><MyLibrary /></Template></BrowserRouter>
   
  );
}

export default App;
