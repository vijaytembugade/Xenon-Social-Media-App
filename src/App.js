import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Features/Auth/Components/Login";
import Signup from "./Features/Auth/Components/Signup";
import Profile from "./Features/User/Components/Profile";
import NewPost from "./Features/Posts/Components/NewPost";
import Homepage from "./Pages/Homepage";
import SinglePost from "./Features/Posts/Components/SinglePost";
import { PrivateRoutes, Toast, Navbar } from "./Components";
import UserDetails from "./Features/User/Components/UserDetails";
import Bookmark from "./Pages/Bookmark";

function App() {
  return (
    <div>
      <Toast />
      <Navbar />
      <div className="px-8 md:px-16 py-8 md:py-16 mt-16 ">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/user/:id" element={<UserDetails />} />
          <Route
            path="/new-post"
            element={
              <PrivateRoutes>
                <NewPost />
              </PrivateRoutes>
            }
          />
          <Route
            path="/userprofile/*"
            element={
              <PrivateRoutes>
                <Profile />
              </PrivateRoutes>
            }
          />
          <Route
            path="/bookmark"
            element={
              <PrivateRoutes>
                <Bookmark />
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
