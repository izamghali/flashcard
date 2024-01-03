import React from "react"

export default function NavBar({ page, setPage }) {
    return (
        <nav className="
            w-full h-16 bg-violet-400 
            flex justify-center items-center
            sm:static fixed bottom-0
        ">
            <ul className="w-full flex justify-evenly sm:gap-12 sm:w-auto"> {/* FIX:  clicked state by font-bold */}
                <button className={`text-lg md:text-2xl text-white ${!page && 'bg-emerald-500 rounded-md'} font-normal px-4 py-1 duration-200`} onClick={() => setPage(false)}>Topic</button>
                <button className={`text-lg md:text-2xl text-white ${page && 'bg-emerald-500 rounded-md'} font-normal px-4 py-1 duration-200`} onClick={() => setPage(true)}>Learn</button>
            </ul>
        </nav>
    )
};

