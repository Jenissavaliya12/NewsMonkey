// import logo from './logo.svg';
import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          color="#f11946"
          progress={progress}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route
            path="/"
            key="general"
            element={
              <News
                setProgress={setProgress}
                country="in"
                category="general"
                category1="Home"
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/general"
            key="general"
            element={
              <News
                setProgress={setProgress}
                country="in"
                category="general"
                category1="General"
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/business"
            key="business"
            element={
              <News
                setProgress={setProgress}
                country="in"
                category="business"
                category1="Business"
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/sports"
            key="sports"
            element={
              <News
                setProgress={setProgress}
                country="in"
                category="sports"
                category1="Sports"
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/health"
            key="health"
            element={
              <News
                setProgress={setProgress}
                country="in"
                category="health"
                category1="Health"
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/science"
            key="science"
            element={
              <News
                setProgress={setProgress}
                country="in"
                category="science"
                category1="Science"
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/technology"
            key="technology"
            element={
              <News
                setProgress={setProgress}
                country="in"
                category="technology"
                category1="Technology"
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/entertainment"
            key="entertainment"
            element={
              <News
                setProgress={setProgress}
                country="in"
                category="entertainment"
                category1="Entertainment"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
