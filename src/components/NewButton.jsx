import React, { useState } from "react"

export default function NewButton({ page }) {

    function createNewTopic() {
        const form = document.getElementById('new-topic-form');
        form.classList.add('flex')
        form.classList.remove('hidden')
    }
    
    function cancelTopic() {
        const form = document.getElementById('new-topic-form');
        form.classList.remove('flex')
        form.classList.add('hidden')
    }

    return (
        <div className="w-max">
            {/* button on bigger screen */}
            <button onClick={createNewTopic} className="hidden sm:flex items-center gap-2 group" href="" >
                <svg className="w-5 h-5 border-[1px] rounded-full border-stone-300 fill-stone-300 
                    duration-300 group-hover:border-stone-950 
                    group-hover:bg-stone-950 group-hover:fill-stone-50
                " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                </svg>
                <span className="border-b-[1px] border-stone-300 border-dotted text-stone-600 text-lg
                duration-300 group-hover:text-stone-950 group-hover:border-stone-950 group-hover:border-solid">
                    Create a new { page ? 'card deck' : 'topic' }
                </span>
            </button>

            {/* button on mobile size */}
            <button onClick={createNewTopic} className="sm:hidden block fixed right-8 bottom-20 items-center gap-2">
                <svg className="w-12 h-12 rounded-full fill-white bg-violet-400
                    " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                </svg>
            </button>

            <div id="new-topic-form" className="bg-[rgba(0,0,0,0.5)] w-full h-full fixed left-0 top-0 justify-center items-center hidden">
                <div className="p-4 bg-white rounded-md min-w-[20rem] flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-lg">Create a new topic</h3>
                        <svg onClick={cancelTopic} className="w-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                        </svg>
                    </div>
                    <form className="flex flex-col gap-2" action="">
                        <input placeholder="Type new topic here" className="focus:outline-violet-300 border-2 rounded-md px-2 py-1" type="text" name="" id="topic" />
                        <textarea placeholder="Elaborate more on that topic" className="focus:outline-violet-300 border-2 rounded-md px-2 py-1 min-h-[7rem]" type="text" name="" id="topic" />
                    </form>
                    <div className="flex justify-end">
                        <button className="bg-violet-300 py-2 px-4 rounded-md">save</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

