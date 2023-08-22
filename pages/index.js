import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
const axios = require("axios");
import { API_URL, BASE_URL } from "../config/constants";
import Alert from "../components/ui/alert";
import { isUserLoggedIn, UserData } from "../utils/User";
import { LinkIcon } from "@heroicons/react/solid";

export default function Home() {
  const [loginMessage, setLoginMessage] = useState({ type: "", message: "", icon:"" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sessdata, setSessdata] = useState({
      "id": "2",
      "email": "admin@gmail.com",
      "user_type": "superadmin"
  });
  const router = useRouter();


  useEffect(() => {
    if (isUserLoggedIn() === true) {
      if(UserData.RoleId==='1'){
        router.push("/admin");
      } else if(UserData.RoleId==='2'){
        router.push("/home");
      }
    }
  },[])


  function Login(e) {
    e.preventDefault();
    if (email.trim() === "") {
      setLoginMessage({ type: "error", message: "Please enter email", icon:"error" });
    } 
      else if (password.trim() === "") {
      setLoginMessage({ type: "error", message: "Please enter password", icon:"error" });
    } else {
      setLoginMessage({ type: "success", message: "Login Successfull", icon:"loading" });
      Cookies.set("login_token", sessdata.id, { expires: 10 });
      Cookies.set("user_data", JSON.stringify(sessdata), { expires: 10 });      
      router.push("/admin");     
    }
  }

  function Register(e) {
    e.preventDefault();
    // Cookies.set("login_token", sessdata.id, { expires: 10 });
    //   Cookies.set("user_data", JSON.stringify(sessdata), { expires: 10 });      
      router.push("/register");

  }
  return (
    <div className="  bg-blue-200 w-full h-screen ">
      <Head>
        <title>Blood Bank | Nirmaan</title>
        {/* <link rel="icon" href={BASE_URL+"images/favicon.png"} /> */}
        <link rel="icon" href="https://img.freepik.com/free-photo/blood-drop-paper-medical-cross-health-diy-element_53876-128924.jpg?w=740&t=st=1688389714~exp=1688390314~hmac=bc910505213750fb365236636f736c05f2c653336ce3ad7b122bfab5b53257e3"/>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <main>
        {/* <div className="bg-blue-200 w-full"> */}
        <div className="  bg-blue-200 flex  static">
          <div className="hidden lg:block relative w-auto flex-1 bg-blue-200">
            
            <img className="absolute inset-16 h-full pl-10  object-left-bottom" src="https://cdn.pixabay.com/photo/2013/07/13/09/48/blood-156063_640.png" alt="blood" /> 
            {/* <img className="absolute inset-32 pl-10 h-80% w-65% object-left-bottom" src="/images/bloodpic1.png" alt="blood" /> */}

          </div>
          <div className="flex-1 flex flex-col justify-center sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div className="text-center ">
                
                <a href="https://nirmaan.org/" rel="Home" title="Nirmaan Organization" data-title="Nirmaan Organization">
                  <img className="h-full  w-auto inline-block " src={BASE_URL+"images/nirmaan_logo.png"} alt="Nirmaan Logo" />
                  </a>
                  
                </div>
                <div className=" flex flex-col border-2 p-8    rounded-xl bg-white border-gray-300">
                  {/* <h2 className=" text-2xl  text-center font-serif text-red-500 ">BLOOD BANK</h2>  */}
                <h2 className=" mt-3 text-xl font-serif font-semibold text-center text-gray-900 underline">SIGN IN</h2>
              <div className="mt-2">
                <div className="">
                  <form action="#" method="POST" className="space-y-6">
                    {loginMessage.message ? <Alert type={loginMessage.type} message={loginMessage.message} icon={loginMessage.icon} /> : ""}
                    <div>
                      <label htmlFor="email" className="block text-sm  font-medium text-gray-700 ">
                        
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder ="Email Address"
                          required
                          onChange={(e) => setEmail(e.target.value)}
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm origin-top-left translate-x-52 translate-y-80"
                        />
                      </div>
                    </div>
                    <div className="space-y-1 relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700"> 
                      
                        
                      </label>
                      <div className="mt-1 relative">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                          
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        onClick={Login}
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]  active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]">
                        Sign in
                      </button>
                      </div>
                      
                        {/* <a className=" text-xs text-red-500 cursor-pointer underline">@forgot password?</a> */}
                      
                      {/* <hr role="presentation"></hr> */}
                      <div className="relative flex  items-center">
    <div className="flex-grow border-t border-gray-400"></div>
    <span className="  flex-shrink mx-4 text-sm
      text-gray-500">OR</span>
    <div className="flex-grow border-t border-gray-400"></div>
</div>
                      <div>
                      <button
                        type="submit"
                        onClick={Register}
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]  active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]">
                        Register as Donor
                      </button>
                      {/* <br/> */}

                      {/* <div className="text-red-500 font-serif font-light text-lg align-middle text-center cursor-pointer hover:underline ">Register as Donor ?</div> */}
                    </div>
                  </form>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </main>
    </div>
  );
}
