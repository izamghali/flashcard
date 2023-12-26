import React from "react"

export default function TopicCard({ topics }) {

    return (
        <>
            <div>
                <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-8">Available Topics</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                    { topics.map((topic, index) => {
                        return <div className="border-2 border-black rounded-lg h-auto w-full p-4 flex flex-col justify-between sm:hover:-translate-y-4 duration-300 cursor-pointer" key={index}>
                            <div className="">
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-stone-900">{topic.title}</h3>
                                <p className="text-stone-600">{topic.desc}</p>
                            </div>
                            <p className="text-right">{topic.decks} { topic.decks > 1 ? 'decks' : 'deck' }</p>
                        </div>
                    }) }
                </div>
            </div>
        </>
    )
};

