// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <>

//   \bookmarks\  </>
//   );
// }

// export default App;


//Lesson-48
import './App.css';
import Content from './lesson-48/Content';
import { useState, createContext } from 'react'

export const ThemeContext = createContext()

console.log(ThemeContext);

function App() {
  const [theme, setTheme] = useState('Dark')
  const toggleTheme = () => {
    setTheme(theme === 'Dark' ? 'Light' : 'Dark')
  }
  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: 20 }}>
        <button onClick={toggleTheme}>
          Toggle Theme
        </button>
        <Content />
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
