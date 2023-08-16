
const ProfileEditLoginInfo = ({personalInfo, setPersonalInfo}) => {
  return (
    <div className="information hidden">
    <div className="flex items-center justify-start gap-2 my-6">
      <label
        className=" tracking-wider text-[.95rem] basis-1/6"
        htmlFor="phoneNum"
      >
        Phone
      </label>
      <input
        id="phoneNum"
        type="tel"
        className="focus:outline-none text-white opacity-70 bg-bg border-border border-2 rounded px-2 py-[5px] tracking-wider text-[1rem] w-1/3"
        placeholder="Phone"
      />
    </div>

    <div className="flex items-center justify-start gap-2 my-6">
      <label
        className=" tracking-wider text-[.95rem] basis-1/6"
        htmlFor="email"
      >
        Email
      </label>
      <input
        id="email"
        type="email"
        className="focus:outline-none text-white opacity-70 bg-bg border-border border-2 rounded px-2 py-[5px] tracking-wider text-[1rem] w-1/3"
        placeholder="Email"
      />
    </div>
  </div>
  )
}

export default ProfileEditLoginInfo
