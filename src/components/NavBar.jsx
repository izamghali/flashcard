import React from "react"

export default function NavBar({ setPage }) {
    return (
        <nav className="
            w-full h-16 bg-violet-400 
            flex justify-center items-center
            sm:static absolute bottom-0
        ">
            <ul className="w-full flex justify-evenly sm:gap-12 sm:w-auto"> {/* FIX:  clicked state by font-bold */}
                <button className="text-lg md:text-2xl text-white font-normal" onClick={() => setPage(false)}>Topic</button>
                <button className="text-lg md:text-2xl text-white font-normal" onClick={() => setPage(true)}>Learn</button>
            </ul>
        </nav>
    )
};

