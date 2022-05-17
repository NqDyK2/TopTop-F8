import './App.css';
import { useRef } from 'react';
import Videos from './Videos';

function App() {
  const videoRef = useRef()
  
  const handlePlay = () => {
    videoRef.current.play()
  }
  const handlePause = () => {
    videoRef.current.pause()
  }

  return (
    <div className="App">
        <Videos ref={videoRef} />
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default App;
