import './App.css';
import { Footer, Header } from './components';
import { About, Company, Home, Recruit } from './pages';
import { Switch, Route, Router, BrowserRouter } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route path={"/company"}>
            <Company />
          </Route>
          <Route path={"/recruit"}>
            <Recruit />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
