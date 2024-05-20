import './assets/css/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className='app-container'>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
