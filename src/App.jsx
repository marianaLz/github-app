import { Route, Routes } from 'react-router-dom';

import UserSearch from './pages/UserSearch';

function App() {
  return (
    <Routes>
      <Route path='/users' element={<UserSearch />} />
    </Routes>
  );
}

export default App;
