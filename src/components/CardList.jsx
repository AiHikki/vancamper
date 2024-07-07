import { useSelector } from 'react-redux';
import Card from './Card';
import { selectAdverts } from '../redux/adverts/selectors';

const CardList = () => {
  const items = useSelector(selectAdverts);

  return (
    <ul className="flex flex-col gap-8">
      {items?.map((item, i) => (
        <Card key={i} data={item} />
      ))}
    </ul>
  );
};

export default CardList;
