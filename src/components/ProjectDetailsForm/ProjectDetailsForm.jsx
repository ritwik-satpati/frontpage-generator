import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const ProjectDetailsForm = () => {


  let navigate = useNavigate()


  const reportTypes = [
    "Project Report",
    "Lab Report",
    "Weekly Progress Report",
  ];


  const [reportType, setReportType] = useState("")
  const [subjectName, setSubjectName] = useState("")
  const [subjectCode, setSubjectCode] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [projectTitle, setProjectTitle] = useState("")

  
  const handleReportTypeChange = (e) => { setReportType(e.target.value) };
  const handleSubjectNameChange = (e) => { setSubjectName(e.target.value) };
  const handleSubjectCodeChange = (e) => { setSubjectCode(e.target.value) };
  const handleCompanyNameChange = (e) => { setCompanyName(e.target.value) };
  const handleProjectTitleChange = (e) => { setProjectTitle(e.target.value) };


  const storeDataAndNext = (e) => {
    const projectData = {
      reportType: reportType,
      subjectName: subjectName,
      subjectCode: subjectCode,
      companyName: companyName,
      projectTitle: projectTitle,
    }
    // console.log(projectData)
    localStorage.setItem("projectData", JSON.stringify(projectData))
    // console.log(JSON.parse(localStorage.getItem("projectData")))

    navigate ("/student-details");
  }


  const handleNext = (e) => {
    e.preventDefault()

    if (!reportType)
  {
    alert("Choose the REPORT TYPE")
  }
  else {
    if (!subjectName) {
      alert("Fill the SUBJECT NAME")
    }
    else {
      if (!subjectCode) {
        alert ("Fill the SUBJECT CODE")
      }
      else {
        storeDataAndNext()
      }
      }
    }
  }

      
  // const handleBack = (e) => {
  //   e.preventDefault()

  //   navigate('/amity-details')
  // }


  return (
    <div className='w-full p-6 bg-slate-300 border-blue-800 rounded-xl drop-shadow-2xl text left'>
      <p className='text-center text-blue-800 uppercase text-2xl font-bold mb-9'>Project Details</p>
      <form className='uppercase'>
        <div className='flex flex-wrap justify-center'>
          <div className='w-full md:w-1/1 mx-auto my-3'>
            <div className='px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Report Type *</label>
              <div className='relative'>
                <select className='block  w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' onChange=
                  {handleReportTypeChange} defaultValue={"selectReportType"}>
                  <option value={"selectReportType"} disabled>Select Report Type</option>
                  {reportTypes.map((item) => {
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
          <div className='w-full md:w-1/2 mx-auto my-3'>
            <div className='px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Course Title / Subject Name *</label>
              <div className='relative'>
                <input className='block  w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' value={subjectName} type='text' placeholder="Cloud Security" onChange=
                  {handleSubjectNameChange}/>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2 mx-auto my-3'>
            <div className='px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Course Code *</label>
              <div className='relative'>
                <input className='block  w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' value={subjectCode} type='text' placeholder='CSE439' onChange=
                  {handleSubjectCodeChange}/>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap justify-center'>
          <div className='w-full md:w-1/2 mx-auto my-3'>
            <div className='px-3'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Company Name</label>
              <div className='relative'>
                <input className='block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' value={companyName} type='text' placeholder='Mention "Company Name" if Applicable' onChange=
                  {handleCompanyNameChange}/>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2 mx-auto my-3'>
            <div className='px-3'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Project Title</label>
              <div className='relative'>
                <input className='block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' value={projectTitle} type='text' placeholder='Mention "Project Title" if Applicable' onChange=
                  {handleProjectTitleChange}/>
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
