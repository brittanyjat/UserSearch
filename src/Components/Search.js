import React from 'react';
import { connect } from 'react-redux';
import { search, handleInput } from '../redux/reducer';

function Search(props) {
    const {
        search,
        loading,
        handleInput,
        searchTerm
    } = props;

    return (
        <div className='search-container'>
            <h1>Search</h1>
            <h4>(Partial searches accepted)</h4>
            <input
                type='text'
                placeholder='ENTER FIRST OR LAST NAME'
                onChange={(e) => handleInput('searchTerm', e.target.value)}
            />
            <i className={loading ? 'fas fa-spinner fa-spin' : ''}></i>
            <button
                className='submit-button'
                onClick={() => search(searchTerm)}>
                {loading ? 'Fetching Results . . .' : 'Submit'}
            </button>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        searchTerm: state.searchTerm
    }
}

export default connect(mapStateToProps, { search, handleInput })(Search);