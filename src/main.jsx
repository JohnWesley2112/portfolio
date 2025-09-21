import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { BrowserRouter, HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  // <BrowserRouter basename='/portfolio/'>
  <HashRouter>
    <StrictMode>
      <App />
    </StrictMode>
    {/* </BrowserRouter> */}
  </HashRouter>
)
