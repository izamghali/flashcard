import React from "react"

export default function QuizModal(props) {
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="quiz-modal" className="modal">
            <div className="modal-box flex flex-col ">
                <h3 className="font-bold text-lg">Create new card</h3>

                <div className="mt-4">
                    <div className="label">
                        <span className="label-text">Who are you?</span>
                        <span className="label-text-alt text-primary"><span className="font-semibold">Front side</span> of the card</span>
                    </div>
                    <input type="text" placeholder="e.g: Batman" className="input input-bordered w-full" />

                </div>

                <div className="mt-4">
                    <div className="label">
                        <span className="label-text">Who are you really?</span>
                        <span className="label-text-alt text-primary"><span className="font-semibold">Back side</span> of the card</span>
                    </div>
                    <input type="text" placeholder="e.g: Bruce Wayne" className="input input-bordered w-full" />

                </div>


                <div className="flex justify-end mt-4">
                    <button className="btn btn-primary w-fit px-10">Create</button>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
            </dialog>
        </div>
    )
};

