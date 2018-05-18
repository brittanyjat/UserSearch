import React from 'react';
import { connect } from 'react-redux';
import { handleInput, submitPerson, toggleModal } from '../redux/reducer';
import Asterisk from './Asterisk';

function AddUser(props) {
    const { toggleModal, handleInput, firstName, lastName, address, age, picture, submitPerson, interests } = props;
    return (
        <React.Fragment>
            <form className='add-user-form'>
                <h1><Asterisk />Required Field</h1>
                <input
                    required
                    placeholder='First Name*'
                    type='text'
                    onChange={(e) => handleInput('firstName', e.target.value)} />

                <input
                    required
                    placeholder='Last Name*'
                    type='text'
                    onChange={(e) => handleInput('lastName', e.target.value)} />

                <input
                    required
                    placeholder='Address*'
                    type='text' onChange={(e) => handleInput('address', e.target.value)} />

                <input
                    required
                    placeholder='Age*'
                    type='number'
                    onChange={(e) => handleInput('age', e.target.value)} />

                <input
                    placeholder='Picture'
                    type='text'
                    onChange={(e) => handleInput('picture', e.target.value)} />
            </form>
            <div className='submit-cancel-button-container'>
                <button onClick={(e) => submitPerson({ firstName: firstName, lastName: lastName, address: address, age: age, interests: interests, picture: picture })}>Submit</button>
                <button onClick={() => toggleModal()}>Cancel</button>
            </div>
        </React.Fragment>
    )
}

var mapStateToProps = (state) => {
    return {
        firstName: state.firstName,
        lastName: state.lastName,
        address: state.address,
        age: state.age,
        interests: state.interests,
        picture: state.picture
    }
}

export default connect(mapStateToProps, { handleInput, submitPerson, toggleModal })(AddUser);



// {
//     searching && results.length === 0
//         ? <AddUser noResult={true} />
//         : null
// }