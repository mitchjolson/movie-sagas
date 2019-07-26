import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component {

    // Renders the entire app on the DOM
    render() {
        return (
            <>
            <h3>{this.props.item.title}</h3>
            <li><img onClick={this.props.handleClick} src={this.props.item.poster} alt={this.props.item.title}/></li>
            <p>{this.props.item.description}</p>
            </>
        );
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStoreOnProps)(MovieList);
