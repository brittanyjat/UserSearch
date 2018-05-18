import React from 'react';
import { connect } from 'react-redux';
import { handleInput, submitPerson } from '../redux/reducer';

function AddUser(props) {
    const { handleInput, firstName, lastName, address, age, picture, submitPerson, interests } = props;
    console.log(props.noResult)
    return (
        <div>
            <form>
                <h4>First Name</h4>
                <input type='text' onChange={(e) => handleInput('firstName', e.target.value)} />

                <h4>Last Name</h4>
                <input type='text' onChange={(e) => handleInput('lastName', e.target.value)} />

                <h4>Address</h4>
                <input type='text' onChange={(e) => handleInput('address', e.target.value)} />

                <h4>Age</h4>
                <input type='number' onChange={(e) => handleInput('age', e.target.value)} />

                <h4>Picture</h4>
                <input type='text' onChange={(e) => handleInput('picture', e.target.value)} />
            </form>
            <button onClick={(e) => submitPerson({ firstName: firstName, lastName: lastName, address: address, age: age, interests: interests, picture: picture })}>Submit</button>
        </div>
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

export default connect(mapStateToProps, { handleInput, submitPerson })(AddUser);