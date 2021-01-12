import React, { useState, useContext } from "react";
import { UserContext } from "../../contexts/user";
import { db } from "../../firebase";
import "./styles.css";

export default function CommentInput({ comments, id }) {
  const [comment, setComment] = useState("");
  const [user, setUser] = useContext(UserContext).user;

  const [commentArray, setCommentArray] = useState(comments ? comments : []);

  const addComment = () => {
    if (comment !== "") {
      //add a new comment to post info
      commentArray.push({
        comment: comment,
        username: user.email.replace("@gmail.com", "").toLowerCase(),
      });

      db.collection("posts").doc(id).update({
        comments: commentArray,
      }).then(function(){
          setComment("");
          console.log("comment added")
      }).catch(function(error){
          console.log(`Error ${error}`)
      });
    }
  };

  return (
    <div className="commentInput">
      <textarea
        rows="1"
        placeholder="write a comment..."
        className="commentInput__textarea"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      ></textarea>
      <button onClick={addComment} className="commentInput__btn">Post</button>
    </div>
  );
}
