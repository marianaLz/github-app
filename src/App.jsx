import { Route, Routes } from 'react-router-dom';

import RepositorySearch from './pages/RepositorySearch';
import UserSearch from './pages/UserSearch';

function App() {
  return (
    <Routes>
      <Route path='/repositories' element={<RepositorySearch />} />
      <Route path='/users' element={<UserSearch />} />
    </Routes>
  );
}

export default App;
