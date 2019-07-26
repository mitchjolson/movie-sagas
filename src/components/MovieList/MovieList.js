import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieListItem from '../MovieListItem/MovieListItem'


class MovieList extends Component {

componentDidMount() {
    this.props.dispatch({ type: 'FETCH_MOVIES' });
}

    // Renders the entire app on the DOM
    render() {
        return (
            <div>
                <h1>Movie List</h1>
                {this.props.reduxStore.movies.map((item, i) => <MovieListItem key={i} item={item} />)}
            </div>
        );
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStoreOnProps)(MovieList);
