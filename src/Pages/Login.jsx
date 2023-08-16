import { useState } from "react"

const Login = () => {

  const [user,setUser] = useState({
    email: "",
    password: ''
  })

  const loginHandler = (e) => {
    e.preventDefault()

    console.log(user)
  }


  return (
    <div className="bg-bg w-screen h-screen grid place-items-center">
      <div className="w-[60%] min-h-1/2 bg-bg-dark flex items-center justify-between rounded-lg gap-12">
        <div className="basis-1/2"> 
          <img src="../public/Images/people.svg" alt="" />
        </div>

        <div className="basis-1/2 ">
          <h1 className="text-2xl font-semibold tracking-wider mb-6">Login</h1>
          <form onSubmit={loginHandler} action="">
            <div className="">

              <input value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} type="email" placeholder="Email" className="focus:outline-none text-white opacity-70 bg-bg border-border border-2 rounded px-2 py-[5px] tracking-wider text-[1rem] w-3/5" name="" />
            </div>
            <div className="">

              <input value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} type="password" placeholder="Password" className="focus:outline-none text-white opacity-70 bg-bg border-border border-2 rounded px-2 py-[5px] tracking-wider text-[1rem] mt-8 w-3/5" name="" />
            </div>

            <button className="px-4 py-2 bg-primary  rounded text-sm uppercase text-bg-dark tracking-wide font-semibold mt-6">Login</button>
          </form>
        </div>

        
      </div>
    </div>
  )
}





export default Login
