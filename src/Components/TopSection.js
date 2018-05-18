import React from 'react';
import Search from './Search';
import AddUser from './AddUser';
import { connect } from 'react-redux';
import { toggleModal } from '../redux/reducer';

function TopSection(props) {
    const { modalDisplay } = props;
    return (
        <div className='top-section-main-container'>
            <div className='search-add-button-container'>
                <button
                    style={{ backgroundColor: modalDisplay !== 'search' ? '#465761' : null }}                
                    onClick={() => props.toggleModal('search')}>
                    Search
                </button>

                <button
                    style={{ backgroundColor: modalDisplay !== 'add' ? '#465761' : null }}
                    onClick={() => props.toggleModal('add')}>
                    Add User
                </button>
            </div>
            {
                modalDisplay === 'search'
                    ? <Search />
                    : <AddUser />
            }
        </div>
    )
}

var mapStateToProps = (state) => {
    return {
        modalDisplay: state.modalDisplay
    }
}

export default connect(mapStateToProps, { toggleModal })(TopSection)