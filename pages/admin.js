import Head from "next/head";
import { useState, useEffect } from "react";
import Template from "../components/layouts/admin";
import { useRouter } from "next/router";
import { backgroundImage } from "tailwindcss/defaultTheme";
export default function Locations() {
  const [addLocation, setAddLocation] = useState(false);
  const [editLocation, setEditLocation] = useState(false);
  const [editLocationId, setEditLocationId] = useState();
  const [deleteLocation, setDeleteLocation] = useState(false);
  const [deleteLocationId, setDeleteLocationId] = useState();
  const [addedSuccess, setAddedSuccess] = useState();
  const [locationsUpdated, setLocationsUpdated] = useState(true);
  const [locations, setLocations] = useState();
  const [searchLocationKeyword, setSearchLocationKeyword] = useState();
  const [filterstate, setFilterState] = useState();
  const [filtersLoaded, setFiltersLoaded] = useState(false);
  const router = useRouter();

const [patients, setPatients] = useState([
    {
      "patient_id":"1",
      "patient_id":"14",
      "patient_name":"Jenny",
      "current_city":"Hyderabad",
      "blood_group":"A+",
      "required_by":"July 19th,2023"
    },
    {
      "patient_id":"2",
      "patient_id":"15",
      "patient_name":"Arnold",
      "current_city":"Chennai",
      "blood_group":"B+",
      "required_by":"July 21st,2023"
      
    }
  ]);


  return (
    <Template page="Home">
      <div className="overflow-auto h-screen bg-blue-100 md:p-5  md:px-40" >
        
        <Head>
          <title>HOME-Dashboard</title>
          
          <link rel="icon" href="https://img.freepik.com/free-photo/blood-drop-paper-medical-cross-health-diy-element_53876-128924.jpg?w=740&t=st=1688389714~exp=1688390314~hmac=bc910505213750fb365236636f736c05f2c653336ce3ad7b122bfab5b53257e3"/>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <main >
          <div  className="  font-semibold text-red-400 text-3xl ">
            Welcome to Nirmaan's Blood-Bank !!
            </div>
          <div className="grid md:grid-cols-2  border-2 mb-10 rounded-lg border-gray-200 shadow-md pb-7 md:mt-8 bg-green-200">
            
          
            <div className="md:col-span-2 text-2xl p-3 text-black border-b-2 md:px-11 font1 mt-2">
              DASHBOARD
            </div>
            <div
              data-aos="fade-up"
              className="grid grid-cols-2 col-span-2 md:grid-cols-2 gap-4 lg:gap-8 pt-20 px-5 md:px-0 md:ml-10 md:mr-10"
            >
            <div className="flex flex-col rounded shadow-sm bg-blue-100 overflow-hidden border border-blue-500 h-40 cursor-pointer hover:shadow-2xl hover:border-blue-600">
              <a href="http://localhost:3001/donors/">
                <div className="p-5 lg:p-6 flex-grow w-full">
                  <dl>
                    <dt className="text-2xl text-gray-500 font-semibold">{100}</dt>
                    <dd className="uppercase font-medium text-sm text-gray-500 tracking-wider">
                      <span className=" text-blue-700 font1">
                        Donors
                      </span>
                      <br></br>
                      <br></br>
                      
                      <span className="text-blue-700 text-xl ">
                        No. of Available Donors:  80
                      </span>
                    </dd>
                  </dl>
                </div>
                </a>
              </div>
              
              <div className="flex flex-col rounded shadow-sm bg-pink-100 overflow-hidden border border-pink-400 h-40 cursor-pointer  hover:border-pink-500 hover:shadow-2xl ">
                <a href="http://localhost:3001/patients/">
                <div className="p-5 lg:p-6 flex-grow w-full">
                  <dl>
                    <dt className="text-2xl text-gray-500 font-semibold">{50}</dt>
                    <dd className="uppercase font-medium text-sm text-gray-500 tracking-wider">
                      <span className="text-pink-400 font1">
                        Patients
                      </span>
                      <br></br>
                      <br></br>
                      <span className="text-pink-400 text-xl ">
                        No. of Patients with urgency:  20
                      </span>
                    </dd>
                  </dl>
                </div>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 ">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="shadow  border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y-8 divide-blue-100">
                          <thead className="bg-gray-100">
                            <tr>
                              <th
                                scope="col"
                                className="hidden md:table-cell px-6 py-3 text-left text-base font-medium text-red-600 uppercase tracking-wider"
                              >
                                Patient ID
                              </th>
                            
                              <th
                                scope="col"
                                className="hidden md:table-cell px-6 py-3 text-left text-base font-medium text-red-600 uppercase tracking-wider"
                              >
                                Patient Name
                              </th> 
                              <th
                                scope="col"
                                className=" hidden md:table-cell px-6 py-3 text-left text-base font-medium  text-red-600 uppercase tracking-wider"
                              >
                                Current City
                              </th>
                              <th
                                scope="col"
                                className=" hidden md:table-cell px-6 py-3 text-left text-base font-medium  text-red-600 uppercase tracking-wider"
                              >
                                Blood Group
                              </th>
                              <th
                                scope="col"
                                className=" hidden md:table-cell px-6 py-3 text-left text-base font-medium  text-red-600 uppercase tracking-wider"
                              >
                                Required By
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-gray-50 divide-y-8 divide-blue-100">
                            {patients ? (
                              patients.map((patient) => (
                                <tr key={patient?.patient_id}>
                                  <td className=" m-2 box-border py-4 md:hidden">
                                    
                                    <div className="flex">
                                      <div className=" space-y-1 md:space-y-0 p-3">
                                        <div className="flex">
                                        <span className="text-sm  font-medium md:hidden">
                                              Patient ID:
                                          </span>
                                          <div className="text-sm   text-gray-900  ml-1 md:hidden ">
                                            {patient?.patient_id}
                                          </div>
                                        </div>
                                        </div>
                                    <div className="flex">
                                      <div className=" space-y-1 md:space-y-0 p-3">
                                        <div className="flex">
                                        <span className="text-sm  font-medium md:hidden">
                                            Patient Name:
                                          </span>
                                          <div className="text-sm  text-gray-900  ml-1 md:hidden ">
                                            {patient?.patient_name}
                                          </div>
                                        </div>
                                        <div className="flex">
                                        <span className="text-sm  font-medium md:hidden">
                                            Current City:
                                          </span>
                                          <div className="text-sm  text-gray-900  ml-1 md:hidden ">
                                            {patient?.current_city}
                                          </div>
                                        </div>
                                        <div className="flex">
                                        <span className="text-sm  font-medium md:hidden">
                                            Blood Group:
                                          </span>
                                          <div className="text-sm  text-gray-900  ml-1 md:hidden ">
                                            {patient?.blood_group}
                                          </div>
                                        </div>
                                        <div className="flex">
                                        <span className="text-sm  font-medium md:hidden">
                                            Required By:
                                          </span>
                                          <div className="text-sm  text-gray-900  ml-1 md:hidden ">
                                            {patient?.required_by}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    </div>
                                  </td>
                                  <td className="  px-6 py-4  hidden md:table-cell">
                                    <div className="text-sm text-gray-900">
                                      <span>{patient?.patient_id}</span>
                                    </div>
                                    </td>
                                  <td className="  px-6 py-4  hidden md:table-cell">
                                    <div className="text-sm text-gray-900">
                                      <span>{patient?.patient_name}</span>
                                    </div>
                                    </td>
                                    <td className="  px-6 py-4  hidden md:table-cell">
                                    <div className="text-sm text-gray-900">
                                      <span>{patient?.current_city}</span>
                                    </div>
                                  </td>
                                  <td className="  px-6 py-4  hidden md:table-cell">
                                    <div className="text-sm text-gray-900">
                                      <span>{patient?.blood_group}</span>
                                    </div>
                                  </td>
                                  <td className="  px-6 py-4  hidden md:table-cell">
                                    <div className="text-sm text-gray-900">
                                      <span>{patient?.required_by}</span>
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
                <br></br>
                <br></br>
          <tr>
            <td className="text-center justify-center text-red-500 text-5xl font-serif  ">
              <marquee behaviour="scroll" direction="left" scrollamount="10">
                • A drop for you, an ocean for someone else •
              </marquee>
            </td>
          </tr>
        </main>
      </div>
    </Template>
  );

}