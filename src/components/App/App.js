import './App.css';

import { Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Movies from '../Movies/Movies';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path='/'>
          <Header loggedIn={false} />
          <Main />
          <Footer />
        </Route>

        <Route path='/movies'>
          <Header loggedIn={true} />
          <Movies loading={false} />
          <Footer />
        </Route>

        <Route path='/saved-movies'></Route>

        <Route path='/profile'></Route>

        <Route path='/signin'>
          <Login />
        </Route>

        <Route path='/signup'>
          <Register />
        </Route>

        <Route path='*'> <NotFoundPage /> </Route>

      </Switch>
    </div>
  );
}

export default App;
