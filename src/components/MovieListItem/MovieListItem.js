import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component {



    // Renders the entire app on the DOM
    render() {
        return (
            <li><img src={this.props.item.poster} alt={this.props.item.title}/></li>
        );
    }
}


export default connect()(MovieList);
