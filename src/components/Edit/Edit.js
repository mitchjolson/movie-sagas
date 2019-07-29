import React, { Component } from 'react';
import { connect } from 'react-redux';


class Edit extends Component {

    state = {
        id: this.props.reduxStore.details.id,
        title: this.props.reduxStore.details.title,
        description: this.props.reduxStore.details.description,
    }

    componentDidMount() {
        console.log('getting genre details for id:', this.props.reduxStore.details.id)
        this.props.dispatch({ type: 'FETCH_GENRES', payload: this.props.reduxStore.details.id });
    }

    handleGoHome = () => {
        this.props.history.push('/Details');
    }

    handleSave = () => {
        this.props.dispatch({ type: 'EDIT_MOVIE', payload: this.state });
    }

    handleChangeOne = (event) => {
        console.log(event.target.value, this.state);
        this.setState({ title: event.target.value });
    }

    handleChangeTwo = (event) => {
        console.log(event.target.value, this.state);
        this.setState({ description: event.target.value });
    }

    // Renders the entire app on the DOM
    render() {
        return (
            <div>
                <h3>{this.props.reduxStore.details.title}</h3>
                <img src={this.props.reduxStore.details.poster} alt={this.props.reduxStore.details.description} />
                <br/>
                <label>Title</label>
                <br/>
                <input type="text" value={this.state.title} onChange={(event) => this.handleChangeOne(event)}/>
                <br/><br/>
                <label>Description</label>
                <br/>
                <textarea rows='10' cols='100' value={this.state.description} onChange={(event) => this.handleChangeTwo(event)}/>
                <br/><br/>
                <button onClick={this.handleSave}>Save</button>
                <button onClick={this.handleGoHome}>Cancel</button>
            </div>
        );
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStoreOnProps)(Edit);
