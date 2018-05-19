import React from 'react';
import userPhoto from '../userPhoto.svg';
import blue from '../blue.jpeg';
import blue2 from '../blue2.jpeg';

export default function ResultDisplay(props) {
    let display = props.results.map(user => {
        return (
            <div key={user.id} className='user-individual'>
                <div style={{ backgroundImage: `url(${blue2})` }}>
                    <img src={user.picture || userPhoto} alt='user' />
                </div>

                <h3>{`${user.firstName} ${user.lastName}`}</h3>

                <div>
                    <h4>Age: {user.age}</h4>
                    <h4>Address: {user.address}</h4>
                    <ul>
                        <li>{user.interests[0] || ''}</li>
                        <li>{user.interests[1] || ''}</li>
                        <li>{user.interests[2] || ''}</li>
                        <li>{user.interests[3] || ''}</li>
                    </ul>
                </div>
            </div>
        )
    })
    return (
        <div className='main-result-container'>
            {display}
        </div>
    )
}