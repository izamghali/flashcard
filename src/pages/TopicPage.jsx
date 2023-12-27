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

    return (
        <section className="flex flex-col gap-6 w-full lg:max-w-[70rem] px-8">

            <div className="flex justify-between">
                <div className="hidden sm:block"><NewButton page={page}/></div>
                <div className="flex gap-6">
                    <button className="flex items-center gap-2 hover:bg-violet-300 p-2 rounded-md duration-200 text-stone-500 hover:text-stone-800">
                        <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z"/>
                        </svg>
                        manage topic
                    </button>
                    <GridListButton view={view} setView={setView}/>
                </div>
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

