import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import ProfileEdit from "./Pages/ProfileEdit";
const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<ProfileEdit />} path="/edit" />
      </Routes>
    </div>
  );
};

export default App;
