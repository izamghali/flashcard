import React from "react"

export default function TopicModal(props) {
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="topic-modal" className="modal">
            <div className="modal-box flex flex-col ">
                <h3 className="font-bold text-lg">Add new topic</h3>
                <input type="text" placeholder="Type your new topic here" className="input input-bordered w-full mt-4" />
                <div className="label">
                    <span className="label-text-alt text-primary">Think about something trending or relatable</span>
                </div>
                <div className="flex justify-end mt-4">
                    <button className="btn btn-primary w-fit px-10">Add</button>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
            </dialog>
        </div>
    )
};

