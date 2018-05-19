import React from 'react';

export default function ResultDisplay(props) {
    let display = props.results.map(user => {
        return (
            <div key={user.id} className='user-individual'>
                <div 
                    style={{ 
                        backgroundImage: `url(${user.picture})` }}>
                    {/* <img src={user.picture || userPhoto} alt='user' /> */}
                </div>

                <h3>{`${user.firstName} ${user.lastName}`}</h3>


                <h4>{user.age}</h4>
                <h4>{user.address}</h4>

                <div className='hobby-container'>
                    <h4>Hobbies</h4>
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