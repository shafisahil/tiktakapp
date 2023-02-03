import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/component/navbar/navbar";
import { useState, useEffect } from "react";
import Sidebar from "@/component/sidebar/sidebar";
const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);
  if (isSSR) return null;
  return (
    <>
      <div>
        <Navbar/>
        <div className="flex gap-4 md:gap-20">
          <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto bg-blue-200">
          <Sidebar/>
          </div>
          <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1 bg-red-700">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  );
};
export default MyApp;
