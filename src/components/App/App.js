import './App.css';

import { Switch, Route, useHistory, useLocation, Redirect } from 'react-router-dom';
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
  const { pathname } = useLocation();
  const history = useHistory();

  const [currentUser, setCurrentUser] = useState({});

  const [movies, setMovies] = useState([]);
  const [searchingFilm, setSearchingFilm] = useState(localStorage.getItem('searchingFilm'));
  const [filterMovies, setFilterMovies] = useState(JSON.parse(localStorage.getItem('filterMovies')));
  const [filterSavedMovies, setFilterSavedMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isCheckboxChecked, setCheckboxChecked] = useState(false);

  const [isNavOpen, setNavOpen] = useState(false);

  const [error, setError] = useState(null);

  const handleMenuClick = () => {
    setNavOpen(true);
  }

  const handleLikeFilm = (film) => {
    const isLiked = savedMovies.some(i => {
      if (i.movieId === film.movieId) {
        film._id = i._id;
        return true;
      }
    });

    (!isLiked) ?
      mainApi.likeFilm(film)
        .then((newFilm) => {
          setSavedMovies([...savedMovies, newFilm]);
          setFilterSavedMovies([...savedMovies, newFilm]);
        })
        .catch(err => console.log(err)) :

      mainApi.cancelLikeFilm(film._id)
        .then((newFilm) => {
          setSavedMovies(savedMovies.filter(c => c._id !== newFilm._id));
          setFilterSavedMovies(savedMovies.filter(c => c._id !== newFilm._id));
        })
        .catch(err => console.log(err));

    // getSavedMovies();
  }

  const handleRegister = ({ name, email, password }) => {

    mainApi.register({ name, email, password })
      .then((data) => {
        if (data) {
          handleLogin({ email, password})
        }
      })
      .catch(data => data.then(err => setError(err.message)));
  };

  const handleAuthenticate = (data) => {
    mainApi.getContent(data.jwt)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch(data => data.then(err => setError(err.message)));

    localStorage.setItem('jwt', data.jwt)
    setLoggedIn(true);

    getAllMovies();
    getSavedMovies();

    history.push('/movies');
  }

  const handleLogin = ({ email, password }) => {
    mainApi.authorize({ email, password })
      .then((data) => {
        if (data.jwt) {
          handleAuthenticate(data);
        }
      })
      .catch(data => data.then(err => setError(err.message)));
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setCurrentUser({});

    localStorage.removeItem('jwt');
    localStorage.removeItem('movies');
    localStorage.removeItem('searchingFilm');
    localStorage.removeItem('filterMovies');
    localStorage.removeItem('isCheckboxChecked');

    localStorage.removeItem('isSavedSearched');
    localStorage.removeItem('isSearched');
  };

  const handleUpdateProfile = ({ name, email }) => {
    mainApi.updateProfile({ name, email })
      .then((data) => {
        setCurrentUser(data);
      })
      .catch(data => data.then(err => setError(err.message)));
  }

  const getAllMovies = () => {
    moviesApi.getMovies()
      .then((data) => {
        setMovies(data);
        localStorage.setItem('movies', JSON.stringify(data));
      })
      .catch(err => console.log(err));
  }

  const getSavedMovies = () => {
    mainApi.getMovies()
      .then((data) => {
        setSavedMovies(data);
        setFilterSavedMovies(data);
      })
      .catch(err => console.log(err));
  }

  const handleSearchFilm = (film, isSaved) => {
    setSearchingFilm(film);
    let newFilterMovies = [];

    if (isSaved) {
      localStorage.setItem('isSavedSearched', true);

      savedMovies.forEach((movie) => {
        if (movie.nameRU.toLowerCase().includes(film.toLowerCase())) newFilterMovies.push(movie);
      })

      setFilterSavedMovies(newFilterMovies);
    } else {
      localStorage.setItem('isSearched', true);
      localStorage.setItem('searchingFilm', film);

      movies.forEach((movie) => {
        if (movie.nameRU.toLowerCase().includes(film.toLowerCase())) newFilterMovies.push(movie);
      })
      // console.log(movies)
      setFilterMovies(newFilterMovies);
      localStorage.setItem('filterMovies', JSON.stringify(newFilterMovies));
    }
  }

  const handleFilterShortFilms = (isChecked, isSaved) => {
    // setCheckboxChecked(isChecked);
    // localStorage.setItem('isCheckboxChecked', isChecked);

    if (isChecked) {
      let newFilterMovies = [];

      if (isSaved) {
        filterSavedMovies.forEach((movie) => {
          if (movie.duration <= 40) newFilterMovies.push(movie);
        })

        setFilterSavedMovies(newFilterMovies);
      } else {
        setCheckboxChecked(isChecked);
        localStorage.setItem('isCheckboxChecked', isChecked);

        filterMovies.forEach((movie) => {
          if (movie.duration <= 40) newFilterMovies.push(movie);
        })

        setFilterMovies(newFilterMovies);
        localStorage.setItem('filterMovies', JSON.stringify(newFilterMovies));
      }
    } else {
      if (isSaved) {
        setFilterSavedMovies(savedMovies);
      } else {
        setCheckboxChecked(isChecked);
        localStorage.setItem('isCheckboxChecked', isChecked);
        console.log(searchingFilm)
        handleSearchFilm(searchingFilm);
      }
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
            history.push(pathname !== '/' ? pathname : '/movies');
          }
        })
        .catch(err => console.log(err));

      getSavedMovies();
      setMovies(JSON.parse(localStorage.getItem('movies')));
    }
  };

  useEffect(() => {
    handleTokenCheck();
  }, []);

  useEffect(() => {
    setError('');
    if (isLoggedIn) getSavedMovies();
  }, [pathname]);

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
                  movies={JSON.parse(localStorage.getItem('filterMovies'))}
                  filterShortFilms={handleFilterShortFilms}
                  savedMovies={savedMovies}
                  onFilmLike={handleLikeFilm}
                  isCheckboxChecked={JSON.parse(localStorage.getItem('isCheckboxChecked'))}
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
                  // checkSavedMovies={}
                  savedMovies={savedMovies}
                  filterSavedMovies={filterSavedMovies}
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
                <Profile logout={handleLogout} onUpdate={handleUpdateProfile} error={error} />
              </>
            }
          />

          <Route path='/signin'>
            {!isLoggedIn ? <Login onLogin={handleLogin} error={error} /> : <Redirect to='/' />}
            {/* <Login onLogin={handleLogin} /> */}
          </Route>

          <Route path='/signup'>
            {!isLoggedIn ? <Register onRegister={handleRegister} error={error} /> : <Redirect to='/' />}
            {/* <Register onRegister={handleRegister} /> */}
          </Route>

          <Route path='*'>
            <NotFoundPage goBack={() => history.goBack()} />
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
