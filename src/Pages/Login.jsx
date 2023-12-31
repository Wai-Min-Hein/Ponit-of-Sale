
import {useState } from "react";
import {   useLoginMutation, useLogoutMutation, useRegisterMutation } from "../Services/Api/AuthApi";


import loginImage from "../../Images/loginImage.png";

import "../styles/loginForm.css"

import { useForm } from "@mantine/form";
import { PasswordInput, Button, TextInput, Checkbox } from "@mantine/core";

const Login = () => {
  const [user, setUser] = useState({
  });


  const token = localStorage.getItem('token')


  


  const [login] = useLoginMutation();
  const [logout] = useLogoutMutation();




  const form = useForm({
    initialValues: { email: "lex@gmail.com", password: "asdffdsa" },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value < 8 ? "Password must be at least 8 to register" : null,
    },
  });
  const loginHandler = async (e) => {
    e.preventDefault();
    setUser(form.values);

    

    try {
      const {data} = await login(user);

      console.log(data)

      console.log(data?.plainTextToken.slice(3))



      localStorage.setItem("token", data?.plainTextToken.slice(3));
    } catch (error) {
      console.log("Cannot login.Try again", error);
    }
  };

  const logoutHandler = async () => {
    
    try {
      const res = await logout(token);
      console.log(res)
      localStorage.removeItem('token')
      
    } catch (error) {
      console.log(error)
      
    }

    

  }

  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      <div className="basis-3/5 bg-bg-dark h-full grid place-items-center">
        <img src={loginImage} className="block h-3/5 object-contain" alt="" />
      </div>

      <div className="basis-2/5 bg-bg h-full grid place-items-center">
       

        <div className="w-3/4">
          <h1  className="font-genos text-3xl font-semibold">POS</h1>
          <h4 className="font-m font-montserrat text-xl font-medium capitalize my-4">welcome back</h4>
          <p className="w-full whitespace-nowrap">
            <span className="text-primary capitalize">welcome back!</span>
            <span className="text-gray-50 ">Please enter your detail</span>
          </p>
          <form className="login-form" onSubmit={loginHandler}>
            <TextInput
              mt="sm"
              label="Email"
              size="md"
              radius="md"
              placeholder="Email"
              {...form.getInputProps("email")}
            />
            <PasswordInput
              label="Password"
              placeholder="Password"
              size="md"
              radius="md"
              className="mt-4"
              {...form.getInputProps("password")}
            />
            <div className="flex items-center justify-between my-4">
              <Checkbox label="Remember Me" />
            <button className="text-primary capitalize">forget password?</button>
            </div>

            <Button
              type="submit"
              className="px-4 py-2 bg-primary  rounded text-sm uppercase text-bg-dark tracking-wide font-semibold mt-6 w-full "
              mt="sm"
            >
              login
            </Button>


          </form>

          <Button

          onClick={logoutHandler}
              type="submit"
              className="px-4 py-2 bg-primary  rounded text-sm uppercase text-bg-dark tracking-wide font-semibold mt-6 w-full "
              mt="sm"
            >
              logout
            </Button>
         
        </div>
      </div>
    </div>
  );
};

export default Login;
