import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/home';

function Main() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Home />
        } />


      </Routes>
    </Router>
  );
}

export default Main;