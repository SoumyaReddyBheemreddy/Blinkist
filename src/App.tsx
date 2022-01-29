import React from "react";
import "./App.css";

import MyLibraryPage from "./page/myLibraryPage/MyLibraryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookViewPage from "./page/bookViewPage/BookViewPage";
import EnterprenurshipPage from "./page/enterpreneurshipPage/EnterpreneurshipPage";
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
