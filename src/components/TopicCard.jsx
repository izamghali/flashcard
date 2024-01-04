import React from "react"

export default function TopicCard({ topics, view }) {

    return (
        <>
            <div>
                <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-8 select-none text-black">Available Topics</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                    { topics.map((topic, index) => {
                        return <div 
                            className={`border-2 border-stone-400 rounded-lg 
                                h-auto w-full p-4 flex flex-col 
                                ${view ? 'hover:-translate-y-4' : 'hover:bg-violet-300 hover:border-violet-300 hover:text-white' } 
                                duration-300 cursor-pointer group
                                ${ !view && 'tooltip' }
                            `} 
                            key={index}
                            data-tip={topic.desc}
                            >
                            <div className={`flex justify-between items-center`}>
                                <h3 className={`text-lg sm:text-xl lg:text-2xl font-semibold text-stone-900 ${ !view && 'group-hover:text-white' } `}>{topic.title}</h3>
                                { view ?  
                                    <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                                    </svg>
                                    :
                                    <p className="text-right ">{topic.decks} { topic.decks > 1 ? 'decks' : 'deck' }</p>
                                }
                            </div>

                            { view && 
                                <div className="flex flex-col justify-between ">
                                    <p className="text-stone-600 h-32 overflow-scroll">{topic.desc}</p> 
                                    <p className="text-right">{topic.decks} { topic.decks > 1 ? 'decks' : 'deck' }</p>
                                </div>
                            }

                        </div>
                    }) }
                </div>
            </div>
        </>
    )
};

