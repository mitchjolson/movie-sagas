import React, { Component } from 'react';
import { connect } from 'react-redux';

// Onclick on the MovieListItem will dispatch the clicked movie data to a saga, which will save the data in clickedReducer (redux store)
// It will push /details to history to load the details component with data from the clickedReducer


class Details extends Component {

    // Renders the entire app on the DOM
    render() {
        return (
            <h1>{this.props.reduxStore.details.title}</h1>
        );
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStoreOnProps)(Details);
