import React from 'react';
import { connect } from 'react-redux';
import { search } from '../redux/reducer';

function Search(props) {
    return (
        <div>
            <h1>Search</h1>
            <input type='text' onChange={(e) => props.search(e.target.value)} />
        </div>
    )
}
export default connect(null, { search })(Search);