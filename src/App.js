import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { About, Home, Recruit } from './pages';

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
