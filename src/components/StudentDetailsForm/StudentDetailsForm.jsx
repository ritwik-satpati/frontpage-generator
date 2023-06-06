import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const StudentDetailsForm = () => {


    let navigate = useNavigate()




    let batchStartYears = ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026",]
    let batchEndYears = ["2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030",]
    let years = ["1", "2", "3", "4", "5",]
    let semesters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",]


    const [studentName, setStudentName] = useState()
    const [enrollmentNo, setEnrollmentNo] = useState("")
    const [programName, setProgramName] = useState("")
    const [streamName, setStreamName] = useState("")
    const [specificationName, setSpecificationName] = useState("")
    const [section, setSection] = useState("")
    const [batchStart, setBatchStart] = useState("")
    const [batchEnd, setBatchEnd] = useState("")
    const [year, setYear] = useState("")
    const [semester, setSemester] = useState("")


    const handleSutdentNameChange = (e) => { setStudentName(e.target.value) }
    const handleEnrollmentNoChange = (e) => { setEnrollmentNo(e.target.value) }
    const handleProgramNameChange = (e) => { setProgramName(e.target.value) }
    const handleStreamNameChange = (e) => { setStreamName(e.target.value) }
    const handleSpecificationChange = (e) => { setSpecificationName(e.target.value) }
    const handleSectionChange = (e) => { setSection(e.target.value) }
    const handleBatchStartChange = (e) => { setBatchStart(e.target.value) }
    const handleBatchEndChange = (e) => { setBatchEnd(e.target.value) }
    const handleYearChange = (e) => { setYear(e.target.value) }
    const handleSemesterChange = (e) => { setSemester(e.target.value) }


    const storeDataAndNext = (e) => {
        const studentData = {
            studentName: studentName,
            enrollmentNo: enrollmentNo,
            programName: programName,
            streamName: streamName,
            specificationName: specificationName,
            section: section,
            batchStart: batchStart,
            batchEnd: batchEnd,
            year: year,
            semester: semester,
        }
        localStorage.setItem("studentData", JSON.stringify(studentData))
        // console.log(JSON.parse(localStorage.getItem("studentData")))

        navigate("/faculty-details")
    }


    const handleNext = (e) => {
        e.preventDefault()

        if (!studentName) {
            alert("Enter STUDENT NAME")
        }
        else {
            if (!enrollmentNo) {
                alert("Enter ENROLLMENT NO")
            }
            else {
                if (!programName) {
                    alert("Enter PROGRAM")
                }
                else {
                    if (!streamName) {
                        alert("Enter STREAM")
                    }
                    else {
                        if (!batchStart) {
                            alert("Enter BATCH STARTING YEAR")
                        }
                        else {
                            if (!batchStart) {
                                alert("Enter BATCH ENDING YEAR")
                            }
                            else {
                                if (!year) {
                                    alert("Enter YEAR")
                                }
                                else {
                                    if (!semester) {
                                        alert("Enter SEMESTER")
                                    }
                                    else {
                                        storeDataAndNext()
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }


    // const handleBack = (e) => {
    //     e.preventDefault()

    //     navigate('/project-details')
    // }


    return (
        <div className='w-full p-6 my-[5vh] bg-slate-300 border-blue-800 rounded-xl drop-shadow-2xl text left'>
            <p className='text-center text-blue-800 uppercase text-2xl font-bold mb-9'>Student Details</p>
            <form className='uppercase'>
                <div className='flex flex-wrap justify-center'>
                    <div className='w-full md:w-1/2 mx-auto my-3'>
                        <div className='px-3'>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Student Name * </label>
                            <div className='relative'>
                                <input className='block  w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' value={studentName} type='text' placeholder='Robert Sen' onChange=
                                    {handleSutdentNameChange} />
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 mx-auto my-3'>
                        <div className='px-3'>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Enrollment No *</label>
                            <div className='relative'>
                                <input className='block  w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' value={enrollmentNo} type='text' placeholder='A910052XXXXX' onChange=
                                    {handleEnrollmentNoChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap justify-center'>
                    <div className='w-1/2 md:w-1/4 mx-auto my-3'>
                        <div className='px-3'>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Program *</label>
                            <div className='relative'>
                                <input className='block  w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' value={programName} type='text' placeholder='B.Tech' onChange=
                                    {handleProgramNameChange} />
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 md:w-1/4 mx-auto my-3'>
                        <div className='px-3'>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Stream *</label>
                            <div className='relative'>
                                <input className='block  w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' value={streamName} type='text' placeholder='CSE' onChange=
                                    {handleStreamNameChange} />
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 md:w-1/4 mx-auto my-3'>
                        <div className='px-3'>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Specification</label>
                            <div className='relative'>
                                <input className='block  w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' value={specificationName} type='text' placeholder='Mention if apply' onChange=
                                    {handleSpecificationChange} />
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 md:w-1/4 mx-auto my-3'>
                        <div className='px-3'>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Section</label>
                            <div className='relative'>
                                <input className='block  w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' value={section} placeholder='A' type='text' onChange=
                                    {handleSectionChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap justify-center'>
                    <div className='w-full md:w-1/2 mx-auto my-3'>
                        <div className='px-3'>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Batch *</label>
                            <div className='flex flex-wrap justify-center w-full'>
                                <div className='w-6/12'>
                                    <div className='pr-3'>
                                        <div className='relative'>
                                            <select className='block  w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' onChange=
                                                {handleBatchStartChange} defaultValue={"selectBatchStartYear"}>
                                                <option value={"selectBatchStartYear"} disabled>Batch Starting Year</option>
                                                {batchStartYears.map((item) => {
                                                    return (
                                                        <option key={item} value={item}>{item}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-6/12'>
                                    <div className='pl-3'>
                                        <div className='relative'>
                                            <select className='block  w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' onChange=
                                                {handleBatchEndChange} defaultValue={"selectBatchEndYear"}>
                                                <option value={"selectBatchEndYear"} disabled> Batch Ending Year</option>
                                                {batchEndYears.map((item) => {
                                                    return (
                                                        <option key={item} value={item}>{item}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 mx-auto my-3'>
                        <div className=''>
                            <div className='flex flex-wrap justify-center'>
                                <div className='w-1/2 mx-auto'>
                                    <div className='px-3'>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Year *</label>
                                        <div className='relative'>
                                            <select className='block  w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' onChange=
                                                {handleYearChange} defaultValue={"selectYear"}>
                                                <option value={"selectYear"} disabled>Select Year</option>
                                                {years.map((item) => {
                                                    return (
                                                        <option key={item} value={item}>{item}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-1/2 mx-auto'>
                                    <div className='px-3'>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Semester *</label>
                                        <div className='relative'>
                                            <select className='block  w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' onChange=
                                                {handleSemesterChange} defaultValue={"selectSemester"}>
                                                <option value={"selectSemester"} disabled>Select Semester</option>
                                                {semesters.map((item) => {
                                                    return (
                                                        <option key={item} value={item}>{item}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                </div>
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
