import EditableReviewCard from "./EditableReviewCard"

function NewReviewCard({ submitReview }) {
    return <EditableReviewCard submitReview={submitReview} isNewReview />
}

export default NewReviewCard