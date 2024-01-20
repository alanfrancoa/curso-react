import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MasterDetailPage from './components/MasterDetailPage/MasterDetailPage';
import UserDetail from './components/UserDetail/UserDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MasterDetailPage />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </Router>
  );
}

export default App