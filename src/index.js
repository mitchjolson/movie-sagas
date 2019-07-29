import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import Axios from 'axios';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies);
    yield takeEvery('FETCH_GENRES', fetchGenres);
    yield takeEvery('EDIT_MOVIE', editMovie);
    yield takeEvery('FETCH_MOVIE', fetchSingleMovie)
}

function* editMovie(action){
    try {
        yield Axios.put(`/movies/${action.payload.id}`, action.payload);
    } catch (error) {
        console.log('Error modifying movie', error)
    }
}

function* fetchMovies() {
    try {
        const response= yield Axios.get('/movies');
        yield put ({type: 'SET_MOVIES', payload: response.data})
    } catch (error) {
        console.log('Error getting movies', error)
    } 
}

function* fetchGenres(action) {
    try {
        const response = yield Axios.get(`/genres/${action.payload}`);
        yield put ({type: 'SET_TAGS', payload: response.data})
    } catch (error) {
        console.log('Error getting genres', error)
    }
}

function* fetchSingleMovie(action) {
    console.log('getting a single movie, action.payload is:', action.payload)
    try {
        const response = yield Axios.get(`/movies/${action.payload}`);
        yield put({ type: 'SET_CLICKED', payload: response.data })
    } catch (error) {
        console.log('Error getting specific movie info', error)
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

const details = (state ={}, action) => {
    switch (action.type) {
        case 'SET_CLICKED':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
