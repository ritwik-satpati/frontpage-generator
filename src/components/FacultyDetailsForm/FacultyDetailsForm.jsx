import React, {useState}  from 'react'
import { useNavigate } from 'react-router-dom'


export const FacultyDetailsForm = () => {


    let navigate = useNavigate()

    let degisnations = ["Mr.", "Ms.", "Mrs.", "Dr."]

    
    
    
    const [courseFacultyDegisnation, setCourseFacultyDegisnation] = useState("MR")
    const [courseFacultyName, setCourseFacultyName] = useState("")
    const [courseFacultyCode, setCourseFacultyCode] = useState("")
    const [facultyGuideDegisnation, setFacultyGuideDegisnation] = useState("MR")
    const [facultyGuideName, setFacultyGuideName] = useState("")
    const [facultyGuideCode, setFacultyGuideCode] = useState("")
    const [industryGuideDegisnation, setIndustryGuideDegisnation] = useState("MR")
    const [industryGuideName, setIndustryGuideName] = useState("")


    const handleCourseFacultyDegisnationChange = (e) => {setCourseFacultyDegisnation(e.target.value)}
    const handleCourseFacultyNameChange = (e) => {setCourseFacultyName(e.target.value)}
    const handleCourseFacultyCodeChange = (e) => {setCourseFacultyCode(e.target.value)}
    const handleFacultyGuideDegisnationChange = (e) => {setFacultyGuideDegisnation(e.target.value)}
    const handleFacultyGuideNameChange = (e) => {setFacultyGuideName(e.target.value)}
    const handleFacultyGuideCodeChange = (e) => {setFacultyGuideCode(e.target.value)}
    const handleIndustryGuideDegisnationChange = (e) => {setIndustryGuideDegisnation(e.target.value)}
    const handleIndustryGuideNameChange = (e) => {setIndustryGuideName(e.target.value)}


    const storeDataAndNext = (e) => {
        const facultyData = {
            courseFacultyDegisnation: courseFacultyDegisnation,
            courseFacultyName: courseFacultyName,
            courseFacultyCode: courseFacultyCode,
            facultyGuideDegisnation: facultyGuideDegisnation,
            facultyGuideName: facultyGuideName,
            facultyGuideCode: facultyGuideCode,
            industryGuideDegisnation: industryGuideDegisnation,
            industryGuideName: industryGuideName,
        }
        localStorage.setItem("facultyData", JSON.stringify(facultyData))
        console.log(JSON.parse(localStorage.getItem("facultyData")))

        // navigate("/review-details")
        navigate("/template-01")
    }


    const handleNext = (e) => {
        e.preventDefault()

        if (!facultyGuideName && !courseFacultyName) {
            alert("Enter Either FACULTY GUIDE NAME or COURSE FACULTY NAME")
        }
        else {
            storeDataAndNext()
        }
    }


    // const handleBack = (e) => {
    //     e.preventDefault()

    //     navigate('/project-details')
    // }


    return (
        <div className='w-full p-6 my-[5vh] bg-slate-300 border-blue-800 rounded-xl drop-shadow-2xl text left'>
            <p className='text-center text-blue-800 uppercase text-2xl font-bold mb-9'>Faculty Details</p>
            <form className='uppercase'>
                <div className='flex flex-wrap justify-center'>
                    <div className='w-1/3 md:w-1/6 mx-auto my-3'>
                        <div className='px-3'>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Degisnation</label>
                            <div className='relative'>
                                <select className='block  w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded focus:outline-none focus:bg-white focus:border-gray-500' onChange=
                                    {handleCourseFacultyDegisnationChange}>
                                    {degisnations.map((item) => {
                                        return (
                                            <option key={item} value={item}>{item}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='w-2/3 md:w-1/2 mx-auto my-3'>
                        <div className='px-3'>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Course Faculty Name</label>
                            <div className='relative'>
                                <input className='block  w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded focus:outline-none focus:bg-white focus:border-gray-500' value={courseFacultyName} type='text' placeholder='Robert Sen' onChange=
                                    {handleCourseFacultyNameChange} />
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/3 mx-auto my-3'>
                        <div className='px-3'>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Course Faculty Code</label>
                            <div className='relative'>
                                <input className='block  w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded focus:outline-none focus:bg-white focus:border-gray-500' value={courseFacultyCode} type='text' placeholder='XXXXXX' onChange=
                                    {handleCourseFacultyCodeChange} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-wrap justify-center'>
                    <div className='w-1/3 md:w-1/6 mx-auto my-3'>
                        <div className='px-3'>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Degisnation</label>
                            <div className='relative'>
                                <select className='block  w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded focus:outline-none focus:bg-white focus:border-gray-500' onChange=
                                    {handleFacultyGuideDegisnationChange}>
                                    {degisnations.map((item) => {
                                        return (
                                            <option key={item} value={item}>{item}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='w-2/3 md:w-1/2 mx-auto my-3'>
                        <div className='px-3'>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Faculty Guide Name</label>
                            <div className='relative'>
                                <input className='block  w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded focus:outline-none focus:bg-white focus:border-gray-500' value={facultyGuideName} type='text' placeholder='Robert Sen' onChange=
                                    {handleFacultyGuideNameChange} />
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/3 mx-auto my-3'>
                        <div className='px-3'>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Faculty Guide Code</label>
                            <div className='relative'>
                                <input className='block  w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded focus:outline-none focus:bg-white focus:border-gray-500' value={facultyGuideCode} type='text' placeholder='XXXXXX' onChange=
                                    {handleFacultyGuideCodeChange} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-wrap justify-center'>
                    <div className='w-1/3 md:w-1/3 mx-auto my-3'>
                        <div className='px-3'>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Degisnation</label>
                            <div className='relative'>
                                <select className='block  w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded focus:outline-none focus:bg-white focus:border-gray-500' onChange=
                                    {handleIndustryGuideDegisnationChange}>
                                    {degisnations.map((item) => {
                                        return (
                                            <option key={item} value={item}>{item}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='w-2/3 md:w-2/3 mx-auto my-3'>
                        <div className='px-3'>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Industry Guide Name</label>
                            <div className='relative'>
                                <input className='block  w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded focus:outline-none focus:bg-white focus:border-gray-500' value={industryGuideName} type='text' placeholder='Robert Sen' onChange=
                                    {handleIndustryGuideNameChange} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center'>
                    {/* <div className='flex justify-center mx-3 mt-3 w-1/2'>
                        <button type="button" className='inline-block rounded-lg bg-blue-800 px-6 pb-2 pt-2.5 text-xl font-medium mt-3 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ' onClick={handleBack}>Back</button>
                    </div> */}
                    <div className='flex justify-center mx-3 mt-3 w-1/2'>
                        <button type="button" className='inline-block rounded-lg bg-blue-800 px-6 pb-2 pt-2.5 text-xl font-medium mt-3 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ' onClick={handleNext}>Next</button>
                    </div>
                </div>
            </form>
        </div>
    )


}
