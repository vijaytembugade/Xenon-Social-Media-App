import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Headers/Navbar";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import NewPost from "./Pages/NewPost";
import Profile from "./Pages/Profile";
import Signup from "./Pages/Signup";

function App() {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-16 py-8 md:py-16 mt-16">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/new-post" element={<NewPost />} />
          <Route path="/userprofile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
