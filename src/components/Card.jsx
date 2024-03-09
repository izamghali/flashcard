import React from "react"

export default function Card(props) {

    const testCard = [
        { front: 'Batman', back: 'Bruce Wayne' },
        { front: 'Superman', back: 'Clark Kent' },
        { front: 'Flash', back: 'Barry Allen' },
        { front: 'Wonder Woman', back: 'Princess Diana' },
        { front: 'Green Lantern', back: 'Hal Jordan' },
        { front: 'Aquaman', back: 'Arthur Curry' },
        // { front: 'Aquaman', back: 'Arthur Curry' },
    ]

    function handleClick(event) {
        
    }

    return (
        <section className="
            grid gap-10
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
        
            border-2 border-violet-400 w-[90%]">

            {
                testCard.map((card, idx) => {
                    return <div className={`
                        card w-auto h-40 
                        bg-base-100 shadow-xl 
                        overflow-hidden
                        duration-200 group
                        `} 
                        onClick={handleClick}
                        key={idx}
                        >
                            <div className="group-hover:hidden bg-base-200 w-full h-full flex justify-center items-center">
                                <p className="">{card.front}</p>
                            </div>
                            <div className="group-hover:flex hidden bg-emerald-200 w-full h-full justify-center items-center">
                                <p className="">{card.back}</p>
                            </div>
                    </div>
                    
                })
            }



            
        </section>
    )
};

