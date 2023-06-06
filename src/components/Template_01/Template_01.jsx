import React from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'


import "./Template_01.css"


export const Template_01 = () => {


    let amityUniversityData = JSON.parse(localStorage.getItem("amityUniversityData"))

    let amity = amityUniversityData.amity
    let location = amityUniversityData.location
    let school = amityUniversityData.school
    let depertment = amityUniversityData.depertment


    let projectData = JSON.parse(localStorage.getItem("projectData"))

    let reportType = projectData.reportType
    let subjectName = projectData.subjectName
    let subjectCode = projectData.subjectCode
    let companyName = projectData.companyName
    let projectTitle = projectData.projectTitle


    let studentData = JSON.parse(localStorage.getItem("studentData"))

    let studentName = studentData.studentName
    let enrollmentNo = studentData.enrollmentNo
    let programName = studentData.programName
    let streamName = studentData.streamName
    let specificatioName = studentData.specificationName
    let section = studentData.section
    let batchStart = studentData.batchStart
    let batchEnd = studentData.batchEnd
    let year = studentData.year
    let semester = studentData.semester


    let facultyData = JSON.parse(localStorage.getItem("facultyData"))

    let courseFacultyDegisnation = facultyData.courseFacultyDegisnation
    let courseFacultyName = facultyData.courseFacultyName
    let courseFacultyCode = facultyData.courseFacultyCode
    let facultyGuideDegisnation = facultyData.facultyGuideDegisnation
    let facultyGuideName = facultyData.facultyGuideName
    let facultyGuideCode = facultyData.facultyGuideCode
    let industryGuideDegisnation = facultyData.industryGuideDegisnation
    let industryGuideName = facultyData.industryGuideName


    if (courseFacultyCode !== "") {
        courseFacultyCode = "(" + courseFacultyCode + ")"
    }

    if (facultyGuideCode !== "") {
        facultyGuideCode = "(" + facultyGuideCode + ")"
    }


    const createPDF = async () => {

        const pdf = new jsPDF("portrait", "pt", "a4")

        const data = await html2canvas(document.querySelector("#pdf"), {
            quality: 10,
            scale: 5,
        });
        const img = data.toDataURL("image/jpeg", 1.0);
        // const imgProperties = pdf.getImageProperties(img);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        // console.log(pdfHeight, pdfWidth)
        pdf.addImage(img, "JPEG", 0, 0, pdfWidth, pdfHeight);
        pdf.save(
            studentName +
            "_" +
            enrollmentNo +
            "_" +
            subjectName +
            "_" +
            subjectCode +
            "_" +
            reportType +
            ".pdf"
        );
    }


    return (
        <div className='justify-center text-center'>
            <div className='flex justify-center text-center align-middle my-[5vh]'>
                <div className={'p-6 bg-white rounded relative'} id='pdf'>
                    <div className='main-report-body border-2 border-black flex flex-col justify-center items-center px-2 pb-4'>
                        <div className='h-auto mt-auto'>
                            <div>
                                <p className=' text-black uppercase font-bold text-3xl leading-8'>{subjectName} ({subjectCode})</p>
                            </div>
                            <div className='font-bold text-xl'>
                                <p>{reportType}</p>
                            </div>
                            <div className='font-bold text-2xl leading-6 mt-2 capitalize'>
                                {courseFacultyName === "" ?
                                    "" : <p>{projectTitle}</p>
                                }
                            </div>
                        </div>
                        <div className='h-auto mt-auto'>
                            <div className='font-bold text-xl capitalize'>
                                {courseFacultyName === "" ?
                                    "" : <p>Course Faculty: {courseFacultyDegisnation} {courseFacultyName} {courseFacultyCode}</p>
                                }
                            </div>
                            <div className='font-bold text-xl capitalize'>
                                {facultyGuideName === "" ?
                                    "" : <p>Faculty Guide: {facultyGuideDegisnation} {facultyGuideName} {facultyGuideCode}</p>
                                }
                            </div>
                            <div className='font-bold text-xl capitalize'>
                                {industryGuideName === "" ?
                                    "" : <p>Industry Guide: {industryGuideDegisnation} {industryGuideName}</p>
                                }
                            </div>
                        </div>
                        <div className='h-auto mt-auto'>
                            <div className='font-bold text-3xl'>
                                <p>Name: <a className='uppercase'>{studentName}</a></p>
                            </div>
                            <div className='font-bold text-2xl'>
                                <p>Enrollment No: {enrollmentNo}</p>
                            </div>
                        </div>
                        <div className='h-auto mt-auto'>
                            <div className='font-bold text-2xl'>
                                {specificatioName === "" ?
                                    <p className='capitalize'>{programName} - <a className='uppercase'>{streamName}</a></p> :
                                    <p className='capitalize'>{programName} - <a className='uppercase'>{streamName}</a> - <a className='capitalize'>{specificatioName}</a></p>
                                }
                            </div>
                            <div className='font-bold text-2xl'>
                                {section === "" ?
                                    "" : <p>Sec: {section}</p>}
                            </div>
                            <div className='font-bold text-2xl'>
                                <p className=''>({year} Year - {semester} Sem)</p>
                            </div>
                            <div className='font-bold text-2xl'>
                                <p>Batch: {batchStart}-{batchEnd}</p>
                            </div>
                        </div>
                        <div className='h-auto mt-auto'>
                            <div className='pt-6'>
                                <div className='flex justify-center items-center'>
                                    <img
                                        src={process.env.PUBLIC_URL + "/assets/images/amity_logo.png"}
                                        className="h-32" />
                                </div>
                            </div>
                        </div>
                        <div className='h-auto mt-auto mb-auto'>
                            <div className='font-bold text-lg'>
                                <p className='uppercase'>Depertment of</p>
                            </div>
                            <div className='font-bold text-lg'>
                                <p className='uppercase'>{depertment}</p>
                            </div>
                            <div className='font-bold text-lg'>
                                <p className='uppercase'>{school}</p>
                            </div>
                            <div className='font-bold text-xl'>
                                <p className='uppercase'>Amity University {location}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" className='inline-block rounded-lg bg-blue-800 px-6 pb-2 pt-2.5 text-xl font-medium mb-[5vh] uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ' onClick={createPDF}>Print</button>
        </div>
    )


}
