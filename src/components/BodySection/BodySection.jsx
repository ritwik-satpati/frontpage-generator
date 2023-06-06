import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import HomePage from '../../screens/HomePage/HomePage'
import AboutPage from '../../screens/AboutPage/AboutPage'
import { AmityDetailsPage } from '../../screens/AmityDetailsPage/AmityDetailsPage'
import { ProjectDetailsPage } from '../../screens/ProjectDetailsPage/ProjectDetailsPage'
import PageNotFound from '../../screens/PageNotFound/PageNotFound'
import { StudentDetailsPage } from '../../screens/StudentDetailsPage/StudentDetailsPage'
import { FacultyDetailsPage } from '../../screens/FacultyDetailsPage/FacultyDetailsPage'
import { ReviewDetailsPage } from '../../screens/ReviewDetailsPage/ReviewDetailsPage'
import { Template_01 } from '../Template_01/Template_01'


export const BodySection = () => {


    return (
        <div className='flex justify-center items-center min-h-[78vh] bg-yellow-400'>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='amity-details' element={<AmityDetailsPage />} />
                <Route path='project-details' element={<ProjectDetailsPage />} />
                <Route path='student-details' element={<StudentDetailsPage />} />
                <Route path='faculty-details' element={<FacultyDetailsPage />} />
                <Route path='review-details' element={<ReviewDetailsPage />} />
                <Route path='*' element={<PageNotFound />} />
                <Route path='template-01' element={<Template_01 />} />
            </Routes>
        </div>
    )


}
