import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import GoogleLogin from "react-google-login";
const Sidebar = () => {
  const [showsidebar, setShowsidebar] = useState(true);
  const userProfile = false;
  const normalLink =
    "flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#f51997] rounded";

  return (
    <div>
      <div
        className="block  m-2 ml-4 mt-3 text-xl"
        onClick={() => setShowsidebar((prev) => !prev)}
      >
        {showsidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showsidebar && (
        <div
          className="x:w-400  flex flex-col justify-start mb-10 border-r-2 border-gray-100
        xl:border-0 p-3 "
        >
          <div className="xl:border-b-2 border-green-200 xl:pb-4">
            <Link href={"/"}>
              <div className={normalLink}>
                <p>
                  <AiFillHome />
                </p>
                <span className="text-xl hidden xl:block "> for you</span>
              </div>
            </Link>
          </div>
          {!userProfile && (
            <div className="px-2 hidden xl:block">
              <p className="text-gray-400">
                log in to like and comment on videos
              </p>
              <div className="pr-4">
                <GoogleLogin
                  clientId=""
                  render={(renderProps)=>(
                    <button 
                    className="bg-white text-lg border-[1px]
                    font-semibold px-6 py-3 rounded text-[#f51997]"
                    onClick={renderProps.onClick}
                    disabled ={renderProps.disabled}>
LOGIN

                    </button>
                  )}
                  onSuccess={() => {}}
                  onFailure={() => {}}
                  cookiePolicy='single_host_origin'
                  className="cursor-ponter"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
