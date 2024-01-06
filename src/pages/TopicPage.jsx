import React, { useState } from "react"
import noDataImg from '../assets/no-data.png'
import NewButton from "../components/NewButton"
import TopicCard from "../components/TopicCard"
import GridListButton from "../components/GridListButton"

export default function TopicPage({ page }) {

    const mockupTopics = [
        {
            title: 'Mammals',
            desc: 'adipiscing elit pellentesque habitant morbi',
            decks: 3,
            completed: false
        },
        {
            title: 'Superhero',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            decks: 4,
            completed: true
        },
        {
            title: 'Movies',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis.',
            decks: 1,
            completed: false
        },
        {
            title: 'Sports',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            decks: 1,
            completed: false
        },
    ]

    const [ topics, setTopics ] = useState(mockupTopics)
    const [ view, setView ] = useState(false)

    function openEditOption(event) {
        const removeOption = event.target.parentElement.nextSibling
        removeOption.classList.toggle('translate-y-10')
    }

    function dismissRemoveOption(event) {
        // const removeModal = document.getElementById('remove-modal')
        // removeModal.classList.remove('translate-y-0')
        // removeModal.classList.add('translate-y-10')
        // console.log(event);
    }


    return (
        <section className="flex flex-col gap-6 w-full lg:max-w-[70rem] px-8">

            <div className="flex justify-between">
                <NewButton page={page}/>
                <div className="flex gap-6">
                    <button onClick={()=>document.getElementById('my_modal_1').showModal()} className="flex items-center gap-2 sm:hover:bg-violet-300 sm:hover:text-white p-2 rounded-md duration-200 text-stone-500 ">
                        <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z"/>
                        </svg>
                        manage topic
                    </button>
                    <GridListButton view={view} setView={setView}/>

                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <dialog onClick={dismissRemoveOption} id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Manage topics</h3>

                            {/* FIX:  Add remove button here */}

                            {/* list container */}
                            <div className="space-y-2 ">
                                { topics.map((topic, index) => {
                                    return <div className="group border-2 border-slate-500 rounded-md p-2 overflow-hidden relative" key={index}>
                                            <div className="flex justify-between">
                                                <h4>{topic.title}</h4>
                                                <svg onClick={openEditOption} className="w-5 cursor-pointer group-hover:translate-x-0 translate-x-10 duration-200" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                                                </svg>
                                            </div>

                                            <div id="remove-modal" className="absolute top-0 bottom-0 right-0 flex items-center translate-y-10 duration-200
                                                bg-slate-100 text-slate-700 p-2 rounded-md
                                            ">
                                                <div className="flex flex-col p-2">
                                                    <span>edit</span>
                                                    <span>remove</span>

                                                </div>
                                            </div>

                                        </div>
                                }) }
                            </div>
                            
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Save</button>
                                </form>
                            </div>
                        </div>
                    </dialog>

                </div>
{/* 
                <div className="w-full h-screen z-10
                    fixed top-0 left-0 bg-[rgba(0,0,0,0.5)]
                    flex justify-center items-center
                ">
                    
                    <div className="border-2 w-40 h-40 rounded-md">

                    </div>

                </div> */}
                
            </div>

            { topics.length > 0 ? 
                    <TopicCard topics={topics} view={view} />
                : // if there's no topics it'll display this img
                    <div className="flex flex-col items-center gap-4">
                        <img className="w-48 sm:w-80" src={noDataImg} />
                        <span className="text-stone-500">~ There is no topic yet 🥲 ~</span>
                    </div>
            }

            <div className="block sm:hidden"><NewButton page={page}/></div>

        </section>
    )
};

