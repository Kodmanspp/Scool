import "./App.css";
import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
