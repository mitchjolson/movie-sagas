import React, { Component } from 'react';
import { connect } from 'react-redux';


class Edit extends Component {

    componentDidMount() {
        console.log('getting genre details for id:', this.props.reduxStore.details.id)
        this.props.dispatch({ type: 'FETCH_GENRES', payload: this.props.reduxStore.details.id });
    }

    handleGoHome = () => {
        this.props.history.push('/Details');
    }

    handleSave = () => {
        
    }

    // Renders the entire app on the DOM
    render() {
        return (
            <div>
                <h1>{this.props.reduxStore.details.title}</h1>
                <img src={this.props.reduxStore.details.poster} alt={this.props.reduxStore.details.description} />
                <br/>
                <label>Title</label>
                <br/>
                <input type="text" value={this.props.reduxStore.details.title} onChange={this.handleChange}/>
                <br/>
                <label>Description</label>
                <br/>
                <textarea value={this.props.reduxStore.details.description}/>
                <br/>
                <button onClick={this.handleGoHome}>Cancel</button>
                <button onClick={this.handleSave}>Save</button>
            </div>
        );
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStoreOnProps)(Edit);
