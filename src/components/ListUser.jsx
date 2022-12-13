import React from 'react'
import { useSelector } from 'react-redux';
import User from './User';
import { useNavigate } from 'react-router-dom';
import './ListeUser.css'


export default function ListUser() {

  const navigate = useNavigate();
  const ListUsers = useSelector(state => state.user.data);

  return (
    <div className='users'>
            {ListUsers.length !== 0 && ListUsers.map(item => <User key={item.id} image={item.image} firstName={`${item.firstName}`} lastName={`${item.lastName}`} detailsUser={e => navigate(`/DetailsUser/${item.id}`)} listePosts={e => navigate(`/ListPosts/${item.id}`)} />)}
        </div>
  )
}


