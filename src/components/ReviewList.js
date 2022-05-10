import ReviewCard from './ReviewCard'

function ReviewList({ reviews, onEditReview, onDeleteReview }) {
    return reviews.map(rev => {
        return (
            <ReviewCard
                key={rev.id}
                id={rev.id}
                name={rev.name}
                comment={rev.comment}
                avatarURL={rev.avatarURL}
                onEditReview={onEditReview}
                onDeleteReview={onDeleteReview}
            />
        )
    })
}

export default ReviewList