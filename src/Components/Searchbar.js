import React from 'react';
import { connect } from 'react-redux';
import { handleInput, submitPerson } from '../redux/reducer';

function SearchBar(props) {
    const { handleInput, name, address, age, picture, submitPerson, interests } = props;
    return (
        <div>
            <h2>Please enter the name you are searching for</h2>
            <form>
                <h4>Name</h4>
                <input type='text' onChange={(e) => handleInput('name', e.target.value)} />

                <h4>Address</h4>
                <input type='text' onChange={(e) => handleInput('address', e.target.value)} />

                <h4>Age</h4>
                <input type='number' onChange={(e) => handleInput('age', e.target.value)} />

                <h4>Picture</h4>
                <input type='text' onChange={(e) => handleInput('picture', e.target.value)} />
            </form>
            <button onClick={(e) => submitPerson({ name: name, address: address, age: age, interests: interests, picture: picture })}>Submit</button>
        </div>
    )
}

var mapStateToProps = (state) => {
    return {
        name: state.name,
        address: state.address,
        age: state.age,
        interests: state.interests,
        picture: state.picture
    }
}

export default connect(mapStateToProps, { handleInput, submitPerson })(SearchBar);