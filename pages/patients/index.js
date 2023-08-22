import { useState, useEffect } from "react";
import { PencilAltIcon } from "@heroicons/react/solid";
import { TrashIcon, PlusIcon } from "@heroicons/react/outline";
import Head from "next/head";
import AddLocationDialog from "../../components/layouts/createPatient";
import EditLocationDialog from "../../components/layouts/editPatient";
import Template from "../../components/layouts/admin";
import { isUserLoggedIn, UserData } from "../../utils/User";
import { useRouter } from "next/router";
import Pagination from "../../components/ui/pagination";
import { PAGINATION_LIMIT } from "../../config/constants";
import ConfirmDialog from "../../components/ui/confirm";

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
      "gender":"F",
      "age":"41",
    "spoccontact_name":"Jaylen Blackwell",
    "spoccontact_num":"8939465789",
      "current_city":"Hyderabad",
      "blood_group":"B+",
      "required_by_date":"18-07-2023",
      "health_issues":"Diabetes "
    },
    {
      "patient_id":"2",
      "patient_id":"15",
      "patient_name":"Arnold",
      "gender":"M",
      "age":"46",
    "spoccontact_name":"Kylan Gentry",
    "spoccontact_num":"7384842217",
      "current_city":"Chennai",
      "blood_group":"B-",
      "required_by_date":"20-07-2023",
      "health_issues":"Asthma "
    },
    {
      "patient_id":"3",
      "patient_id":"16",
      "patient_name":"Wyatt",
      "gender":"M",
      "age":"47",
      "spoccontact_name":"Jake",
      "spoccontact_num":"8348458463",
      "current_city":"Banglore",
      "blood_group":"A+",
      "required_by_date":"22-07-2023",
      "health_issues":"None "
    },
    {
      "patient_id":"4",
      "patient_id":"18",
      "patient_name":"Lovy",
      "gender":"F",
      "age":"37",
    "spoccontact_name":"Jameson",
      "spoccontact_num":"7989137869",
      "current_city":"Chennai",
      "blood_group":"A-",
      "required_by_date":"25-07-2023",
      "health_issues":"None "
    },
    {
      "patient_id":"5",
      "patient_id":"19",
      "patient_name":"Danielle",
      "gender":"F",
      "age":"68",
      "spoccontact_name":"Grayson",
      "spoccontact_num":"8977547537",
      "current_city":"Hyderabad",
      "blood_group":"O-",
      "required_by_date":"27-07-2023",
      "health_issues":"Blood Pressure "
    }

    
    
]);

  const [totalRecords, setTotalRecords] = useState();
  const [pagination, setPagination] = useState({
    limit: PAGINATION_LIMIT,
    from: 0,
    to: PAGINATION_LIMIT,
  });

  useEffect(() => {
    if (isUserLoggedIn() === false) {
      router.push("/");
    }

    filtersLoad();
  }, [searchLocationKeyword, locationsUpdated, filterstate, pagination]);

  const filtersLoad = () => {
    if (filtersLoaded === false) {
      // fetch_filters();
    }
  };

  // edit location button trigger
  function handleEditLocation(id) {
    setEditLocation(true);
    setEditLocationId(id);
  }

  // search
  function search(keyword) {
    setSearchLocationKeyword(keyword);
    setLocationsUpdated(keyword);
  }

  // delete asset button trigger
  function handleDeleteLocation(id) {
    setDeleteLocation(true);
    setDeleteLocationId(id);
  }

  // delete asset trigger
  function deleteLocationFunc(id) {
    setDeleteLocation(false);
    //delete code here
  }

  return (
    <Template page="Modules">
      <div className="overflow-auto bg-blue-100">
        <Head>
          <title>Patients | Blood-Bank</title>
          {/* <link rel="icon" href="/nirmaan_logo.png" /> */}
          <link rel="icon" href="https://img.freepik.com/free-photo/blood-drop-paper-medical-cross-health-diy-element_53876-128924.jpg?w=740&t=st=1688389714~exp=1688390314~hmac=bc910505213750fb365236636f736c05f2c653336ce3ad7b122bfab5b53257e3"/>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <main>
          <div className="min-h-screen ">
            <main className="py-10 m-6">
              <div className="mx-auto  sm:px-4 lg:px-0">
                <div className="mb-0 lg:mb-5 flex flex-col justify-center lg:flex-row lg:justify-between lg:space-x-5">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 text-center">
                        PATIENT DETAILS
                    </h1>
                  </div>
                  <div className="max-w-3xl mx-auto mb-5 px-0 sm:px-0 md:flex md:items-center md:justify-between md:space-x-5 lg:mb-0 lg:max-w-7xl lg:px-0">
                    <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-start sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
                      <button
                        type="button"
                        onClick={() => setAddLocation(true)}
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                      >
                        <PlusIcon className="w-4 h-4 inline-block mr-1" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 ">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="shadow  border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y-8 divide-blue-100">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="hidden md:table-cell px-6 py-3 text-left text-base font-medium text-blue-900 uppercase tracking-wider"
                              >
                                Patient ID
                              </th>
                            
                              <th
                                scope="col"
                                className="hidden md:table-cell px-6 py-3 text-left text-base font-medium text-blue-900 uppercase tracking-wider"
                              >
                                Patient Details
                              </th> 
                              <th
                                scope="col"
                                className=" hidden md:table-cell px-6 py-3 text-left text-base font-medium  text-blue-900 uppercase tracking-wider"
                              >
                                Age
                              </th>
                              <th
                                scope="col"
                                className=" hidden md:table-cell px-6 py-3 text-left text-base font-medium  text-blue-900 uppercase tracking-wider"
                              >
                                Spoc Contact Details
                              </th>
                              <th
                                scope="col"
                                className=" hidden md:table-cell px-6 py-3 text-left text-base font-medium  text-blue-900 uppercase tracking-wider"
                              >
                                Current City
                              </th>
                              <th
                                scope="col"
                                className=" hidden md:table-cell px-6 py-3 text-left text-base font-medium  text-blue-900 uppercase tracking-wider"
                              >
                                Blood Group
                              </th>
                              <th
                                scope="col"
                                className=" hidden md:table-cell px-6 py-3 text-left text-base font-medium  text-blue-900 uppercase tracking-wider"
                              >
                                Required By Date
                              </th>
                              <th
                                scope="col"
                                className=" hidden md:table-cell px-6 py-3 text-left text-base font-medium  text-blue-900 uppercase tracking-wider"
                              >
                                Health Issues
                              </th>
                              <th
                                scope="col"
                                className=" hidden md:table-cell px-6 py-3 text-left text-base font-medium  text-blue-900 uppercase tracking-wider"
                              >
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y-8 divide-blue-100">
                            {patients ? (
                              patients.map((patient) => (
                                <tr key={patient?.patient_id}>
                                  <td className=" m-2 box-border py-4 md:hidden">
                                    
                                    <div className="flex">
                                      <div className=" space-y-2 md:space-y-0 p-3">
                                        <div className="flex">
                                        <span className="text-sm  font-medium md:hidden">
                                              Patient ID:
                                          </span>
                                          <div className="text-sm  text-gray-900  ml-1 md:hidden ">
                                            {patient?.patient_id}
                                          </div>
                                        </div>
                                        </div>
                                    <div className="flex">
                                      <div className=" space-y-2 md:space-y-0 p-3">
                                        <div className="flex">
                                        <span className="text-sm  font-medium md:hidden">
                                            Patient Details:
                                          </span>
                                          <div className="text-sm  text-gray-900  ml-1 md:hidden ">
                                            {patient?.patient_details}
                                          </div>
                                        </div>
                                        
                                        <div className="flex">
                                        <span className="text-sm  font-medium md:hidden">
                                            Gender:
                                          </span>
                                          <div className="text-sm  text-gray-900  ml-1 md:hidden ">
                                            {patient?.gender}
                                          </div>
                                        </div>
                                        <div className="flex">
                                        <span className="text-sm  font-medium md:hidden">
                                            Age:
                                          </span>
                                          <div className="text-sm  text-gray-900  ml-1 md:hidden ">
                                            {patient?.age}
                                          </div>
                                        </div>
                                        <div className="flex">
                                        <span className="text-sm  font-medium md:hidden">
                                            Spoc Contact Details:
                                          </span>                                          
                                          <div className="text-sm  text-gray-900  ml-1 md:hidden ">
                                            {patient?.spoccontact_details}
                                          </div>
                                        </div>
                                        {/* <div className="flex">
                                        <span className="text-sm  font-medium md:hidden">
                                            Email:
                                          </span>
                                          <div className="text-sm  text-gray-900  ml-1 md:hidden ">
                                            {patient?.email}
                                          </div>
                                        </div> */}
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
                                            Required By Date:
                                          </span>
                                          <div className="text-sm  text-gray-900  ml-1 md:hidden ">
                                            {patient?.required_by_date}
                                          </div>
                                        </div>
                                        <div className="flex">
                                        <span className="text-sm  font-medium md:hidden">
                                            Health Issues:
                                          </span>
                                          <div className="text-sm  text-gray-900 md:hidden ml-1 ">
                                            <span>
                                              {patient?.health_issues}
                                            </span>
                                          </div>
                                        </div>
                                        
                                        
                                        
                                        <div className="md:hidden ">
                                          <a
                                            onClick={() =>
                                              handleEditLocation(
                                                patient?.patient_id
                                              )
                                            }
                                            className="text-indigo-600 hover:text-indigo-900 cursor-pointer p-2"
                                          >
                                            <PencilAltIcon className="w-4 h-4 inline-block" />
                                          </a>
                                          |
                                          <a
                                            onClick={() =>
                                              handleDeleteLocation(
                                                patient?.patient_id
                                              )
                                            }
                                            className="text-red-600 hover:text-red-900 cursor-pointer p-2"
                                          >
                                            <TrashIcon className="w-4 h-4 inline-block" />
                                          </a>
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
                                    <div className="text-sm text-gray-900 pl-3 pt-1 break-all">
                                      <span>{patient?.gender}</span>
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                                    <div className="text-md text-gray-900">
                                      <span>{patient?.age}</span>
                                    </div>
                                    </td>
                                    <td className="  px-6 py-4  hidden md:table-cell">
                                    <div className="text-sm text-gray-900">
                                      <span>{patient?.spoccontact_name}</span>
                                    </div>
                                    
                                    <div className="text-sm text-gray-900">
                                      <span>{patient?.spoccontact_num}</span>
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
                                      <span>{patient?.required_by_date}</span>
                                    </div>
                                  </td>
                                  <td className="  px-6 py-4  hidden md:table-cell">
                                    <div className="text-sm text-gray-900">
                                      <span>{patient?.health_issues}</span>
                                    </div>
                                  </td>
                                
                                  
                                  <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                                    <a
                                      onClick={() =>
                                        handleEditLocation(patient?.patient_id)
                                      }
                                      className="text-indigo-600 hover:text-indigo-900 cursor-pointer p-2"
                                    >
                                      <PencilAltIcon className="w-4 h-4 inline-block" />
                                    </a>
                                    |
                                    <a
                                      onClick={() =>
                                        handleDeleteLocation(patient?.patient_id)
                                      }
                                      className="text-red-600 hover:text-red-900 cursor-pointer p-2"
                                    >
                                      <TrashIcon className="w-4 h-4 inline-block" />
                                    </a>
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
                        {totalRecords ? (
                          <Pagination
                            total={totalRecords}
                            pagination={pagination}
                            pageChanged={(page) => setPagination(page)}
                          />
                        ) : ("")} 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </main>
        <AddLocationDialog
          open={addLocation}
          onChangeOpen={() => setAddLocation(false)}
          locationAdded={(e) => setLocationsUpdated(e)}
          successMessage={(e) => setAddedSuccess(e)}
        />
        <EditLocationDialog
          id={editLocationId}
          open={editLocation}
          onChangeOpen={() => setEditLocation(false)}
          locationUpdated={(e) => setLocationsUpdated(e)}
          successMessage={(e) => setAddedSuccess(e)}
        />
        <ConfirmDialog
          id={deleteLocationId}
          message="You want to delete the details, all assets will be deleted in this row"
          open={deleteLocation}
          onClosed={() => setDeleteLocation(false)}
          onConfirmed={() => deleteLocationFunc(deleteLocationId)}
        />
      </div>
    </Template>
  );
}














