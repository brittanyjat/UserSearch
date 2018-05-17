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
                {user.interests.map(x => {
                    return (
                        <ul key={x}>
                            <li>{x}</li>
                        </ul>
                    )
                })
            }
            </div>
        )
    })
    return (
        <div>
            {
                loading
                    ? <span>loading</span>
                    : resultDisplay
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