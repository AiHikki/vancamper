import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/CustomButton';

const HomePage = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/catalog');
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-semibold mb-4">Explore the Best Campers and Vans</h1>
        <p className="text-xl font-normal">Discover the perfect vehicle for your next adventure</p>
      </div>

      <div className="w-full flex items-center justify-center gap-6 mb-6">
        <img src="/images/hero-image.png" alt="Camper" className="rounded-lg h-[550px]" />
        <img src="/images/hero-image-2.png" alt="Camper" className="rounded-lg h-[550px]" />
      </div>

      <CustomButton handleClick={handleRedirect} otherStyles="px-10 mb-16">
        Browse Catalog
      </CustomButton>

      <div className="flex gap-2 items-center">
        <span className="text-gray-300 text-sm items-center">Developed by</span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/AiHikki"
          className="font-mono text-sm"
        >
          ai_hikki
        </a>
      </div>
    </div>
  );
};

export default HomePage;
