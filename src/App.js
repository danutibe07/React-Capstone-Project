import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cryptos from './components/cryptos';
import Details from './components/details';
import Header from './components/Header';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Cryptos />} />
      <Route path="details" element={<Details />} />
    </Routes>
  </Router>
);

export default App;
