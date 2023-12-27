import React from "react"

export default function TopicCard({ topics, view }) {

    return (
        <>
            <div>
                <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-8 select-none">Available Topics</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">

                    { view ?
                        topics.map((topic, index) => {
                            return <div className="border-2 border-stone-300 rounded-lg p-2 flex justify-between items-center
                                hover:bg-violet-300 hover:border-violet-300 duration-200 hover:text-white group
                            " key={index}>
                                <h3 className="text-md sm:text-lg lg:text-xl font-semibold text-stone-900">{topic.title}</h3>
                                <span className="text-stone-600 group-hover:text-stone-900">{topic.decks} { topic.decks > 1 ? 'decks' : 'deck' }</span>
                            </div>
                        })
                        :
                        topics.map((topic, index) => {
                            return <div className="border-2 border-stone-300 rounded-lg 
                            h-auto w-full p-4 flex flex-col justify-between 
                            sm:hover:-translate-y-4 duration-300 cursor-pointer hover:shadow-lg hover:shadow-stone-600
                            
                            " 
                                key={index}>
                                <div className="">
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-stone-900">{topic.title}</h3>
                                    <p className="text-stone-600">{topic.desc}</p>
                                </div>
                                <p className="text-right">{topic.decks} { topic.decks > 1 ? 'decks' : 'deck' }</p>
                            </div>
                        })
                    }

                    {/* { topics.map((topic, index) => {
                        return <div className="border-2 border-black rounded-lg h-auto w-full p-4 flex flex-col justify-between sm:hover:-translate-y-4 duration-300 cursor-pointer" key={index}>
                            <div className="">
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-stone-900">{topic.title}</h3>
                                <p className="text-stone-600">{topic.desc}</p>
                            </div>
                            <p className="text-right">{topic.decks} { topic.decks > 1 ? 'decks' : 'deck' }</p>
                        </div>
                    }) } */}
                </div>
            </div>
        </>
    )
};

