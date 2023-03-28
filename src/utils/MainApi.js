class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.json()); // `Ошибка ${res.status}`
    // return Promise.reject(res.status);
  }

  register({ name, email, password }) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    }).then(this._checkResponse);
  };

  authorize({ email, password }) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    }).then(this._checkResponse)
  };

  getContent(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`
      }
    }).then(this._checkResponse)
  }

  updateProfile({ name, email }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email })
    }).then(this._checkResponse);
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: {
        authorization: `${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      }
    }).then(this._checkResponse);
  }

  likeFilm(film) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        authorization: `${localStorage.getItem('jwt')}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(film)
    }).then(this._checkResponse);
  }

  cancelLikeFilm(filmId) {
    return fetch(`${this._baseUrl}/movies/${filmId}`, {
      method: 'DELETE',
      headers: {
        authorization: `${localStorage.getItem('jwt')}`,
        "Content-Type": "application/json"
      },
    }).then(this._checkResponse);
  }
}

const mainApi = new MainApi({
  // baseUrl: 'https://api.polina.students.nomoredomains.rocks',
  baseUrl: 'http://localhost:3001',
});

export default mainApi;