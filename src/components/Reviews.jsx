import BookCamperForm from './BookCamperForm';
import ReviewCard from './ReviewCard';

const Reviews = ({ reviews }) => {
  return (
    <div className="flex gap-6 mt-11" id="reviews">
      <ul className="flex flex-col gap-6">
        {reviews?.length > 0 && reviews.map((review, i) => <ReviewCard key={i} review={review} />)}
      </ul>
      <div>
        <BookCamperForm />
      </div>
    </div>
  );
};

export default Reviews;
