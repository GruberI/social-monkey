import React, { useContext, useState } from 'react'
import { Comment } from '../../components'
import CommentInput from '../../components/comment-input';
import { UserContext } from '../../contexts/user';
import { db, storage } from '../../firebase'
import "./style.css"

export default function Post({profileUrl, username, id, photoUrl, caption, comments}) {
    const [user, setUser] = useContext(UserContext).user;

    const deletePost = () => {
        //delete image from firebase storage
        //get ref to image file you want to delete
        var imageRef = storage.refFromURL(photoUrl);

        //delete file
        imageRef
        .delete()
        .then(function () {
            console.log("delete succesfull");
        }).catch(function (error) {
            console.log(`Error ${error}`);
        });

        //delete post info from firebase firestore
        db
        .collection("posts")
        .doc(id)
        .delete()
        .then(function () {
            console.log("delete post succesfull");
        }).catch(function (error) {
            console.log(`Error post info delete ${error}`);
        });
      };

    return (
        <div className="post">
            <div className="post__header">
                <div className="post__headerLeft">
                    <img className="post__profilePic" src={profileUrl} alt="img"/>
                    <p style={{marginLeft: "10px"}}>{username}</p>
                </div>
                <button onClick={deletePost} className="post__delete">Delete</button>
            </div>

            <div className="post__center">
                <img className="post__photoUrl" src={photoUrl} alt="img"/>
            </div>

            <div>
                <p><span style={{fontWeight: "500", marginRight: "8px"}}>{username}</span>
                {caption}</p>
            </div>


            {comments ? comments.map((comment) => 
            <Comment caption={comment.comment} username={comment.username}/>
            ) : <></>}

            {user ? <CommentInput id={id} comments={comments}/> : <></>}
        </div>
    )
}
