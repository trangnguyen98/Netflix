import logo from "./logo.svg";
import "./App.css";
import Home from "./home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListItemMovie from "./components/listItemMovie/ListItemMovie";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/listitem" exact element={<ListItemMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
