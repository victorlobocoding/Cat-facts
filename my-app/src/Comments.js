import React, { useState, useEffect } from "react";
export const Comments = () => {
  const [commentText, setCommentText] = useState("");
  const [commentList, setCommentList] = useState([]);
  const handleChange = (e) => {
    setCommentText(e.target.value);
  };

  useEffect(() => {
    setCommentText("");
  }, [commentList]);

  console.log(commentList);
  return (
    <>
      <form>
        <h1>Comments</h1>
        <p>Enter your comments here:</p>
        <input
          type="text"
          value={commentText}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setCommentList([...commentList, commentText]);
          }}
        >
          Submit
        </button>
      </form>
      <div>
        {commentList.map(function (comment) {
          return <li> {comment} </li>;
        })}
      </div>
    </>
  );
};
