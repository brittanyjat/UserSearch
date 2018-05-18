import React from 'react';
import { connect } from 'react-redux';
import { search, reset } from '../redux/reducer';

function Search(props) {
    return (
        <div className='search-container'>
            <h1>Search</h1>
            <input 
                type='text' 
                placeholder='Name'
                onChange={(e) => e.target.value.length > 0 ? props.search(e.target.value) : props.reset()} />
        </div>
    )
}
export default connect(null, { search, reset })(Search);