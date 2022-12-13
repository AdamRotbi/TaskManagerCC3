import React from 'react';

const User = (props) => {
    return (
        <div className='user'>
            <img src={props.image[0]}/>
            <h1>{props.firstName} {props.lastName}</h1>
            <button onClick={props.detailsUser}>Details User</button>
            <button onClick={props.listePosts}>Liste des posts</button>
        </div>
    );
}
export default User;
