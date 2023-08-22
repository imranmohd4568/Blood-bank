import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
const axios = require("axios");
import { API_URL, BASE_URL } from "../config/constants";
import Alert from "../components/ui/alert";
import { isUserLoggedIn, UserData } from "../utils/User";

export default function Home() {
    const [loginMessage, setLoginMessage] = useState({ type: "", message: "", icon:"" });
    const [email, setEmail] = useState("");
    const [full_name, setFullName] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [gender, setGender] = useState("");
    const [date_of_birth, setDateOfBirth] = useState("");
    const [password, setPassword] = useState("");
    const [current_city, setCurrentCity] = useState("");
    const [state, setState] = useState("");
    const [blood_group, setBloodGroup] = useState("");
    const [health_issues, setHealthIssues] = useState("");
    const [availability, setAvailability] = useState("");
    const[checkbox,setCheckBox]=useState("");
    const [sessdata, setSessdata] = useState({
        "id": "2",
        "email": "admin@gmail.com",
        "user_type": "superadmin"
    });
    const router = useRouter();


//   useEffect(() => {
//     if (isUserLoggedIn() === true) {
//       if(UserData.RoleId==='1'){
//         router.push("/admin");
//       } else if(UserData.RoleId==='2'){
//         router.push("/home");
//       }
//     }
//   },[])


    function Login(e) {
    e.preventDefault();
    if (full_name.trim() === "") {
    setLoginMessage({ type: "error", message: "Please enter full name", icon:"error" });
    } 
    else if (gender.trim() === "") {
    setLoginMessage({ type: "error", message: "Please select gender", icon:"error" });
    } 
    else if  (phone_number.trim() === "") {
    setLoginMessage({ type: "error", message: "Please enter phone number", icon:"error" });
    } 
    else if  (email.trim() === "") {
    setLoginMessage({ type: "error", message: "Please enter email address", icon:"error" });
    } 
    else if  (password.trim() === "") {
    setLoginMessage({ type: "error", message: "Please enter password", icon:"error" });
    } 
    else if  (date_of_birth.trim() === "") {
    setLoginMessage({ type: "error", message: "Please enter date of birth", icon:"error" });
    } 
    else if  (phone_number.trim() === "") {
    setLoginMessage({ type: "error", message: "Please enter phone number", icon:"error" });
    } 
    else if  (current_city.trim() === "") {
    setLoginMessage({ type: "error", message: "Please enter current city", icon:"error" });
    } 
    else if  (state.trim() === "") {
    setLoginMessage({ type: "error", message: "Please select state", icon:"error" });
    } 
    else if  (blood_group.trim() === "") {
    setLoginMessage({ type: "error", message: "Please select blood group", icon:"error" });
    } 
    else if  (health_issues.trim() === "") {
    setLoginMessage({ type: "error", message: "Please enter health issues", icon:"error" });
    }
    else if  (availability.trim() === "") {
    setLoginMessage({ type: "error", message: "Please select avaialability", icon:"error" });
    }  
    else if  (checkbox.trim() === "") {
    setLoginMessage({ type: "error", message: "Please click checkbox", icon:"error" });
    }  
    else {
        setLoginMessage({ type: "success", message: "Registration Successfull", icon:"loading" });
        document.getElementById('rform').reset();
        Cookies.set("login_token", sessdata.id, { expires: 10 });
        Cookies.set("user_data", JSON.stringify(sessdata), { expires: 10 });      
        
    }
    }
    return (
    <div className="container">
        <Head>
        <title>Register as Donor | Nirmaan</title>
        <link rel="icon" href="https://img.freepik.com/free-photo/blood-drop-paper-medical-cross-health-diy-element_53876-128924.jpg?w=740&t=st=1688389714~exp=1688390314~hmac=bc910505213750fb365236636f736c05f2c653336ce3ad7b122bfab5b53257e3"/>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <main>
        <div className=" w-screen h-full grid grid-cols-2 grid-rows-1  ">
            <div className="lg:block flex flex-col">
            {/* <div className="hidden lg:block relative w-auto flex-1 bg-blue-200"> */}
            <img className=" inset-0 h-full " src=" 
https://st2.depositphotos.com/1017986/9478/i/450/depositphotos_94781096-stock-photo-male-hands-holding-red-heart.jpg" alt="" />

{/* <img className="absolute inset-0 h-full w-auto  object-left" src="
https://st2.depositphotos.com/2627021/6223/i/450/depositphotos_62239585-stock-photo-blood-cells-in-hands-shaped.jpg" alt="" /> */}
{/* <img className="absolute inset-20 h-80% w-65% object-left-bottom" src="https://cdn.pixabay.com/photo/2013/07/13/09/48/blood-156063_640.png" alt="blood" /> */}

            </div>
                <div className=" bg-blue-200 ">
                <div className=" ">
                    
            <div className=" grid grid-cols-2 grid-rows-1 bg-pink-200  h-15">
            <h2 className=" text-left pl-4  pt-2 pb-2  font-serif text-xl  text-red-500">REGISTRATION FORM :</h2>
            
            <a href="https://nirmaan.org/" rel="Home" title="Nirmaan Organization" data-title="Nirmaan Organization">
                    <img className="w-auto h-12 ml-56 pt-1 pb-1" src={BASE_URL+"images/nirmaan_logo.png"} alt="Nirmaan Logo" />
                    </a>
            </div>
            <br></br>
            <tr>
            <td className=" text-red-500 text-2xl font-serif w-full ">
                <marquee behaviour="scroll" direction="left" scrollamount="7">
                "Register as a blood donor today and save a life tomorrow."
                </marquee>
            </td>
            </tr>
            
            <text className=" pl-10 pt-2  text-center text-blue-500 font-semibold">*Please fill the following information to register as voluntary blood donor</text>
                <div className="flex flex-col pl-36 pr-0 pt-5 bg-blue-200  ">
                    <form  action="#" method="POST" className="w-full max-w-sm" id="rform">
                        {loginMessage.message ? <Alert type={loginMessage.type} message={loginMessage.message} icon={loginMessage.icon} /> : ""}
    <div className="md:flex flex items-start justify-start pt-3 md:items-center mb-6 ml-0">
    <div className="md:w-1/3">
        <label className=" text-black font-semibold md:text-right mb-1 md:mb-0 pr-4" >
        Full Name :
        </label>
    </div>
    <div className="md:w-2/3">
        <input className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
        id="fullname" 
        type="text" 
        //value={full_name}
        onChange={(e) => setFullName(e.target.value)}></input>
    </div>
    
    </div>
    <div className="md:flex flex md:items-center mb-6">
    <div className="md:w-1/3">
        <label className=" text-black font-semibold md:text-right mb-1 md:mb-0 pr-4 " >
        Gender :
        </label>
    </div>
    <div className="md:w-2/3">
        <select className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
        id="gender" 
      //type="text" 
        //value={gender}
        onChange={(e) => setGender(e.target.value)}>
                            <option value="">Select</option>
                            <option value="male">M</option>
                            <option value="female">F</option>
                            <option value="others">Others</option>
        </select>
    </div>
    </div>



    <div className="md:flex flex md:items-center mb-6">
    <div className="md:w-1/3 whitespace-nowrap">
        <label className=" text-black font-semibold md:text-right mb-1 md:mb-0 pr-4 " >
        Phone Number :
        </label>
    </div>
    <div className="md:w-2/3">
        <input className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
        id="phone number"
        type="text" 
        //value={phone_number}
        onChange={(e) => setPhoneNumber(e.target.value)}
        ></input>
    </div>
    </div>


    <div className="md:flex flex md:items-center mb-6">
    <div className="md:w-1/3 whitespace-nowrap">
        <label className=" text-black font-semibold md:text-right mb-1 md:mb-0 pr-4" >
        Email :
        </label>
    </div>
    <div className="md:w-2/3">
        <input className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
        id="email" 
        type="email" 
       // value={email}
        onChange={(e) => setEmail(e.target.value)}></input>
    </div>
    </div>
    

    <div className="md:flex flex md:items-center mb-6">
    <div className="md:w-1/3 whitespace-nowrap">
        <label className=" text-black font-semibold md:text-right mb-1 md:mb-0 pr-4" >
        Password :
        </label>
    </div>
    <div className="md:w-2/3">
        <input className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
        id="current_city" 
        type="text" 
       // value={current_city}
        onChange={(e) => setPassword(e.target.value)}></input>
    </div>
    </div>


    <div className="md:flex flex md:items-center mb-6">
    <div className="md:w-1/3 whitespace-nowrap">
        <label className=" text-black font-semibold md:text-right mb-1 md:mb-0 pr-4" >
        Date of Birth:
        </label>
    </div>
    <div className="md:w-2/3">
        <input className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
        id="age" 
        type="date" 
        //value={date_of_birth}
        onChange={(e) => setDateOfBirth(e.target.value)}>
        </input>
    </div>
    </div>


    <div className="md:flex flex md:items-center mb-6">
    <div className="md:w-1/3 whitespace-nowrap">
        <label className=" text-black font-semibold md:text-right mb-1 md:mb-0 pr-4" >
        Current City:
        </label>
    </div>
    <div className="md:w-2/3">
        <input className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
        id="current_city" 
        type="text" 
       // value={current_city}
        onChange={(e) => setCurrentCity(e.target.value)}></input>
    </div>
    </div>

<div className="md:flex flex md:items-center mb-6">
    <div className="md:w-1/3 whitespace-nowrap">
        <label className=" text-black font-semibold md:text-right mb-1 md:mb-0 pr-4" >
        State:
        </label>
    </div>
    <div className="md:w-2/3">
        <select className="appearance-none block w-full pl-4  py-2  border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
        id="state"
        onChange={(e) => setState(e.target.value)}
        //value={state}
        >
        <option className="text-gray-600" value="">Select one</option>
<option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
</select>
    </div>
    </div>


    <div className="md:flex flex md:items-center mb-6">
    <div className="md:w-1/3 whitespace-nowrap">
        <label className=" text-black font-semibold md:text-right mb-1 md:mb-0 pr-4" >
        Blood Group:
        </label>
    </div>
    <div className="md:w-2/3">
        <select className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
        id="blood_group" 
      // type="number"
        onChange={(e) => setBloodGroup(e.target.value)} 
        //value={blood_group}
        >
                            <option value="">Select One</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="A1+">A1+</option>
                            <option value="A1-">A1-</option>
                            <option value="A1B+">A1B+</option>
                            <option value="A1B-">A1B-</option>
                            <option value="A2+">A2+</option>
                            <option value="A2-">A2-</option>
                            <option value="A2B+">A2B+</option>
                            <option value="A2B-">A2B-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="Bombay Blood Group">Bombay Blood Group</option>
                            <option value="INRA">INRA</option>
        </select>
    </div>
    </div>



    <div className="md:flex flex md:items-center mb-6">
    <div className="md:w-1/3 whitespace-nowrap">
        <label className=" text-black font-semibold md:text-right mb-1 md:mb-0 pr-4" >
        Health Issues:
        </label>
    </div>
    <div className="md:w-2/3">
        <input className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
        id="health_issues" 
        type="text" 
        list="health_issues1"
        //value={health_issues}
        onChange={(e) => setHealthIssues(e.target.value)}>
            
        </input>
        <datalist id="health_issues1">
    <option value="Diabetes"/>
    <option value="Blood Pressure"/>
    <option value="Asthma"/>
    <option value="Infections"/>
    <option value="Cancer"/>
        </datalist>
        
    </div>
    </div>


    <div className="md:flex flex md:items-center mb-6">
    <div className="md:w-1/3 whitespace-nowrap">
        <label className=" text-black font-semibold md:text-right mb-1 md:mb-0 pr-4" >
        Availability:
        </label>
    </div>
    <div className="md:w-2/3">
        <select className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
        id="current_city" 
      // type="text" 
        onChange={(e) => setAvailability(e.target.value)}
        //</div>value={availability}
        >
                            <option value="">Select</option>
                            <option value="available">Available</option>
                            <option value="not_available">Not Available</option>

        </select>
    </div>
</div>

    <div className="md:flex flex md:items-center mb-6">
    <div className=" flex w-full">
        <div><input className="rounded" type="checkbox" id="checkbox"  onChange={(e) => setCheckBox(e.target.value)}>
        </input>
        </div>
        <div><span className="pl-3 text-gray-600" >I authorise this website to display my name and telephone number, so
                                                        that the needy could contact me, as and when there is an emergency.</span>
                                                        </div>

    </div>
    </div>

    <div>
                    <button
                        type="submit"
                        onClick={Login}
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                        Register
                    </button>
                    </div>
                    <br></br>
    </form>
    </div>
                    </div>
                    </div>

            </div>
        </main>
    </div>
    );
}

