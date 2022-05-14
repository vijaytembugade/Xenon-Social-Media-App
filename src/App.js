import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Headers/Navbar";
import Homepage from "./Pages/Homepage";
import NewPost from "./Pages/NewPost";

function App() {
  return (
    <>
      <Navbar />
      <div className="px-8 md:px-16 py-8 md:py-16 mt-8">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/new-post" element={<NewPost />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
