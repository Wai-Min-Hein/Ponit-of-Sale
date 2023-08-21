
import { Route, Routes } from "react-router-dom"
import ViewUser from "./Pages/User/Overview/ViewUser"
import ViewList from "./Pages/User/Overview/ViewList"
import FCreate from "./Pages/User/CreateUser/FCreate"
import SCreate from "./Pages/User/CreateUser/SCreate"
import TCreate from "./Pages/User/CreateUser/TCreate"
import LoginInfo from "./Pages/User/Overview/UserInfo/LoginInfo"
import Password from "./Pages/User/Overview/UserInfo/Password"
import Personal from "./Pages/User/Overview/UserInfo/Personal"
import Upuser from "./Pages/User/Overview/UpUser"
import UpPersonal from "./Pages/User/Overview/UpUser/UpPersonal"
import UpLogin from "./Pages/User/Overview/UpUser/UpLogin"
import UpPassword from "./Pages/User/Overview/UpUser/UpPassword"
import BanUser from "./Pages/User/BanUser/BanUser"
import Login from "./Pages/Login"
import Profile from "./Pages/Profile"
import ProfileEdit from "./Pages/ProfileEdit"

import Cashier from "./Pages/Cashier"
import Checkout from "./Pages/Checkout"

import Sidebar from "./Components/Sidebar"


const App = () => {
  return(
    <div className="flex h-full bg-bg-dark">
      <Sidebar />

    <Routes>
      {/* <---User---> */}
        <Route path="/view_user" element={<ViewUser/>}>
          <Route index element={<Personal/>}/>
          <Route path="info" element={<LoginInfo/>}/>
          <Route path="password" element={<Password/>}/>
        </Route>
        <Route path="/up_user" element={<Upuser/>}>
          <Route index element={<UpPersonal/>}/>
          <Route path="info" element={<UpLogin/>} />
          <Route path="password" element={<UpPassword/>}/>
        </Route>
        <Route path="/view_list" element={<ViewList/>}/>
        <Route path="/create_f" element={<FCreate/>}/>
        <Route path="/create_s" element={<SCreate/>}/>
        <Route path="/create_t" element={<TCreate/>}/>
        <Route path="/ban_user" element={<BanUser/>}/>
        <Route element={<Login />} path="/login" />
        <Route element={<Profile />} path="/" />
        <Route element={<ProfileEdit />} path="/edit" />
        <Route element={<Cashier />} path="/cashier" />
        <Route element={<Checkout />} path="/checkout" />
    </Routes>
    </div>

  )
}
export default App

