import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Rockets from './routes/rockets/Rockets';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>

        <Route path="/" element={<Rockets />} />

      </Routes>
    </div>
  );
}

export default App;
