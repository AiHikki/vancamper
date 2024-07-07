import { FaStar } from 'react-icons/fa6';

const Stars = ({ rating }) => {
  const roundedRating = Math.round(rating);

  return (
    <ul className="flex gap-1 items-center">
      {[...Array(5)].map((_, i) => (
        <li key={i}>
          <FaStar size={16} color={i < roundedRating ? '#FFC531' : '#F2F4F7'} />
        </li>
      ))}
    </ul>
  );
};

export default Stars;
