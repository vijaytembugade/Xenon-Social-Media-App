import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Headers/Navbar";
import Login from "./Features/Auth/Components/Login";
import Signup from "./Features/Auth/Components/Signup";
import Profile from "./Features/Profile/Components/Profile";
import NewPost from "./Features/Posts/Components/NewPost";
import Homepage from "./Pages/Homepage";
import Toast from "./Components/Toast/Toast";
import PrivateRoutes from "./Components/PrivateRoutes/PrivateRoutes";

function App() {
  return (
    <div>
      <Toast />
      <Navbar />
      <div className="px-8 md:px-16 py-8 md:py-16 mt-16 ">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/new-post"
            element={
              <PrivateRoutes>
                <NewPost />
              </PrivateRoutes>
            }
          />
          <Route
            path="/userprofile"
            element={
              <PrivateRoutes>
                <Profile />
              </PrivateRoutes>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
