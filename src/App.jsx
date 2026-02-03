import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import './index.css'
import './App.css'
import Home from './Pages/Home'
import Navbar from './Navbar'
import Footer from './Footer'
import Loader from './Loader' 


function App() {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1400); // 👈 1.4 sec (perfect)

    return () => clearTimeout(timer);
  }, []);

  return (
    

  <div className="bg-[#0b0b0f] text-white min-h-screen overflow-hidden">
    {/* Loader */}
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {/* Main Content */}
      {!loading && (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      )}

      
    </div>
  );
     
  
}

export default App
