import icons from '../assets/icons.svg';
import { capitalizeFirstLetter } from '../utils';

const Category = ({ title, icon }) => {
  return (
    <li className="flex gap-2 items-center justify-center bg-foggy-white h-11 px-[18px] rounded-full">
      <svg className="w-5 h-5">
        <use href={`${icons}#${icon}`}></use>
      </svg>
      <span className="text-primary font-medium text-base">{capitalizeFirstLetter(title)}</span>
    </li>
  );
};

export default Category;
