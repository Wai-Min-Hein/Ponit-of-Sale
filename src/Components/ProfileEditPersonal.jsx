
const ProfileEditPersonal = ({personalInfo, setPersonalInfo}) => {
  return (
    <div className="personal">
            <div className="flex items-center justify-start gap-2">
              <label
                className=" tracking-wider text-[.95rem] basis-1/6"
                htmlFor="name"
              >
                Name
              </label>
              <input
                value={personalInfo.name}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, name: e.target.value })
                }
                type="text"
                className="focus:outline-none text-white opacity-70 bg-bg border-border border-2 rounded px-2 py-[5px] tracking-wider text-[1rem] w-1/3"
                placeholder="Name"
              />
            </div>

            <div className="flex items-center justify-start gap-2 my-6">
              <label
                className=" tracking-wider text-[.95rem] basis-1/6"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                value={personalInfo.phone}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, phone: e.target.value })
                }
                id="phone"
                type="tel"
                className="focus:outline-none text-white opacity-70 bg-bg border-border border-2 rounded px-2 py-[5px] tracking-wider text-[1rem] w-1/3"
                placeholder="Phone"
              />
            </div>

            <div className="flex items-center justify-start gap-2 my-6">
              <label
                className=" tracking-wider text-[.95rem] basis-1/6"
                htmlFor="dob"
              >
                Date Of Birth
              </label>
              <input
                value={personalInfo.dob}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, dob: e.target.value })
                }
                id="dob"
                type="tel"
                className="focus:outline-none text-white opacity-70 bg-bg border-border border-2 rounded px-2 py-[5px] tracking-wider text-[1rem] w-1/3"
                placeholder="Date Of Birth"
              />
            </div>

            <div className="flex items-center justify-start gap-2 my-6">
              <label
                className=" tracking-wider text-[.95rem] basis-1/6"
                htmlFor="gender"
              >
                Gender
              </label>
              <div className="flex items-center justify-start gap-4">
                <div className="flex items-center justify-start gap-2">
                  <input
                    type="radio"
                    onClick={() =>
                      setPersonalInfo({ ...personalInfo, gender: "male" })
                    }
                    value="male"
                    name="gender"
                    id="male"
                    className="mr-1  cursor-pointer  w-4 h-4 rounded-full "
                  />
                  {/* <div className="relative inline-block w-4 h-4 rounded-full border border-border bg-transparent"></div> */}

                  <label
                    htmlFor="male"
                    className="tracking-wider text-[.95rem] opacity-70 cursor-pointer"
                  >
                    Male
                  </label>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <input
                    onClick={() =>
                      setPersonalInfo({ ...personalInfo, gender: "female" })
                    }
                    type="radio"
                    name="gender"
                    value="female"
                    id="female"
                    className="mr-1  cursor-pointer w-4 h-4 rounded-full"
                  />
                  <label
                    htmlFor="female"
                    className="tracking-wider text-[.95rem] opacity-70 cursor-pointer"
                  >
                    Female
                  </label>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-start gap-2 my-6">
              <label
                className=" tracking-wider text-[.95rem] basis-1/6"
                htmlFor="address"
              >
                Your address
              </label>
              <textarea
                value={personalInfo.address}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, address: e.target.value })
                }
                name=""
                className="focus:outline-none text-white opacity-70 bg-bg border-border border-2 rounded px-2 py-[5px] tracking-wider text-[1rem] w-1/3"
                id="address"
                placeholder="Your address"
                cols="30"
                rows="4"
              ></textarea>
            </div>
          </div>
  )
}

export default ProfileEditPersonal
