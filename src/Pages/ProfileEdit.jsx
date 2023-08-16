import { useState } from "react";
import { AiOutlinePlus, AiOutlineShop } from "react-icons/ai";
import { BiSolidTimeFive } from "react-icons/bi";

import { HiOutlineMailOpen } from "react-icons/hi";
import { PiPhoneCall, PiPencilSimpleLine } from "react-icons/pi";
import ProfileEditPersonal from "../Components/ProfileEditPersonal";
import ProfileEditLoginInfo from "../Components/ProfileEditLoginInfo";
import ProfileEditPassword from "../Components/ProfileEditPassword";


const ProfileEdit = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
  });
  const [personal, setPersonal] = useState(true)
  const [login, setLogin] = useState(false)
  const [password, setPassword] = useState(false)

  return (
    <div className="ml-auto w-4/5 min-h-screen bg-bg p-6 relative">
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="text-white font-semibold capitalize text-lg leading-normal tracking-wider">
            profile
          </h1>
          <p className="text-sm tracking-wide mt-1 capitalize opacity-70">
            profile/ my account/ information
          </p>
        </div>
        <button className="flex items-center justify-start gap-1 bg-primary px-3 py-2 rounded capitalize text-border font-semibold text-sm">
          <AiOutlinePlus />
          <span>edit profile</span>
        </button>
      </div>

      <div className=" bg-[#1a1a1a]  mt-20">
        <div className="flex items-end justify-between  px-12 pb-4  bg-[#171717]">
          <div className="flex items-end justify-start gap-2  translate-y-[-4rem]">
            <div className="relative ">
              <div className=" w-36 h-36 rounded-full overflow-hidden">
                <img
                  src="https://i.pinimg.com/564x/d9/6a/2c/d96a2ca228714a5f6061920fbf4f73b7.jpg"
                  alt=""
                />
              </div>
              <span className="absolute right-3 bottom-0 w-8 h-8 grid place-items-center rounded-full bg-white">
                <PiPencilSimpleLine className="text-black text-xl relative z-50" />
              </span>
            </div>

            <div className="">
              <h1 className="text-xl font-semibold text-white capitalize">
                ethan james
              </h1>
              <p className="op opacity-70 text-sm mt-1">
                Sale Executive /{" "}
                <span className="inline-block">
                  {" "}
                  <BiSolidTimeFive className="inline-block text-primary" />{" "}
                  <span>active in 1 hour</span>{" "}
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-2">
            <span className="w-10 h-10 rounded-full bg-bg-gray-dark grid place-items-center">
              <HiOutlineMailOpen
                className="opacity-70"
                size={16}
                color="#fff"
              />
            </span>
            <span className="w-10 h-10 rounded-full bg-bg-gray-dark grid place-items-center">
              <PiPhoneCall className="opacity-70" size={16} color="#fff" />
            </span>
          </div>
        </div>

        <div className="bg-bg-dark flex items-center justify-start gap-8 pb-6 pt-4 px-12 border-b-2 border-border translate-y-[-4rem]">
          <button onClick={() => (setPersonal(true), setLogin(false), setPassword(false))} className="flex items-center justify-start gap-2">
            <AiOutlineShop className="text-primary text-lg" />
            <h6 className="text-sm tracking-wide font-semibold">Personal</h6>
          </button>
          <button onClick={() => (setPersonal(false), setLogin(true), setPassword(false))}  className="flex items-center justify-start gap-2">
            <AiOutlineShop className="text-primary text-lg" />
            <h6 className="text-sm tracking-wide font-semibold">
              Login information
            </h6>
          </button>
          <button  onClick={() => (setPersonal(false), setLogin(false), setPassword(true))}  className="flex items-center justify-start gap-2">
            <AiOutlineShop className="text-primary text-lg" />
            <h6 className="text-sm tracking-wide font-semibold">Password</h6>
          </button>
        </div>

        {/* show by click start */}

        <div className="px-12 pb-6 bg-[#1a1a1a] translate-y-[-1.5rem]">

          <div className={`${personal?'block': 'hidden'}`}>
          <ProfileEditPersonal personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}/>

          </div>
          <div className={`${login?'block': 'hidden'}`}>
          <ProfileEditLoginInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}/>

          </div>
          <div className={`${password?'block': 'hidden'}`}>

          <ProfileEditPassword personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}/>
          </div>


        </div>

        {/* show by click end */}
      </div>

      <div className="absolute bottom-0 left-0 bg-bg-dark border-2 border-border rounded w-full py-4 px-20">
        <div className="">
          <button className="px-4 py-1 rounded border border-border text-sm uppercase opacity-70 tracking-wide mr-4">
            Cancel
          </button>
          <button className="px-4 py-1 bg-primary  rounded text-sm uppercase text-bg-dark tracking-wide font-semibold">
            save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
