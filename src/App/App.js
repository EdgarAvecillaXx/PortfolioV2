import React from "react";
import { Route, Routes } from "react-router-dom";

//$ Main Components
import Header from "../Pages/Header/Header";
import About from "../Pages/About/About";
import Resume from "../Pages/Resume/Resume";
import ReactSection from "../Pages/ReactSection/ReactSection";
import NodeSection from "../Pages/NodeSection/NodeSection";
import Contact from "../Pages/Contact/Contact";

//$ App Main styles
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="react" element={<ReactSection />} />
          <Route path="node" element={<NodeSection />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
