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
                <GridListButton view={view} setView={setView}/>
            </div>

            { topics.length > 0 ? 
                    <TopicCard topics={topics} />
                : 
                    <div className="flex flex-col items-center gap-4">
                        <img className="w-48 sm:w-80" src={noDataImg} />
                        <span className="text-stone-500">~ There is no topic yet 🥲 ~</span>
                    </div>
            }

            <div className="block sm:hidden"><NewButton page={page}/></div>

        </section>
    )
};

