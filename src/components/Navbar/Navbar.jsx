import React from 'react'
import { Link, useNavigate } from "react-router-dom";


export default function Navbar() {


  return (
    <nav
      className="relative flex w-full flex-wrap items-center justify-between py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 bg-neutral-600 lg:py-4 bg-opacity-50 min-h-[12vh]">
      <div className="flex w-full flex-wrap items-center justify-center px-3">
        <div>
          <Link to="/" className="my-1 mr-2 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/amity_logo_01.png"}
              className="mr-2 h-[7vh]"
              alt=""
              loading="lazy" />
          </Link>
        </div>
      </div>
    </nav>
  )


}
