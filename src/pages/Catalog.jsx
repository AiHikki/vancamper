import { useEffect, useState } from 'react';
import FiltersForm from '../components/FiltersForm';
import { useDispatch, useSelector } from 'react-redux';
import CardList from '../components/CardList';
import toast from 'react-hot-toast';
import { fetchAdverts } from '../redux/adverts/operations';
import LoadMoreButton from '../components/LoadMoreButton';
import { selectIsLoading, selectHasMore } from '../redux/adverts/selectors';

const Catalog = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const isLoading = useSelector(selectIsLoading);
  const hasMore = useSelector(selectHasMore);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    dispatch(fetchAdverts({ page, limit: 4 }))
      .unwrap()
      .catch(() => toast.error('Oops... Something went wrong.', { id: 'error' }));
  }, [dispatch, page]);

  return (
    <div className="flex gap-16">
      <div className="min-w-[360px] ">
        <div className="flex flex-col w-[360px]">
          <FiltersForm />
        </div>
      </div>

      <div className="w-full">
        <CardList />
        {hasMore && !isLoading && (
          <div className="w-full flex justify-center mt-[50px]">
            <LoadMoreButton handleClick={handleLoadMore} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
