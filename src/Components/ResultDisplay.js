import React from 'react';

export default function ResultDisplay(props) {
    let display = props.results.map(user => {
        return (
            <div key={user.id} className='user-individual'>
                <div
                    className='user-image-container'
                    style={{
                        backgroundImage: `url(${user.picture})`
                    }}>
                </div>

                <div className='name-address-container'>
                    <h3>{`${user.firstName} ${user.lastName}`}</h3>
                    <h4>{user.address}</h4>
                </div>

                <div className='age-hobby-container'>
                    <h5>— Age —</h5>
                    <h4>{user.age}</h4>
                    <hr />
                    <h5>— Interests —</h5>
                    <h4>{user.interests[0] || ''}</h4>
                    <h4>{user.interests[1] || ''}</h4>
                    <h4>{user.interests[2] || ''}</h4>
                    <h4>{user.interests[3] || ''}</h4>
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