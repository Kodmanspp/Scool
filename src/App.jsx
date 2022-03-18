import "./App.css";
import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About/>}/>
          <Route path="gallery" element={<Gallery/>} />
          <Route path="*" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
