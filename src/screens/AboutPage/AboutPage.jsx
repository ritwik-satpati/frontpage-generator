import React from 'react'
import { Link } from 'react-router-dom'


export default function AboutPage() {


  return (
    <div className="flex flex-col rounded-lg bg-slate-300 shadow-2xl md:max-w-xl md:flex-row" >
      <img
        class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src="https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/262959871_3057222127928017_3289703917532914771_n.jpg?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=174925&_nc_ohc=yAHRWSY07koAX-8kOGY&_nc_ht=scontent.fccu31-1.fna&oh=00_AfCGgPAmbp5ODnpPGd9pPlnmjjqjzjCAXZGDFzOqzRzIAQ&oe=6484F71A"
        alt="" />
      <div className="flex flex-col justify-start p-6">
        <h5 className="mb-2 text-xl font-medium text-neutral-800 "><a href='https://www.linkedin.com/in/Ritwik-Satpati/' target='blank'>Ritwik Satpati</a></h5>
        <p className="mb-4 text-base text-neutral-600 ">Final year student of Computer Science & Engineering, Amity University Kolkata.</p>
        <div className="text-xs text-neutral-500 ">
          <p>2019 - 2023,</p>
          <p>ASETK - AUK</p>
          </div>
      </div>
    </div>
  )


}