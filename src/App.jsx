import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DecisionForm from './components/DecisionForm';
import History from './pages/History';
import Reflect from './components/Reflect';
import Navbar from './components/Navbar';

const App = () => (
  <Router>
    <div className="max-w-2xl mx-auto p-4">
      <Navbar>
      <Routes>
        <Route path="/" element={<DecisionForm />} />
        <Route path="/history" element={<History />} />
        <Route path="/reflect/:id" element={<Reflect />} />
      </Routes>
      </Navbar>
    </div>
  </Router>
);

export default App;
