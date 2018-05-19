import React from 'react';
import { connect } from 'react-redux';
import { handleInput, submitPerson, toggleModal, forceLoading } from '../redux/reducer';
import Asterisk from './Asterisk';
import PhotoUpload from './PhotoUpload';

function AddUser(props) {
    const { toggleModal, handleInput, photoLoading, firstName, lastName, address, age, picture, submitPerson, interests, forceLoading } = props;

    return (
        <React.Fragment>
            <form className='add-user-form' id='add-user'>
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

                {
                    photoLoading
                        ? <i className='fas fa-spinner fa-spin'></i>
                        : null

                }
                <img src={picture} alt='user-profile' className='image-preview' />
                <PhotoUpload picture={picture} handleInput={handleInput} forceLoading={forceLoading} />
            </form>


            <div className='submit-cancel-button-container'>
                <button
                    type='submit'
                    disabled={firstName && lastName && address && age ? false : true}
                    form='add-user'
                    onClick={(e) => submitPerson({ firstName: firstName, lastName: lastName, address: address, age: age, interests: interests, picture: picture })}>
                    Submit
                </button>
                <button
                    type='cancel'
                    form='add-user' 
                    >Cancel</button>
            </div>
        </React.Fragment>
    )
}

let mapStateToProps = (state) => {
    return {
        firstName: state.firstName,
        lastName: state.lastName,
        address: state.address,
        age: state.age,
        interests: state.interests,
        picture: state.picture,
        photoLoading: state.photoLoading
    }
}

export default connect(mapStateToProps, { handleInput, submitPerson, toggleModal, forceLoading })(AddUser);
