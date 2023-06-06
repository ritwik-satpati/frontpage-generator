import React from 'react'


export const ReviewDetails = () => {

    let amityUniversityData = JSON.parse(localStorage.getItem("amityUniversityData"))

    let amity = amityUniversityData.amity
    let location = amityUniversityData.location
    let school = amityUniversityData.school
    
    
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


    return (
        <div>
            <div>
                <div>
                <div className='uppercase underline'>University Details</div>
                </div>
                <div>
                    <div className='flex flex-wrap'> <p>Amity University:</p> <p>{amity}</p> </div>
                </div>
            </div>
        </div>
    )


}
