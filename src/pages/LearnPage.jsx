import React, { useState } from "react"
import NewButton from "../components/NewButton"
import voidImg from '../assets/void.png'

export default function LearnPage({ page }) {

    const [ cardDecks, setCardDecks ] = useState(false) // FIX:  This should be array, not boolean

    return (
        <section className="flex flex-col items-center gap-20">
            { cardDecks ? 
                    <h1 className="">There's data</h1> // FIX:  Loop topics here          
                : 
                    <div className="flex flex-col items-center gap-4">
                        <img className="w-48 sm:w-80" src={voidImg} />
                        <span className="text-stone-500">~ There is no card deck yet 🤨 ~</span>
                    </div>
            }
            
            <NewButton page={page} />
        </section>
    )
};

