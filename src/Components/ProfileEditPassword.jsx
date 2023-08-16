import React from 'react'

const ProfileEditPassword = ({personalInfo, setPersonalInfo}) => {
  return (
    <div className="information hidden">
            <div className="flex items-center justify-start gap-2 ">
              <label
                className=" tracking-wider text-[.95rem] basis-1/6"
                htmlFor="currentPass"
              >
                Current Password
              </label>
              <input
                id="currentPass"
                type="password"
                className="focus:outline-none text-white opacity-70 bg-bg border-border border-2 rounded px-2 py-[5px] tracking-wider text-[1rem] w-1/3"
                placeholder="Current Password"
              />
            </div>

            <div className="flex items-center justify-start gap-2 my-8">
              <label
                className=" tracking-wider text-[.95rem] basis-1/6"
                htmlFor="newPass"
              >
                New Password
              </label>
              <input
                id="newPass"
                type="password"
                className="focus:outline-none text-white opacity-70 bg-bg border-border border-2 rounded px-2 py-[5px] tracking-wider text-[1rem] w-1/3"
                placeholder="New Password"
              />
            </div>

            <div className="flex items-center justify-start gap-2 ">
              <label
                className=" tracking-wider text-[.95rem] basis-1/6"
                htmlFor="confirmPass"
              >
                Confirm Password
              </label>
              <input
                id="confirmPass"
                type="password"
                className="focus:outline-none text-white opacity-70 bg-bg border-border border-2 rounded px-2 py-[5px] tracking-wider text-[1rem] w-1/3"
                placeholder="Confirm Password"
              />
            </div>
          </div>
  )
}

export default ProfileEditPassword
