import React from 'react'
import { Link } from 'react-router-dom'


export default function HomePage() {


    return (
        <div className=''>
            <div className='m-auto'>
                <div>
                    <Link to="/amity-details">
                        <img
                            src={process.env.PUBLIC_URL + "/assets/images/amity_logo.png"}
                            className="max-h-[50vh] drop-shadow-xl"
                            alt=""
                            loading="lazy" />
                    </Link>
                </div>
            </div>
        </div>
    )


}
