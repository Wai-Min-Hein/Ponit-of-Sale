import { Route, Routes } from "react-router-dom"
import ViewUser from "./Page/User/Overview/ViewUser"
import ViewList from "./Page/User/Overview/ViewList"
import FCreate from "./Page/User/CreateUser/FCreate"
import SCreate from "./Page/User/CreateUser/SCreate"
import TCreate from "./Page/User/CreateUser/TCreate"
import LoginInfo from "./Page/User/Overview/UserInfo/LoginInfo"
import Password from "./Page/User/Overview/UserInfo/Password"
import Personal from "./Page/User/Overview/UserInfo/Personal"
import Upuser from "./Page/User/Overview/UpUser"
import UpPersonal from "./Page/User/Overview/UpUser/UpPersonal"
import UpLogin from "./Page/User/Overview/UpUser/UpLogin"
import UpPassword from "./Page/User/Overview/UpUser/UpPassword"
import BanUser from "./Page/User/BanUser/BanUser"

const App = () => {
  return (
    <div>
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
    </Routes>
    
    </div>
  )
}

export default App
