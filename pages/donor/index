import { useState, useEffect } from "react";
import { PencilAltIcon } from "@heroicons/react/solid";
import { TrashIcon, PlusIcon } from "@heroicons/react/outline";
import Head from "next/head";
import AddLocationDialog from "../../components/layouts/createDonor";
import EditLocationDialog from "../../components/layouts/editDonor";
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

  const [donors, setDonors] = useState([
    {
      "donor_id":"1",
      "name":"Imran",
      "gender":"M",
      "phone_number":"7654388631",
      "email":"appu@example.com",
      "age":"23",
      "current_city":"Chennai",
      "blood_group":"B-",
      "health_issues":"Asthma",
      "last_donated_date":"05-01-2023",
      "availability":"Available"
      
    },
    {
      "donor_id":"2",
      "name":"Kruthi",
      "gender":"F",
      "phone_number":"9834578965",
      "email":"binary@example.com",
      "age":"34",
      "current_city":"Hyderabad",
      "blood_group":"B+",
      "health_issues":"None",
      "last_donated_date":"None",
      "availability":"Available"
      
    },
    {
      "donor_id":"3",
      "name":"Manas",
      "gender":"M",
      "phone_number":"7647812365",
      "email":"divinity@pretty.com",
      "age":"21",
      "current_city":"Banglore",
      "blood_group":"A+",
      "health_issues":"None",
      "last_donated_date":"None",
      "availability":"Not Available"
      
    },
    {
      "donor_id":"4",
      "name":"Sripad",
      "gender":"M",
      "phone_number":"8897644251",
      "email":"krazy@pretty.com",
      "age":"32",
      "current_city":"Mumbai",
      "blood_group":"AB-",
      "health_issues":"None",
      "last_donated_date":"03-12-2022",
      "availability":"Available"
      
    },
    {
      "donor_id":"5",
      "name":"Sweety",
      "gender":"F",
      "phone_number":"9842156147",
      "email":"max@yahoo.com",
      "age":"35",
      "current_city":"Mumbai",
      "blood_group":"A+",
      "health_issues":"BP",
      "last_donated_date":"06-01-2023",
      "availability":"Available"
      
    },
    {
      "donor_id":"6",
      "name":"Isabella",
      "gender":"F",
      "phone_number":"7412589630",
      "email":"mindhack@pretty.com",
      "age":"22",
      "current_city":"Chennai",
      "blood_group":"B+",
      "health_issues":"None",
      "last_donated_date":"04-01-2023",
      "availability":"Available"
      
    },
    {
      "donor_id":"7",
      "name":"Bhanu",
      "gender":"M",
      "phone_number":"6789663142",
      "email":"patriot@pretty.com",
      "age":"34",
      "current_city":"Hyderabad",
      "blood_group":"O-",
      "health_issues":"None",
      "last_donated_date":"02-02-2023",
      "availability":"Available"
      
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
          <title>Donors | Blood-Bank</title>
          {/* <link rel="icon" href="/nirmaan_logo.png" /> */}
          <link rel="icon" href="https://img.freepik.com/free-photo/blood-drop-paper-medical-cross-health-diy-element_53876-128924.jpg?w=740&t=st=1688389714~exp=1688390314~hmac=bc910505213750fb365236636f736c05f2c653336ce3ad7b122bfab5b53257e3"/>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <main>
          <div className=" min-h-screen">
            <main className="py-10 m-6">
              <div className="mx-auto  sm:px-4 lg:px-0">
                <div className="mb-0 lg:mb-5 flex flex-col justify-center lg:flex-row lg:justify-between lg:space-x-5">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 text-center">
                      DONOR DETAILS
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
                                Name
                              </th>
                            
                              <th
                                scope="col"
                                className="hidden md:table-cell px-6 py-3 text-left text-base font-medium text-blue-900 uppercase tracking-wider"
                              >
                                Gender
                              </th>     
                              <th
                                scope="col"
                                className="hidden md:table-cell px-6 py-3 text-left text-base font-medium  text-blue-900 uppercase tracking-wider"
                              >
                                    Contact Details
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
                                Health Issues
                              </th>
                              <th
                                scope="col"
                                className=" hidden md:table-cell px-6 py-3 text-left text-base font-medium  text-blue-900 uppercase tracking-wider"
                              >
                                Last donated Date
                              </th>
                              <th
                                scope="col"
                                className=" hidden md:table-cell px-6 py-3 text-left text-base font-medium  text-blue-900 uppercase tracking-wider"
                              >
                                Availability
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
                            {donors ? (
                              donors.map((donor) => (
                                <tr key={donor?.donor_id}>
                                  <td className=" m-2 box-border py-4 md:hidden">
                                    <div className="flex">
                                      <div className=" space-y-2 md:space-y-0 p-3">
                                        <div className="flex">
                                        <span className="text-sm  font-medium md:hidden">
                                            Name:
                                          </span>
                                          <div className="text-sm  text-gray-900  ml-1 md:hidden ">
                                            {donor?.name}
                                          </div>
                                        </div>
                                        <div className="flex">
                                        <span className="text-sm  font-medium md:hidden">
                                            Gender:
                                          </span>
                                          <div className="text-sm  text-gray-900  ml-1 md:hidden ">
                                            {donor?.gender}
                                          </div>
                                        </div>
                                        <div className="flex">
                                        <span className="text-sm  font-medium md:hidden">
                                            phone Number:
                                          </span>
                                          <div className="text-sm  text-gray-900  ml-1 md:hidden ">
                                            {donor?.phone_number}
                                          </div>
                                        </div>
                                        <div className="flex">
                                        <span className="text-sm  font-medium md:hidden">
                                            Email:
                                          </span>                                          
                                          <div className="text-sm  text-gray-900  ml-1 md:hidden ">
                                            {donor?.email}
                                          </div>
                                        </div>
                                        <div className="flex">
                                        <span className="text-sm  font-medium md:hidden">
                                            Age:
                                          </span>
                                          <div className="text-sm  text-gray-900  ml-1 md:hidden ">
                                            {donor?.age}
                                          </div>
                                        </div>
                                        <div className="flex">
                                        <span className="text-sm  font-medium md:hidden">
                                            Current City:
                                          </span>
                                          <div className="text-sm  text-gray-900  ml-1 md:hidden ">
                                            {donor?.current_city}
                                          </div>
                                        </div>
                                        <div className="flex">
                                        <span className="text-sm  font-medium md:hidden">
                                            Blood Group:
                                          </span>
                                          <div className="text-sm  text-gray-900  ml-1 md:hidden ">
                                            {donor?.blood_group}
                                          </div>
                                        </div>
                                        <div className="flex">
                                        <span className="text-sm  font-medium md:hidden">
                                            Health Issues:
                                          </span>
                                          <div className="text-sm  text-gray-900 md:hidden ml-1 ">
                                            <span>
                                              {donor?.health_issues}
                                            </span>
                                          </div>
                                        </div>
                                        <div className="flex">
                                        <span className="text-sm  font-medium md:hidden">
                                            Last Donated Date:
                                          </span>
                                          <div className="text-sm  text-gray-900 md:hidden ml-1 ">
                                            <span>{donor?.last_donated_date}
                                            </span>
                                          </div>
                                        </div>
                                        <div className="flex">
                                        <span className="text-sm  font-medium md:hidden">
                                            Availability:
                                          </span>
                                          <div className="text-sm  text-gray-900  ml-1 md:hidden ">
                                            {donor?.availability}
                                          </div>
                                        </div>
                                        <div className="md:hidden ">
                                          <a
                                            onClick={() =>
                                              handleEditLocation(
                                                donor?.donor_id
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
                                                donor?.donor_id
                                              )
                                            }
                                            className="text-red-600 hover:text-red-900 cursor-pointer p-2"
                                          >
                                            <TrashIcon className="w-4 h-4 inline-block" />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="  px-6 py-4  hidden md:table-cell">
                                    <div className="text-sm text-gray-900">
                                      <span>{donor?.name}</span>
                                    </div>
                                    </td>
                                    <td className="  px-6 py-4  hidden md:table-cell">
                                    <div className="text-sm text-gray-900 break-all">
                                      <span>{donor?.gender}</span>
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                                    <div className="text-md text-gray-900">
                                      <span>{donor?.phone_number}</span>
                                    </div>
                                    <div className="text-sm text-gray-900">
                                      <span>{donor?.email}</span>
                                    </div>
                                    </td>
                                    <td className="  px-6 py-4  hidden md:table-cell">
                                    <div className="text-sm text-gray-900">
                                      <span>{donor?.age}</span>
                                    </div>
                                    </td>
                                    <td className="  px-6 py-4  hidden md:table-cell">
                                    <div className="text-sm text-gray-900">
                                      <span>{donor?.current_city}</span>
                                    </div>
                                  </td>
                                  <td className="  px-6 py-4  hidden md:table-cell">
                                    <div className="text-sm text-gray-900">
                                      <span>{donor?.blood_group}</span>
                                    </div>
                                  </td>
                                  <td className="  px-6 py-4  hidden md:table-cell">
                                    <div className="text-sm text-gray-900">
                                      <span>{donor?.health_issues}</span>
                                    </div>
                                  </td>
                                  <td className="  px-6 py-4  hidden md:table-cell">
                                    <div className="text-sm text-gray-900">
                                      <span>{donor?.last_donated_date}</span>
                                    </div>
                                  </td>
                                  <td className="  px-6 py-4  hidden md:table-cell">
                                    <div className="text-sm text-gray-900">
                                      <span>{donor?.availability}</span>
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                                    <a
                                      onClick={() =>
                                        handleEditLocation(donor?.donor_id)
                                      }
                                      className="text-indigo-600 hover:text-indigo-900 cursor-pointer p-2"
                                    >
                                      <PencilAltIcon className="w-4 h-4 inline-block" />
                                    </a>
                                    |
                                    <a
                                      onClick={() =>
                                        handleDeleteLocation(donor?.donor_id)
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
                        ) : (
                          ""
                        )}
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
          message="You want to delete the location, all assets will be deleted in this location"
          open={deleteLocation}
          onClosed={() => setDeleteLocation(false)}
          onConfirmed={() => deleteLocationFunc(deleteLocationId)}
        />
      </div>
    </Template>
  );
}
