import './App.css';

import { Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path='/'>
          <Header />
          <Main />
          <Footer />
        </Route>

        <Route path='/movies'></Route>

        <Route path='/saved-movies'></Route>

        <Route path='/profile'></Route>

        <Route path='/signin'></Route>

        <Route path='/signup'>
          <Register />
        </Route>

        <Route path='*'> <NotFoundPage /> </Route>

      </Switch>
    </div>
  );
}

export default App;
