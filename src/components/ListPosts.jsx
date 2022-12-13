import React from 'react'
import { useParams } from 'react-router-dom'
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'

export default function ListPosts() {
    const listUsers = useSelector(state => state.user.data)
    const listPosts = useSelector(state => state.post.data)
    const id = useParams()
    const userChoisi = listUsers.user.filter(item => item.id == id)
    const postChoisi = listPosts.post.filter(item => item.id == id)
    return (
        <div>
            <div>
                <div>
                {postChoisi.map(item =>
                <div>
                    < div key={item.id}>
                    {item.title}
                    </div>
                <div>
                    {item.body}
                    <span>Tags:{item.tags[0]} {" "} {item.tags[1]} {" "}{item.tags[2]}</span>
                </div>        
                </div>
                )}
                </div>
    
            </div>
        </div>
    )
}