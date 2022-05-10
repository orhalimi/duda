import { useState } from "react";
import '../style/EditableReviewCard.css'

function EditableReviewCard({ submitReview, id, isNewReview, name: givenName = "", comment: givenComment = "" }) {

    const [name, setName] = useState(givenName)
    const [comment, setComment] = useState(givenComment)


    return (
        <div className="card editable-card">
            <form onSubmit={(e) => {
                e.preventDefault();
                submitReview({ name, comment, id });
                setName("")
                setComment("")
            }}>
                <input
                    value={name}
                    placeholder="Your name"
                    onChange={(e) => setName(e.target.value)}
                />
                <textarea
                    className="editable-card-comment"
                    value={comment}
                    placeholder="Your comment"
                    onChange={(e) =>
                        setComment(e.target.value)}
                />
                <button>{isNewReview ? 'Add' : 'Save'}</button>
            </form>
        </div >
    )
}

export default EditableReviewCard