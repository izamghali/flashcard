import React, { useState } from "react"
import NewButton from "./NewButton"
import voidImg from '../assets/void.png'
import noDataImg from '../assets/no-data.png'

export default function LearnPage({ page, topics, cardDecks }) {


    return (
        <section className="flex flex-col items-center gap-20">
            { (topics && !page) || (cardDecks && page) ? 
                    // <h1 className="">There's data</h1> // FIX:  Loop topics here          
                    <div className="flex flex-col items-center gap-4">
                        <img className="w-48 sm:w-80" src={voidImg} />
                        <span className="text-stone-500">~ There is no card deck yet 🤨 ~</span>
                    </div>
                : 
                    <div className="flex flex-col items-center gap-4">
                        <img className="w-48 sm:w-80" src={noDataImg} />
                        <span className="text-stone-500">~ There is no topic yet 🥲 ~</span>
                    </div>
                    
            }
            
            <NewButton page={page} />
        </section>
    )
};

