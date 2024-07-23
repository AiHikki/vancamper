import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsOpen } from '../redux/modal/selectors';
import { closeModal } from '../redux/modal/slice';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { formatPrice } from '../utils';
import { FaStar } from 'react-icons/fa6';
import icons from '../assets/icons.svg';
import clsx from 'clsx';
import Features from './Features';
import Reviews from './Reviews';

Modal.setAppElement('#root');

const CamperDetailsModal = ({
  details: {
    name,
    rating,
    reviews,
    location,
    price,
    gallery,
    description,
    details,
    engine,
    transmission,
    length,
    width,
    tank,
    height,
    consumption,
    form,
    adults,
  },
}) => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsOpen);
  const [isActive, setIsActive] = useState({
    features: false,
    reviews: false,
  });

  const toggleActiveLink = key => {
    setIsActive({
      features: key === 'features',
      reviews: key === 'reviews',
    });
  };

  const handleCloseModal = () => {
    setIsActive({ features: false, reviews: false });
    dispatch(closeModal());
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        style={{
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            width: 982,
            minHeight: 720,
            borderRadius: 20,
            padding: 40,
          },
          overlay: {
            backgroundColor: '#11121366',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
        }}
      >
        <div className="flex items-center justify-between mb-2">
          <p className="font-semibold text-primary text-2xl">{name}</p>
          <button
            onClick={handleCloseModal}
            className="border-none bg-transparent flex items-center justify-center"
          >
            <IoClose color="#101828" size={32} />
          </button>
        </div>

        <div className="flex items-center gap-4 mb-4">
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

        <div className="font-semibold text-primary text-2xl mb-6">&euro;{formatPrice(price)}</div>

        <div className="flex gap-4 mb-6 ">
          {gallery?.length > 1 &&
            gallery.map((url, i) => (
              <img
                key={i}
                src={url}
                alt={name}
                className="w-[290px] h-[310px]  rounded-[10px] object-cover bg-snow-white"
              />
            ))}
        </div>

        <p className="font-normal text-slate-blue text-base mb-11">{description}</p>

        <div>
          <div className="flex gap-10 items-center">
            <a
              href="#features"
              className={clsx(
                'text-primary font-semibold text-xl after:transition-all pb-6',
                isActive.features &&
                  'relative after:absolute after:w-full after:h-1 after:bg-secondary-100 after:bottom-[-2px] after:left-0  after:rounded-xl'
              )}
              onClick={() => toggleActiveLink('features')}
            >
              Features
            </a>

            <a
              href="#reviews"
              className={clsx(
                'text-primary font-semibold text-xl after:transition-all pb-6',
                isActive.reviews &&
                  'relative after:absolute after:w-full after:h-1 after:bg-secondary-100 after:bottom-[-2px] after:left-0  after:rounded-xl'
              )}
              onClick={() => toggleActiveLink('reviews')}
            >
              Reviews
            </a>
          </div>
          <hr />
        </div>

        {isActive.features && (
          <Features
            features={{
              details,
              engine,
              transmission,
              length,
              width,
              tank,
              height,
              consumption,
              form,
              adults,
            }}
          />
        )}
        {isActive.reviews && <Reviews reviews={reviews} />}
      </Modal>
    </>
  );
};

export default CamperDetailsModal;
