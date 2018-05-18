import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search, reset } from '../redux/reducer';

class TopSection extends Component {
    render() {
        const {
            reset,
            search
        } = this.props;
        return (
            <div className='search-container'>
                <h1>Search</h1>
                <h3>Enter the First or Last name of the person you are searching for</h3>
                <input
                    type='text'
                    placeholder='Name'
                    onChange={(e) => e.target.value.length > 0 ? search(e.target.value) : reset()} />
            </div>
        )
    }
}

export default connect(null, { search, reset })(TopSection);