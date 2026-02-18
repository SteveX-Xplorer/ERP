import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Dashbaord from './pages/Dashboard';

function App(){
  return(
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashbaord />} />
            <Route path="/login" element={<Login />} /> 
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App
