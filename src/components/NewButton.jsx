import React from "react"

export default function NewButton({ topics, page }) {

    return (
        <div>
            <a className="flex items-center gap-2 group " href="" >
                <svg className="w-5 h-5 border-[1px] rounded-full border-stone-300 fill-stone-300 
                    duration-300 group-hover:border-stone-950 
                    group-hover:bg-stone-950 group-hover:fill-stone-50
                " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                </svg>
                { topics ? 
                    <span className="border-b-[1.5px] border-stone-300 border-dotted text-stone-600
                    duration-300 group-hover:text-stone-950 group-hover:border-stone-950 group-hover:border-solid">
                       Create a new { page ? 'topic' : 'card deck' }
                   </span>
                : 
                    <span className="border-b-[1.5px] border-stone-300 border-dotted text-stone-800
                        duration-300 group-hover:text-stone-950 group-hover:border-stone-950 group-hover:border-solid">
                        Create a new { page ? 'card deck' : 'topic' }
                    </span>
                }
                
            </a>
        </div>
    )
};

