import toast, { Toaster } from 'react-hot-toast';
import NavBar from './NavBar';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../redux/adverts/selectors';
import { useEffect } from 'react';

const Layout = ({ children }) => {
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    const toastId =
      isLoading &&
      toast.loading('Loading data, please wait', { id: Math.random(), duration: 4000 });
    !isLoading && toast.dismiss(toastId);
  }, [isLoading]);

  return (
    <div className="w-full max-w-[1440px]  h-full bg-white px-16 mx-auto pb-16">
      <header className="border-b-[1px] border-b-slate-100 shadow-sm px-6 mb-10">
        <NavBar />
      </header>
      <main>{children}</main>
      <Toaster position="top-center" />
    </div>
  );
};

export default Layout;
