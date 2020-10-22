import './Post.css';
import React from 'react'
import Avatar from '@material-ui/core/Avatar';

function Post({username, caption, imageURL}) {
    return (
        <div className="post">
            <div className="post__header">        
                <Avatar
                    className="post__avatar"
                    alt=""
                    src="/static/images/avatar/1.jpg"
                    />
                <h3>{username}</h3>
            </div>

        {/* header -> avatar + username  */}
        <img className = "post__image" src={imageURL}/>

        {/* Image */}
        
        <h4 className = "post__text"><strong>{username} </strong> {caption}</h4>
        {/* Username + caption */}
        </div>
    )
}

export default Post
