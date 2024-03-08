import React from "react"

export default function Card(props) {

    function handleClick(event) {
        
    }

    return (
        <section>

            <div className={`
                card w-96 h-40 bg-base-100 shadow-xl 
                overflow-hidden
                duration-200 group
                `} 
                onClick={handleClick}
                >
                    <div className="group-hover:hidden bg-base-200 w-full h-full flex justify-center items-center">
                        <p className="">Front card</p>
                    </div>
                    <div className="group-hover:flex hidden bg-emerald-200 w-full h-full justify-center items-center">
                        <p className="">Back card</p>
                    </div>
            </div>


            
        </section>
    )
};

