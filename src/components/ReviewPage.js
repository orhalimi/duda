import { useEffect, useState } from "react";
import NewReviewCard from "./NewReviewCard";
import ReviewList from "./ReviewList";

import '../style/ReviewPage.css';

const imgGen = require('@dudadev/random-img');

function ReviewPage(props) {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const reviews = JSON.parse(localStorage.getItem('reviews'))
        if (reviews && Array.isArray(reviews)) setReviews(reviews)

    }, [])

    useEffect(() => {
        localStorage.setItem('reviews', JSON.stringify(reviews));
    }, [reviews])


    async function onAddReview({ name, comment }) {
        const avatarURL = await imgGen();
        const id = Math.floor(Math.random() * 100000) + 1; //simulate unique id
        setReviews(
            [
                ...reviews,
                { name, comment, avatarURL, id }
            ]
        )
    }

    function onEditReview({ name, comment, id }) {
        const updateReviews = reviews.map(item => {
            return item.id === id ? { ...item, name, comment } : item
        })
        setReviews(updateReviews)
    }

    function onDeleteReview(id) {
        const updateReviews = reviews.filter(item => item.id !== id)
        setReviews(updateReviews)
    }

    return (
        <div className="review-page">
            <div className="review-page-content">
                <h1 className="review-page-title">Users reviews</h1>
                <ReviewList reviews={reviews} onEditReview={onEditReview} onDeleteReview={onDeleteReview} />
                <NewReviewCard submitReview={onAddReview} />
            </div>
        </div>
    )
}

export default ReviewPage;