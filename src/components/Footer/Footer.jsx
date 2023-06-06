import React from 'react'


export default function Footer() {


    return (
        <footer className="relative flex w-full flex-wrap items-center justify-between bg-zinc-800 py-2 text-neutral-200  lg:py-4 min-h-[10vh]">
            <div className="flex w-full flex-wrap items-center justify-center px-3">
                <div>
                    <div className="text-sm text-center text-neutral-200">
                        <p>Designed and Developed by <a href='https://www.linkedin.com/in/Ritwik-Satpati/' target='blank'>Ritwik Satpati</a>.</p>
                    </div>
                    <div className="text-sm text-center text-neutral-200">
                        <p>&copy; 2023 <a href='https://www.linkedin.com/in/Ritwik-Satpati/' target='blank'>Ritwik Satpati</a> &amp; <a href='https://www.amity.edu/' target='blank'>Amity University</a>. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
            <div className='relative w-full md:absolute md:w-auto md:p-5 '>
                <p className='text-sm text-center md:text-left text-neutral-200'>Version 1.0.0</p>
            </div>
        </footer>
    )


}
