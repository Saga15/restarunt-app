import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import RestoList from "./components/RestoList";
import RestoDetails from "./components/RestoDetails";
import RestoSearch from "./components/RestoSearch";
import RestoUpdate from "./components/RestoUpdate";
import RestoCreate from "./components/RestoCreate";
import Login from "./components/Login";
import NavBarMenu from "./components/NavBarMenu";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarMenu/>
        <Routes>
          <Route path="/list" element={<RestoList />}>
            RestoList
          </Route>
          <Route path="/create" element={<RestoCreate />}>
            RestoCreate
          </Route>
          <Route path="/search" element={<RestoSearch />}>
            RestoSearch
          </Route>
          <Route path="/details" element={<RestoDetails />}>
            RestoDetails
          </Route>
          <Route path="/update" element={<RestoUpdate/>}></Route>
          <Route path="/" element={<Home />}>
            Home
          </Route><Route path="/login" element={<Login />}>
            Login
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
