import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component {

    handleClick = (event) => {
        console.log(this.props.item.id);
        this.props.dispatch({type:'SET_CLICKED', payload: {id: this.props.item.id, title: this.props.item.title, poster: this.props.item.poster, description: this.props.item.description}})
        this.props.goToDetails();
    }

    // Renders the entire app on the DOM
    render() {
        return (
            <>
            <h3>{this.props.item.title}</h3>
            <li><img onClick={this.handleClick} src={this.props.item.poster} alt={this.props.item.title}/></li>
            <p>{this.props.item.description}</p>
            </>
        );
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStoreOnProps)(MovieList);
