import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export const AmityUniversityDetailsForm = () => {


    const navigate = useNavigate();

    const amitys = [
        "India",
        "Global",
    ];

    const locations = [
        "Kolkata",
        "Noida",
        "Mumbai",
        "Greater Noida",
    ];

    let schools = [
        "Amity Institute of Information Technology",
        "Amity School of Engineering & Technology",
    ]

    let depertments = [
        "Computer Science and Engineering"
    ]


    const [amity, setAmity] = useState("");
    const [location, setLocation] = useState("");
    const [school, setSchool] = useState("");
    const [depertment, setDepertment] = useState("");

    const handleAmityChange = (e) => { setAmity(e.target.value) };
    const handleLocationChange = (e) => { setLocation(e.target.value) };
    const handleSchoolChange = (e) => { setSchool(e.target.value) };
    const handleDepertmentChange = (e) => { setDepertment(e.target.value) };


    const storeDataAndNext = (e) => {
        const amityUniversityData = {
            amity: amity,
            location: location,
            school: school,
            depertment: depertment,
        };
        // console.log(amityUniversityData);
        localStorage.setItem("amityUniversityData", JSON.stringify(amityUniversityData));
        // console.log(JSON.parse(localStorage.getItem("amityUniversityData")))

        navigate("/project-details")
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        if (!amity) {
            alert("Choose AMITY UNIVERSITY")
        }
        else {
            if (!location) {
                alert("Choose UNIVERSITY LOCATION")
            }
            else {
                if (!depertment) {
                    alert ("Choose DEPERTMENT")
                }
                else {
                    storeDataAndNext()
                }
            }
        }
    }


    return (
        <div className="w-full p-6 bg-slate-300 border-blue-800 rounded-xl drop-shadow-2xl text-left " >
            <p className='text-center text-blue-800 uppercase text-2xl font-bold mb-9'>University Details</p>
            <div>
                <form className='uppercase' >
                    <div className='flex flex-wrap justify-center'>
                        <div className='w-full md:w-1/2 mx-auto my-3'>
                            <div className='px-3'>
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Amity University *</label>
                                <div className='relative'>
                                    <select className='block  w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' onChange={handleAmityChange} defaultValue={"selectAmity"} >
                                        <option value={"selectAmity"} disabled>Select India or Global</option>
                                        {amitys.map((item) => {
                                            return (
                                                <option key={item} value={item}>{item}</option>)
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 mx-auto my-3'>
                            <div className='px-3'>
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>University Loaction *</label>
                                <div className='relative'>
                                    <select className=' block  w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' onChange={handleLocationChange} defaultValue={"selectLocation"}>
                                        <option value={"selectLocation"} disabled>Select Location</option>
                                        {locations.map((item) => {
                                            return (
                                                <option key={item} value={item}>{item}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center'>
                    <div className='w-full mx-auto my-3'>
                        <div className='px-3'>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>School / Institution Name *</label>
                            <div className='relative'>
                                <select className='block  w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' onChange=
                                    {handleSchoolChange} defaultValue={"selectSchool"}>
                                    <option value={"selectSchool"} disabled>Select School / Institution *</option>
                                    {schools.map((item) => {
                                        return (
                                            <option key={item} value={item}>{item}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='w-full mx-auto my-3'>
                        <div className='px-3'>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Depertment *</label>
                            <div className='relative'>
                                <select className='block  w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' onChange=
                                    {handleDepertmentChange} defaultValue={"selectDepertment"}>
                                    <option value={"selectDepertment"} disabled>Select Depertment *</option>
                                    {depertments.map((item) => {
                                        return (
                                            <option key={item} value={item}>{item}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className='flex justify-center mx-3 mt-3'>
                        <button type="button" className='inline-block rounded-lg bg-blue-800 px-6 pb-2 pt-2.5 text-xl font-medium mt-3 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ' onClick={handleSubmit}>Next</button>
                    </div>
                </form>
            </div>
        </div>
    )


}
