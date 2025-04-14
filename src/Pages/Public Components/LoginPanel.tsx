import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faXmark } from "@fortawesome/free-solid-svg-icons";
export const LoginPanel = () => {
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-center">
      <div className="h-fit bg-[#222222] flex flex-col gap-10 rounded-[20px] pt-10 w-150  relative ">
        <div className="flex flex-col items-center">
          <div className="absolute -right-2 -top-4 bg-[#444444] rounded-full w-8 h-8 text-center flex items-center justify-center cursor-pointer hover:bg-[#5a5959]">
            <FontAwesomeIcon icon={faXmark} className="text-white text-xl" />
          </div>
          <div className="flex items-center gap-5 pb-8">
            <img
              src="/src/assets/Logo.png"
              alt="Logo"
              className="w-[39px] h-[39px]"
            />
            <label className="font-bold text-[#D6D4D4] text-[25px]">
              Welcome Back!
            </label>
          </div>
          <div className="">
            <div className="flex flex-col items-center gap-5">
              <div className="flex flex-col gap-1">
                <label className="text-[#AAAAAA] font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-[450px] h-10 bg-white placeholder:text-[#8E92AA] px-4 focus:border-[#66D15F] hover:border-[#66D15F] border-solid border-transparent border-2 outline-none"
                />
                <label className="text-[#EB2929] text-sm">Error Message</label>
              </div>
              <div>
                <label className="text-[#AAAAAA] font-semibold">Password</label>
                <div className="relative w-[450px]">
                  <input
                    type={passwordVisibility ? "text" : "password"}
                    placeholder="Password"
                    className="w-[450px] h-10 bg-white placeholder:text-[#8E92AA] placeholder:font-bold px-4 focus:border-[#66D15F] hover:border-[#66D15F] border-solid border-transparent border-2 outline-none"
                  />
                  {!passwordVisibility && (
                    <FontAwesomeIcon
                      icon={faEye}
                      className="absolute right-5 top-[30%] text-[#737171] cursor-pointer hover:text-[#313030]"
                      onClick={() => setPasswordVisibility(!passwordVisibility)}
                    />
                  )}
                  {passwordVisibility && (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      className="absolute right-5 top-[30%] text-[#737171] cursor-pointer hover:text-[#313030]"
                      onClick={() => setPasswordVisibility(!passwordVisibility)}
                    />
                  )}
                </div>
                <label className="text-[#EB2929] text-sm">Error Message</label>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label htmlFor="remember" className="text-[#F5F5F5]">
                  Remember me
                </label>
              </div>
              <a className="text-[#66d15f]">Forget password?</a>
            </div>
            <button className="w-full bg-[#66d15f] text-black font-semibold py-3 rounded mt-6">
              Login
            </button>
          </div>
          <div className="h-14"></div>
          <div className="bg-[#2d2d2d] w-full rounded-b-[20px] h-20 flex items-center justify-center">
            <label className="text-[#F5F5F5]">
              Don't have an account?{" "}
              <span className="text-[#66d15f] cursor-pointer hover:underline">
                Register
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPanel;
