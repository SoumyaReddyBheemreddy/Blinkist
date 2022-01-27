import React from "react";
import "./App.css";

import MyLibraryPage from "./components/page/MyLibraryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookViewPage from "./components/page/BookViewPage";
import EnterprenurshipPage from "./components/page/EnterpreneurshipPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/book" element={<BookViewPage />}></Route>
        <Route path="/" element={<MyLibraryPage />}></Route>
        <Route
          path="/enterpreneurship"
          element={<EnterprenurshipPage />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
