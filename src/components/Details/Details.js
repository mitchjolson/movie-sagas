import React, { Component } from 'react';
import { connect } from 'react-redux';

// Onclick on the MovieListItem will dispatch the clicked movie data to a saga, which will save the data in clickedReducer (redux store)
// It will push /details to history to load the details component with data from the clickedReducer


class Details extends Component {

    componentDidMount() {
        console.log('getting genre details for id:', this.props.reduxStore.details.id)
        this.props.dispatch({ type: 'FETCH_GENRES', payload: this.props.reduxStore.details.id });
    }

    // Renders the entire app on the DOM
    render() {
        return (
            <div>
                <h1>{this.props.reduxStore.details.title}</h1>
                <img src={this.props.reduxStore.details.poster} alt={this.props.reduxStore.details.description} />
                <ul>
                    <h3>Genres:</h3>
                    {this.props.reduxStore.genres.map((item, i) => <li key={i}>{item.name}</li> )}
                </ul>
            </div>
        );
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStoreOnProps)(Details);
