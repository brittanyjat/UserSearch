import React from 'react';
import { connect } from 'react-redux';
import { search, reset } from '../redux/reducer';

function Search(props) {
    const {
        reset,
        search,
        loading
    } = props;
    return (
        <div className='search-container'>
            <h1>Search</h1>
            <input
                type='text'
                placeholder='ENTER FIRST OR LAST NAME'
                onChange={(e) => e.target.value.length > 0 ? search(e.target.value) : reset()} />
            <i className={loading ? 'fas fa-spinner fa-spin' : ''}></i>
            <button className='submit-button'>{loading ? 'Fetching Results . . .' : 'Submit'}</button>
        </div>
    )
}


export default connect(null, { search, reset })(Search);