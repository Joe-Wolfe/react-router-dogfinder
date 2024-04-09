import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DogList from './DogList';
import Duke from './Duke';
import Whiskey from './Whiskey';
import Perry from './Perry';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/dogs" element={<DogList />} />
          <Route path="/dogs/Duke" element={<Duke />} />
          <Route path="/dogs/Whiskey" element={<Whiskey />} />
          <Route path="/dogs/Perry" element={<Perry />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;