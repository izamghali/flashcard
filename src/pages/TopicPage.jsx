import React, { useState } from "react"
import noDataImg from '../assets/no-data.png'
import NewButton from "../components/NewButton"

export default function TopicPage({ page }) {

    const [ topics, setTopics ] = useState(false) // FIX:  This should be array, not boolean

    return (
        <section className="flex flex-col items-center gap-20">
            { topics ? 
                    <h1 className="">There's data</h1> // FIX:  Loop topics here          
                : 
                    <div className="flex flex-col items-center gap-4">
                        <img className="w-48 sm:w-80" src={noDataImg} />
                        <span className="text-stone-500">~ There is no topic yet 🥲 ~</span>
                    </div>
                    
            }
            <NewButton topics={topics} page={page}/>
            
        </section>
    )
};

