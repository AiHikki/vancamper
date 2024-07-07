import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/Catalog'));
const Favorites = lazy(() => import('./pages/Favorites'));

const App = () => {
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;
  return (
    <>
      <Layout>
        <Suspense fallback="Loading...">
          <Routes location={previousLocation || location}>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
};

export default App;
