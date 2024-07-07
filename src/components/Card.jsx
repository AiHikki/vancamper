import { formatPrice } from '../utils';
import { FaStar } from 'react-icons/fa6';
import icons from '../assets/icons.svg';
import Category from './Category';
import CustomButton from './CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../redux/modal/slice';
import { useSearchParams } from 'react-router-dom';
import { addToFavorites, removeFromFavorites } from '../redux/adverts/slice';
import { selectFavorites } from '../redux/adverts/selectors';

const Card = ({
  data: {
    adults,
    description,
    details,
    engine,
    gallery,
    location,
    name,
    price,
    rating,
    reviews,
    transmission,
    _id,
    children,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  },
}) => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.find(advert => advert._id === _id);

  const handleOpenModal = () => {
    setSearchParams({ id: _id });
    dispatch(openModal());
  };

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites({ _id }));
    } else {
      dispatch(
        addToFavorites({
          adults,
          description,
          details,
          engine,
          gallery,
          location,
          name,
          price,
          rating,
          reviews,
          transmission,
          _id,
          children,
          form,
          length,
          width,
          height,
          tank,
          consumption,
        })
      );
    }
  };

  return (
    <li className="border-[1px] border-primary border-opacity-20 p-6 rounded-[20px] flex gap-6">
      <img
        src={gallery?.length > 0 ? gallery[0] : ''}
        alt={name}
        className="w-[290px] h-[310px] rounded-[10px] object-cover bg-snow-white"
      />

      <div className="w-full max-w-[525px]">
        <div className="mb-2 flex justify-between items-center">
          <p className="font-semibold text-primary text-2xl">{name}</p>
          <div className="flex items-center gap-[10px]">
            <span className="font-semibold text-primary text-2xl">&euro;{formatPrice(price)}</span>

            <button
              onClick={handleClick}
              className="border-none bg-transparent flex items-center justify-center"
            >
              <svg className="w-6 h-6">
                <use href={isFavorite ? `${icons}#heart-pressed` : `${icons}#heart`}></use>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-1">
            <FaStar color="#FFC531" size={16} />
            <span className="underline underline-offset-4 text-primary font-normal text-base">
              {rating}({reviews?.length} Reviews)
            </span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 fill-primary">
              <use href={`${icons}#map-pin`}></use>
            </svg>
            <span className="text-primary font-normal text-base">{location}</span>
          </div>
        </div>

        <p className="font-normal text-slate-blue text-base truncate mb-6">{description}</p>

        <ul className="flex flex-wrap gap-2 h-[96px] truncate mb-6">
          <Category icon="transmission" title={transmission} />
          <Category icon="adults" title={`${adults} adults`} />
          <Category icon="petrol" title={engine} />
          {Boolean(details?.airConditioner) && <Category icon="airConditioner" title="AC" />}
          {Boolean(details?.kitchen) && <Category icon="kitchen" title="kitchen" />}
          {Boolean(details?.beds) && <Category icon="beds" title={`${details.beds} beds`} />}

          {Boolean(details?.toilet) && <Category icon="toilet" title="toilet" />}
          {Boolean(details?.shower) && <Category icon="shower" title="shower" />}
        </ul>

        <CustomButton otherStyles="w-[166px]" handleClick={handleOpenModal}>
          Show more
        </CustomButton>
      </div>
    </li>
  );
};

export default Card;
