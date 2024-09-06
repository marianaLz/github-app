import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from './components/common/Loader';

const Home = lazy(() => import('./pages/Home'));
const UserSearch = lazy(() => import('./pages/UserSearch'));
const RepositorySearch = lazy(() => import('./pages/RepositorySearch'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/repositories' element={<RepositorySearch />} />
        <Route path='/users' element={<UserSearch />} />
      </Routes>
    </Suspense>
  );
}

export default App;
