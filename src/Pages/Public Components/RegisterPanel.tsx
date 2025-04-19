import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { RegisterPanelProps } from "./Types/Interfaces";

export const RegisterPanel = ({registerPanel, loginPanel} : RegisterPanelProps)  => {
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState<boolean>(false);
  return (
    <div className="flex items-center justify-center translate-x-[70vw] transition-all duration-300 invisible" ref={registerPanel}>
      <div className="h-fit bg-[#222222] flex flex-col gap-10 rounded-[20px] pt-10 w-150 relative ">
        <div className="flex flex-col items-center">
          <div
            id="close-hover"
            className="absolute -right-4 -top-6 bg-[#444444] rounded-full w-10 h-10 text-center flex items-center justify-center cursor-pointer transition-all"
          >
            <FontAwesomeIcon
              id="closeHoverIcon"
              icon={faXmark}
              className="text-white text-2xl transition-all"
            />
          </div>
          <div className="flex items-center gap-5 pb-8">
            <img
              src="/src/assets/Logo.png"
              alt="Logo"
              className="w-[39px] h-[39px]"
            />
            <label className="font-bold text-[#D6D4D4] text-[25px]">
              Create an Account
            </label>
          </div>
          <div className="">
            <div className="flex flex-col items-center gap-5">
              <div className="flex flex-col gap-1">
                <label className="text-[#AAAAAA] font-semibold">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-[450px] h-10 bg-white placeholder:text-[#8E92AA] px-4 focus:border-[#66D15F] hover:border-[#66D15F] border-solid border-transparent border-2 outline-none"
                />
                <label className="text-[#EB2929] text-sm">Error Message</label>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[#AAAAAA] font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="name@mail.com"
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
                    <button>
                      <FontAwesomeIcon
                        icon={faEye}
                        className="absolute right-5 top-[30%] text-[#737171] cursor-pointer hover:text-[#313030]"
                        onClick={() =>
                          setPasswordVisibility(!passwordVisibility)
                        }
                      />
                    </button>
                  )}
                  {passwordVisibility && (
                    <button>
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        className="absolute right-5 top-[30%] text-[#737171] cursor-pointer hover:text-[#313030]"
                        onClick={() =>
                          setPasswordVisibility(!passwordVisibility)
                        }
                      />
                    </button>
                  )}
                </div>
                <label className="text-[#EB2929] text-sm">Error Message</label>
              </div>
              <div>
                <label className="text-[#AAAAAA] font-semibold">
                  Confirm Password
                </label>
                <div className="relative w-[450px]">
                  <input
                    type={confirmPasswordVisibility ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="w-[450px] h-10 bg-white placeholder:text-[#8E92AA] placeholder:font-bold px-4 focus:border-[#66D15F] hover:border-[#66D15F] border-solid border-transparent border-2 outline-none"
                  />
                  {!confirmPasswordVisibility && (
                    <button>
                      <FontAwesomeIcon
                        icon={faEye}
                        className="absolute right-5 top-[30%] text-[#737171] cursor-pointer hover:text-[#313030]"
                        onClick={() =>
                          setConfirmPasswordVisibility(
                            !confirmPasswordVisibility
                          )
                        }
                      />
                    </button>
                  )}
                  {confirmPasswordVisibility && (
                    <button>
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        className="absolute right-5 top-[30%] text-[#737171] cursor-pointer hover:text-[#313030]"
                        onClick={() =>
                          setConfirmPasswordVisibility(
                            !confirmPasswordVisibility
                          )
                        }
                      />
                    </button>
                  )}
                </div>
                <label className="text-[#EB2929] text-sm">Error Message</label>
              </div>
            </div>
            <button className="w-full bg-[#66d15f] text-black font-semibold py-3 rounded mt-6 hover:bg-[#5cb252] transition-all cursor-pointer">
              Register
            </button>
          </div>
          <div className="h-14"></div>
          <div className="bg-[#2d2d2d] w-full rounded-b-[20px] h-20 flex items-center justify-center">
            <label className="text-[#F5F5F5]">
              Already have an account?{" "}
              <span className="text-[#66d15f] cursor-pointer hover:underline" onClick={() => {
                loginPanel.current?.classList.remove('-translate-x-[80vw]');
                registerPanel.current?.classList.add('translate-x-[70vw]');
                registerPanel.current?.classList.add('invisible');
              }}>
                Login
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterPanel;
