import React from 'react';
import { connect } from 'react-redux';
import userPhoto from '../userPhoto.svg';

function Results(props) {
    const { results, loading } = props;
    let resultDisplay = results.map((user, i) => {
        return (
            <div key={i} className='user-individual'>
                <img src={user.picture || userPhoto} alt='user' />
                <h3>{user.name}</h3>
                <h4>{user.address}</h4>
                <h4>{user.age}</h4>
                <ul>
                    <li>{user.interests[0]}</li>
                    <li>{user.interests[1]}</li>
                    <li>{user.interests[2]}</li>
                    <li>{user.interests[3]}</li>
                </ul>
            </div>
        )
    })
    return (
        <div>
            {
                loading
                    ? <span>loading</span>
                    : <div className='main-result-container'>
                        {resultDisplay}
                    </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        results: state.results,
        loading: state.loading
    }
}

export default connect(mapStateToProps, {})(Results);