import React from 'react';
import userPhoto from '../userPhoto.svg';

export default function ResultDisplay(props) {
    let display = props.results.map(user => {
        return (
            <div key={user.id} className='user-individual'>
                <img src={user.picture || userPhoto} alt='user' />
                <h3>{user.firstName}</h3>
                <h3>{user.lastName}</h3>
                <h4>{user.address}</h4>
                <h4>{user.age}</h4>
                <ul>
                    <li>{user.interests[0] || ''}</li>
                    <li>{user.interests[1] || ''}</li>
                    <li>{user.interests[2] || ''}</li>
                    <li>{user.interests[3] || ''}</li>
                </ul>
            </div>
        )
    })
    return (
        display
    )
}