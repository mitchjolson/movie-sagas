import React, { Component } from 'react';
import { connect } from 'react-redux';


class MovieList extends Component {

componentDidMount() {
    this.props.dispatch({ type: 'FETCH_MOVIES' });
}

    // Renders the entire app on the DOM
    render() {
        return (
            <h1>Movie List</h1>
        );
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStoreOnProps)(MovieList);
