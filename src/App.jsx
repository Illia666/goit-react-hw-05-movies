import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Loader = lazy(() => import('shared/components/Loader/Loader'));
const Layout = lazy(() => import('modules/components/Layout/Layout'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MoviesDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('modules/components/Cast/Cast'));
const Reviews = lazy(() => import('modules/components/Reviews/Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};