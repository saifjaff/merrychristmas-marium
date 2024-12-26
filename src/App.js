import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [showMarium, setShowMarium] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMarium(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <div id="marium-content" style={{ opacity: showMarium ? 1 : 0 }}>
        <div className="message">Happy Secret Santa Marium! 🎅</div>
        <div className="gifts">
          <img src="/images/gift1.png" alt="Gift 1" className="gift" />
          <img src="/images/gift2.png" alt="Gift 2" className="gift" />
        </div>
      </div>

      <div id="alina-content" style={{ opacity: showMarium ? 0 : 1 }}>
        <div className="message">Happy Secret Santa Alina! 🎅</div>
        <div className="gifts">
          <img src="/images/gift1.png" alt="Gift 1" className="gift" />
          <img src="/images/gift2.png" alt="Gift 2" className="gift" />
        </div>
      </div>
    </div>
  );
}

export default App;