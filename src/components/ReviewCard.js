import { useState } from "react"
import EditableReviewCard from "./EditableReviewCard"
import editIcon from '../assets/pencil.png'
import deleteIcon from '../assets/trash.png'
import '../style/ReviewCard.css';

function ReviewCard({ name, comment, avatarURL, id, onEditReview, onDeleteReview }) {

    const [isEditMode, setIsEditMode] = useState(false)

    function onSubmitReview({ name, comment, id }) {
        setIsEditMode(false)
        onEditReview({ name, comment, id })
    }

    return isEditMode ?
        <EditableReviewCard
            id={id}
            submitReview={onSubmitReview}
            name={name}
            comment={comment}
        /> :
        (
            <div className="card review-card">
                <div className="avatar"><img src={avatarURL} alt="avatar" /></div>
                <div className="review-card-content">
                    <div className="review-card-title">{name}</div>
                    <div className="review-card-comment">{comment}</div>
                </div>

                <div className="review-card-actions">
                    <img onClick={() => setIsEditMode(true)} src={editIcon} alt="edit" />
                    <img src={deleteIcon} onClick={() => onDeleteReview(id)} alt="delete" />
                </div>
            </div>
        )
}

export default ReviewCard