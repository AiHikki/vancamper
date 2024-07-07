import Stars from './Stars';

const ReviewCard = ({ review: { reviewer_name, reviewer_rating, comment } }) => {
  return (
    <li>
      <div className="flex gap-4 items-center mb-4">
        <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center text-secondary-100 text-2xl font-semibold bg-foggy-white">
          {reviewer_name[0].toUpperCase()}
        </div>
        <div>
          <p className="mb-1 font-semibold text-primary text-lg">{reviewer_name}</p>
          <Stars rating={reviewer_rating} />
        </div>
      </div>
      <p className="text-slate-blue font-normal text-base">{comment}</p>
    </li>
  );
};

export default ReviewCard;
