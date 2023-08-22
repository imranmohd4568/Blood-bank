import Head from "next/head";
import Template from "../components/layouts/admin1";
import Popup from 'reactjs-popup';
import { useState, useEffect } from "react";

// import 'reactjs-popup/dist/index.css';

export default function Assets({ locations, initialData }) {
    const [donors,setDonors]= useState([
      {
        "donor_id":"1",
        "donation_no":"1",
        "donated_at_city":"Hyderabad",
        "date_donated":"18-07-2023"
      }
    ]);
  return (
    <Template page="Home">
      <div className="overflow-auto h-screen bg-gray-200 ">
        <Head>
          <title>Donor Profile | Blood-Bank</title>
          <link rel="icon" href="https://img.freepik.com/free-photo/blood-drop-paper-medical-cross-health-diy-element_53876-128924.jpg?w=740&t=st=1688389714~exp=1688390314~hmac=bc910505213750fb365236636f736c05f2c653336ce3ad7b122bfab5b53257e3"/>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <main>
          <div>
          <div className="relative w-full">
            <img className="h-72 w-full" src="https://shopanel.netlify.app/img/bg.svg"></img>
          </div>
          <div className=" flex items-center pt-5 justify-center">
            {/* <img className="h-36 w-36" src="https://cdn-icons-png.flaticon.com/512/10110/10110782.png"></img> */}
            {/* <img className="h-36 w-36" src="https://cdn-icons-png.flaticon.com/512/189/189626.png"></img> */}
            <img className="h-44 w-44 " src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png"></img>
            {/* <img className="h-48 w-48 " src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"></img> */}
          </div>
          <div className="text-center text-3xl font-bold text-gray-500 Ariel pt-4">
            MOHAMMED IMRAN
          </div>
          
          <br></br>
          <div className="text-center place-content-center lg:pr-96 lg:pl-96 py-8 md:pr-40">
          <div className="grid grid-cols-3 grid-rows-1 border-2 bg-blue-100 border-gray-400 justify-center align-middle rounded-2xl shadow-2xl text-center divide-x divide-gray-400">
            <div>
            <div className="flex px-12 pt-8 font-semibold text-gray-500 text-lg font-serif  ">Availability</div>
            <div className="pt-5 pb-8 flex px-10">Available<Popup trigger=
                {<button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mx-2 text-blue-900 hover:text-red-900 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg></button>}
  modal nested>
                {
                  close => (
                        <div className='modal flex  bg-white border border-blue-400 rounded-xl pt-14 pb-14 pl-12 pr-12'>
                            <div className='content pr-2 text-xl font-semibold text-gray-400'>
                                AVAILABILITY:  <select className="pl-2 border-2 hover:border-blue-500 cursor-pointer rounded-xl border-gray-400">
                                  <option>Select one</option>
                                  <option>Available</option>
                                  <option>Not Available</option>
                                </select>
                            </div>
                            <div className="pl-4 ">
                                <button className="bg-green-400 pl-2 pr-2 pt-1 pb-1 border-2 rounded-xl text-white hover:bg-green-500 border-green-400 "onClick=
                                    {() => close()}>
                                        SAVE
                                </button>
                            </div>
                        </div>
                        
                        
                    )
                }
            </Popup></div>

            </div>
            <div>
            <div className="flex px-9 pt-8 font-semibold text-gray-500 text-lg font-serif ">Current City</div>
            <div className="pt-5 pb-8 flex px-9  ">Hyderabad<Popup trigger=
                {<button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mx-2 text-blue-900 hover:text-red-900 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg></button>}
  modal nested>
                {
                  close => (
                        <div className='modal flex  bg-white border shadow-2xl border-blue-400 rounded-xl pt-14 pb-14 pl-12 pr-12'>
                            <div className='content pr-2 text-xl font-semibold text-gray-400'>
                                CHANGE CITY:  <input className="pl-2 border-2 rounded-xl border-gray-400"></input>
                            </div>
                            <div className="pl-4 ">
                                <button className="bg-green-400 pl-2 pr-2 pt-1 pb-1 border-2 rounded-xl text-white hover:bg-green-500 border-green-400 "onClick=
                                    {() => close()}>
                                        SAVE
                                </button>
                            </div>
                        </div>
                        
                        
                    )
                }
            </Popup></div>
            </div>
            <div>
            <div className="flex px-16 pt-8  font-semibold text-gray-500 text-lg font-serif ">Eligibility</div>
            <div className="pt-4 pb-8 flex pl-16  ">Eligible</div>
            </div>

          </div>
          </div>
          {/* <br></br>
          <br></br> */}
          <div className="text-center pt-4 text-3xl font-serif text-gray-500 underline font-semibold">
            MY PROFILE
          </div>
          <div className="text-center place-content-center lg:pr-80 lg:pl-80 py-8 md:pr-40">
            <div className="grid grid-cols-2 grid-rows-9 border-2 bg-blue-100 border-gray-400 justify-center align-middle shadow-2xl rounded-2xl text-center pt-6 pb-10 ">
              <div className="text-center text-xl font-serif pt-4 pb-4 text-gray-500 font-semibold">Name:</div>
              <div className="text-center   pt-4 pb-4">Mohammed Imran</div>
              <div className="text-center text-xl font-serif pt-4 pb-4 text-gray-500 font-semibold">Gender:</div>
              <div className="text-center   pt-4 pb-4">M</div>
              <div className="text-center text-xl font-serif pt-4 pb-4 text-gray-500 font-semibold">Email:</div>
              <div className="text-center flex pt-4 pb-4 px-8  ">imran.mohammed@nirmaan.org<Popup trigger=
                {<button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mx-2 my-1 text-blue-900 hover:text-red-600 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg></button>}
  modal nested>
                {
                  close => (
                    <div className=" ">
                        <div className='modal flex  bg-white border border-blue-400 rounded-xl pt-14 pb-14 pl-12 pr-12'>
                            <div className='content pr-2 text-gray-600'>
                                Enter New Email:  <input className="pl-2 border-2 rounded-xl border-gray-600"></input>
                            </div>
                            <div className="pl-4 ">
                                <button className="bg-green-400 pl-2 pr-2 pt-1 pb-1 border-2 rounded-xl text-white hover:bg-green-500 border-green-400 "onClick=
                                    {() => close()}>
                                        SAVE
                                </button>
                            </div>
                        </div>
                        </div>
                        
                    )
                }
            </Popup>
</div>
              <div className="text-center text-xl font-serif pt-4 pb-4 text-gray-500 font-semibold">Phone Number:</div>
              <div className="text-center flex pt-4 px-24  pb-4">7989137800<Popup trigger=
                {<button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mx-2 my-1 text-blue-900 hover:text-red-600 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg></button>}
  modal nested>
                {
                  close => (
                        <div className='modal flex  bg-white border border-blue-400 rounded-xl pt-14 pb-14 pl-12 pr-12'>
                            <div className='content pr-2 text-gray-600'>
                                Enter New Mobile No.:  <input className="pl-2 border-2 rounded-xl border-gray-600"></input>
                            </div>
                            <div className="pl-4 ">
                                <button className="bg-green-400 pl-2 pr-2 pt-1 pb-1 border-2 rounded-xl text-white hover:bg-green-500 border-green-400 "onClick=
                                    {() => close()}>
                                        SAVE
                                </button>
                            </div>
                        </div>
                        
                        
                    )
                }
            </Popup>
</div>
              <div className="text-center text-xl font-serif pt-4 pb-4 text-gray-500 font-semibold">Password:</div>
              <div className="text-center flex px-24 pt-4 pb-4">imrandonor@23<Popup trigger=
                {<button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mx-2 my-1 text-blue-900 hover:text-red-600 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg></button>}
  modal nested>
                {
                  close => (
                        <div className='modal flex  bg-white border border-blue-400 rounded-xl pt-14 pb-14 pl-12 pr-12'>
                            <div className='content pr-2 text-gray-600'>
                                Enter New Password:  <input className="pl-2 border-2 rounded-xl border-gray-600"></input>
                            </div>
                            <div className="pl-4 ">
                                <button className="bg-green-400 pl-2 pr-2 pt-1 pb-1 border-2 rounded-xl text-white hover:bg-green-500 border-green-400 "onClick=
                                    {() => close()}>
                                        SAVE
                                </button>
                            </div>
                        </div>
                        
                        
                    )
                }
            </Popup>
</div>
              <div className="text-center text-xl font-serif pt-4 pb-4 text-gray-500 font-semibold">Blood Group:</div>
              <div className="text-center   pt-4 pb-4">A+</div>
              <div className="text-center text-xl font-serif pt-4 pb-4 text-gray-500 font-semibold">Age:</div>
              <div className="text-center pt-4  pb-4">19</div>
              <div className="text-center text-xl font-serif pt-4 pb-4 text-gray-500 font-semibold">Date Of Birth:</div>
              <div className="text-center pt-4  pb-4">16/05/2004</div>
              <div className="text-center text-xl font-serif pt-4 pb-4 text-gray-500 font-semibold">Health Issues:</div>
              <div className="text-center flex pt-4 px-32 pb-4">None<Popup trigger=
                {<button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mx-2  text-blue-900 hover:text-red-600 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg></button>}
  modal nested>
                {
                  close => (
                        <div className='modal flex  bg-white border border-blue-400 rounded-xl pt-14 pb-14 pl-12 pr-12'>
                            <div className='content pr-2 text-gray-600'>
                                Enter Health Issues if any:  <input className="pl-2 border-2 rounded-xl border-gray-600"></input>
                            </div>
                            <div className="pl-4 ">
                                <button className="bg-green-400 pl-2 pr-2 pt-1 pb-1 border-2 rounded-xl text-white hover:bg-green-500 border-green-400 "onClick=
                                    {() => close()}>
                                        SAVE
                                </button>
                            </div>
                        </div>
                        
                        
                    )
                }
            </Popup>
        </div>
</div>

</div>
            </div>
            <div className="flex text-center place-content-center lg:pr-80 lg:pl-80 py-8 md:pr-40">
            <div className="text-center pt-2 text-3xl font-serif text-gray-500 underline font-semibold">
            DONATION HISTORY
          </div>
          <div className="pl-5 pt-3" ><Popup trigger=
                {<button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7  text-blue-900 hover:text-red-600 cursor-pointer ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></button>}
  modal nested>
                {
                  close => (
                        <div className='modal flex  bg-white border border-blue-400 rounded-xl pt-14 pb-10 pl-12 pr-12'>
                          <div className="">
                            <div className='content pr-2 text-gray-600'>
                                Enter Donated at City:  <input className="pl-2 py-2 border-2 rounded-xl border-gray-400"></input>
                            </div>
                            <div className='content pt-5 pb-8 pr-2 text-gray-600'>
                                Enter Date Donated:      <input className="pl-2 border-2 rounded-xl focus:border-gray-600 hover:border-gray-600 border-gray-400" type="date"></input>
                            </div>
                            <div className="flex text-center pl-36">
                            <div className="pl-4 ">
                                <button className="bg-green-400 pl-2 pr-2 pt-1 pb-1 border-2 rounded-xl text-white hover:bg-green-500 border-green-400 "onClick=
                                    {() => close()}>
                                        SAVE
                                </button>
                            </div>
                            </div>
                            </div>
                        </div>
                        
                        
                    )
                }
            </Popup>

          </div>
          </div>
                <div className="flex flex-col px-72 pb-20 ">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 ">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="shadow-2xl  border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y-3 divide-blue-100 ">
                          <thead className="bg-blue-100">
                            <tr>
                              <th
                                scope="col"
                                className="hidden md:table-cell px-6 py-3 text-left text-base font-medium text-blue-900 uppercase tracking-wider"
                              >
                                DONATION NO.
                              </th>
                            
                              <th
                                scope="col"
                                className="hidden md:table-cell px-6 py-3 text-left text-base font-medium text-blue-900 uppercase tracking-wider"
                              >
                                DONATED AT CITY
                              </th>     
                              <th
                                scope="col"
                                className="hidden md:table-cell px-6 py-3 text-left text-base font-medium  text-blue-900 uppercase tracking-wider"
                              >
                                  DATE DONATED
                              </th>
                              </tr>
                          </thead>
                          <tbody className="bg-white divide-y-8 divide-blue-100">
                            { donors ? (
                              donors.map((donor) => (
                                <tr key={donor?.donor_id}>
                                  <td className=" m-2 box-border py-4 md:hidden">
                                    
                                    <div className="flex">
                                      <div className=" space-y-2 md:space-y-0 p-3">
                                        <div className="flex">
                                        <span className="text-sm  font-medium md:hidden">
                                              DONATION NO.:
                                          </span>
                                          <div className="text-sm  text-gray-900  ml-1 md:hidden ">
                                            {donor?.donation_no}
                                          </div>
                                        </div>
                                        </div>
                                        <div className="flex">
                                      <div className=" space-y-2 md:space-y-0 p-3">
                                        <div className="flex">
                                        <span className="text-sm  font-medium md:hidden">
                                              DONATED AT CITY:
                                          </span>
                                          <div className="text-sm  text-gray-900  ml-1 md:hidden ">
                                            {donor?.donated_at_city}
                                          </div>
                                        </div>
                                        </div>
                                        <div className="flex">
                                      <div className=" space-y-2 md:space-y-0 p-3">
                                        <div className="flex">
                                        <span className="text-sm  font-medium md:hidden">
                                              DATE DONATED:
                                          </span>
                                          <div className="text-sm  text-gray-900  ml-1 md:hidden ">
                                            {donor?.date_donated}
                                          </div>
                                        </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                  </td>
                                  <td className="  px-6 py-4 pl-12 hidden md:table-cell">
                                    <div className="text-sm text-gray-900">
                                      <span>{donor?.donation_no}</span>
                                    </div>
                                    </td>
                                    <td className="  px-6 py-4  hidden md:table-cell">
                                    <div className="text-sm text-gray-900">
                                      <span>{donor?.donated_at_city}</span>
                                    </div>
                                    </td>
                                    <td className="  px-6 py-4  hidden md:table-cell">
                                    <div className="text-sm text-gray-900">
                                      <span>{donor?.date_donated}</span>
                                    </div>
                                    </td>
                                    
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td
                                  colSpan="6"
                                  className="text-center py-4 w-full"
                                >
                                  No records found
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                        </div>
                        </div>
                        </div>
                        </div>                                   
          </main>
          </div>
      
    </Template>
  );
}




































