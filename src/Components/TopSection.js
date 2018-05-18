import React from 'react';
import Search from './Search';
import AddUser from './AddUser';
import { connect } from 'react-redux';
import { toggleModal } from '../redux/reducer';

function TopSection(props) {
    return (
        <div className='top-section-main-container'>
            <div className='search-add-button-container'>
                <button onClick={() => props.toggleModal()}>Search</button>
                <button onClick={() => props.toggleModal()}>Add User</button>
            </div>
            {
                props.searchDisplay
                    ? <Search />
                    : <AddUser />
            }
        </div>
    )
}

var mapStateToProps = (state) => {
    return {
        searchDisplay: state.searchDisplay
    }
}

export default connect(mapStateToProps, { toggleModal })(TopSection)