import { useSelector } from 'react-redux';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import { selectFavorites } from '../redux/adverts/selectors';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div className="flex gap-16">
      <div className="flex flex-col w-[360px] flex-shrink-0 border-r-[1px] transition-all">
        <p className="text-slate-blue font-normal text-base pt-6 mb-4">
          You can bookmark your preferred advertisements. To do so, simply click on the heart icon
          on the advertisement card.
        </p>

        <Link to="/catalog" className="text-base font-normal text-secondary-100">
          Back to Catalog
        </Link>
      </div>

      <div className="w-full">
        {favorites?.length === 0 && (
          <p className="text-slate-blue font-normal text-base text-center">
            It looks like you haven&apos;t added any advertisements yet.
          </p>
        )}

        {favorites?.length > 0 && (
          <ul className="flex flex-col gap-8">
            {favorites?.map((item, i) => (
              <Card key={i} data={item} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Favorites;
