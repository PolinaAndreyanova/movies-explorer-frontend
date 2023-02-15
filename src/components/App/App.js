import './App.css';

import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import Register from '../Register/Register';
import Login from '../Login/Login';

import NotFoundPage from '../NotFoundPage/NotFoundPage';

import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Navigation from '../Navigation/Navigation';

function App() {
  const history = useHistory();

  const [currentUser, setCurrentUser] = useState({});

  const [movies, setMovies] = useState([]);
  const [searchingFilm, setSearchingFilm] = useState(null);
  const [filterMovies, setFilterMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  // const [filterChecboxMovies, setFilterChecboxMovies] = useState([]);

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const [isNavOpen, setNavOpen] = useState(false);

  const handleMenuClick = () => {
    setNavOpen(true);
  }

  const handleLikeFilm = (film) => {
    console.log(savedMovies);
    const isLiked = savedMovies.some(i => {
      if (i.movieId === film.movieId) {
        film._id = i._id;
        return true;
      }
    });
    console.log(film);
    (!isLiked) ?
      mainApi.likeFilm(film)
        .then((newFilm) => {
          setSavedMovies([...savedMovies, newFilm])
        })
        .catch(err => console.log(err)) :

      mainApi.cancelLikeFilm(film._id)
        .then((newFilm) => {
          setSavedMovies(savedMovies.filter(c => c._id !== newFilm._id))
        })
        .catch(err => console.log(err));
  }

  const handleRegister = ({ name, email, password }) => {
    mainApi.register({ name, email, password })
      .then((data) => {
        if (data) {
          setLoggedIn(true);
          setCurrentUser(data);
          history.push('/movies');
        }
      })
      .catch(err => console.log(err));
  };

  const handleAuthenticate = (data) => {
    localStorage.setItem('jwt', data.jwt)
    setLoggedIn(true);
    history.push('/movies');
  }

  const handleLogin = ({ email, password }) => {
    mainApi.authorize({ email, password })
      .then((data) => {
        if (data.jwt) {
          handleAuthenticate(data);
        }
      })
      .catch(err => console.log(err));
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('jwt');
  };

  const handleUpdateProfile = ({ name, email }) => {
    mainApi.updateProfile({ name, email })
      .then((data) => {
        setCurrentUser(data);
      })
      .catch(err => console.log(err));
  }

  const getAllMovies = () => {
    moviesApi.getMovies()
      .then((data) => {
        setMovies(data);
      })
      .catch(err => console.log(err));
  }

  const getSavedMovies = () => {
    mainApi.getMovies()
      .then((data) => {
        setSavedMovies(data);
      })
      .catch(err => console.log(err));
  }

  const handleSearchFilm = (film) => {
    setSearchingFilm(film);

    let newFilterMovies = [];

    movies.forEach((movie) => {
      if (movie.nameRU.toLowerCase().includes(film.toLowerCase())) newFilterMovies.push(movie);
    })

    setFilterMovies(newFilterMovies);
  }

  const handleFilterShortFilms = (isChecked) => {
    if (isChecked) {
      let newFilterMovies = [];

      filterMovies.forEach((movie) => {
        if (movie.duration <= 40) newFilterMovies.push(movie);
      })

      setFilterMovies(newFilterMovies);
    } else {
      handleSearchFilm(searchingFilm);
    }
  }

  const handleTokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.getContent(jwt)
        .then((data) => {
          if (data) {
            setLoggedIn(true);
            setCurrentUser(data);
            history.push('/movies');
          }
        })
        .catch(err => console.log(err));
    }
  };

  useEffect(() => {
    handleTokenCheck();
    getAllMovies();
    getSavedMovies();
  }, []);

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path='/'>
            <Header loggedIn={isLoggedIn} onMenuClick={handleMenuClick} />
            <Main />
            <Footer />
          </Route>

          <ProtectedRoute
            path='/movies'
            loggedIn={isLoggedIn}
            components={
              <>
                <Header loggedIn={isLoggedIn} onMenuClick={handleMenuClick} />
                <Movies 
                  loading={isLoading} 
                  onSubmit={handleSearchFilm} 
                  movies={filterMovies} 
                  filterShortFilms={handleFilterShortFilms}
                  savedMovies={savedMovies}
                  onFilmLike={handleLikeFilm}
                />
                <Footer />
              </>
            }
          />

          <ProtectedRoute
            path='/saved-movies'
            loggedIn={isLoggedIn}
            components={
              <>
                <Header loggedIn={isLoggedIn} onMenuClick={handleMenuClick} />
                <SavedMovies 
                  loading={isLoading} 
                  onSubmit={handleSearchFilm} 
                  movies={filterMovies} 
                  filterShortFilms={handleFilterShortFilms}
                  savedMovies={savedMovies}
                  onFilmLike={handleLikeFilm}
                />
                <Footer />
              </>
            }
          />

          <ProtectedRoute
            path='/profile'
            loggedIn={isLoggedIn}
            components={
              <>
                <Header loggedIn={isLoggedIn} onMenuClick={handleMenuClick} />
                <Profile logout={handleLogout} onUpdate={handleUpdateProfile} />
              </>
            }
          />

          <Route path='/signin'>
            <Login onLogin={handleLogin} />
          </Route>

          <Route path='/signup'>
            <Register onRegister={handleRegister} />
          </Route>

          <Route path='*'>
            <NotFoundPage />
          </Route>

        </Switch>

        <Navigation
          isOpen={isNavOpen}
          onClose={() => setNavOpen(false)}
        />
      </CurrentUserContext.Provider>
    </div >
  );
}

export default App;
