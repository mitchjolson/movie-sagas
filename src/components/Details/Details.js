import React, { Component } from 'react';
import { connect } from 'react-redux';


class Details extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_GENRES', payload: this.props.reduxStore.details.id });
        console.log('mounted, reduxStore is:', this.props.reduxStore.details)
    }

    handleGoHome = () => {
        this.props.history.push('/');
    }

    handleEdit = () => {
        this.props.history.push('/Edit');
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
                <button onClick={this.handleEdit}>Edit</button>
                <button onClick={this.handleGoHome}>Back to List</button>
            </div>
        );
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStoreOnProps)(Details);
