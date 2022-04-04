import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Rockets from './routes/rockets/Rockets';
import Profile from './routes/profile/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
