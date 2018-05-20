import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInput, submitPerson, forceLoading, reset } from '../redux/reducer';
import Asterisk from './Asterisk';
import PhotoUpload from './PhotoUpload';

class AddUser extends Component {

    handleSubmit = () => {
        let passwordCheck = prompt('Please enter admin password:');
        if (passwordCheck === process.env.REACT_APP_PASSWORD) {
            this.submitUser()
        } else if (passwordCheck === null) {
            
        } else {
            this.handleSubmit()
        }
    }

    submitUser = () => {
        const {
            firstName,
            lastName,
            address,
            age,
            picture,
            interest1,
            interest2,
            interest3,
            interest4,
            submitPerson } = this.props;

        submitPerson({ firstName: firstName, lastName: lastName, address: address, age: age, interests: [interest1, interest2, interest3, interest4], picture: picture })
        alert('User Added')
        document.getElementById('add-user').submit();
    }

    render() {
        const {
            handleInput,
            photoLoading,
            firstName,
            lastName,
            address,
            age,
            picture,
            forceLoading,
            interest1,
            interest2,
            interest3,
            interest4,
            reset } = this.props;

        // if (this.state.password == true) this.submitUser({ firstName: firstName, lastName: lastName, address: address, age: age, interests: [interest1, interest2, interest3, interest4], picture: picture });
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
                        type='number' onChange={(e) => handleInput('age', e.target.value)} />
                    <div>
                        <input
                            required
                            placeholder='Interest*'
                            type='text'
                            onChange={(e) => handleInput('interest1', e.target.value)} />

                        <input
                            required
                            placeholder='Interest*'
                            type='text'
                            onChange={(e) => handleInput('interest2', e.target.value)} />

                        <input
                            required
                            placeholder='Interest*'
                            type='text'
                            onChange={(e) => handleInput('interest3', e.target.value)} />

                        <input
                            required
                            placeholder='Interest*'
                            type='text'
                            onChange={(e) => handleInput('interest4', e.target.value)} />
                    </div>

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
                        disabled={firstName && lastName && address && age && interest1 && interest2 && interest3 && interest4 ? false : true}
                        onClick={() => this.handleSubmit()}>
                        Submit
                </button>
                    <button
                        type='reset'
                        form='add-user'
                        onClick={() => reset()}
                    >Cancel</button>
                </div>
            </React.Fragment>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        firstName: state.firstName,
        lastName: state.lastName,
        address: state.address,
        age: state.age,
        interest1: state.interest1,
        interest2: state.interest2,
        interest3: state.interest3,
        interest4: state.interest4,
        picture: state.picture,
        photoLoading: state.photoLoading
    }
}

export default connect(mapStateToProps, { handleInput, submitPerson, forceLoading, reset })(AddUser);
