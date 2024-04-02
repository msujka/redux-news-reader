import React from 'react';
import Comment from './Comment';

export default function CommentList({ comments }) {
  if (comments) {
    return (
      <ul className='comments-list'>
        {comments.map((comment) => (
            <li key={comment.id}>
                <Comment comment={comment} />
            </li>
            ))}
      </ul>
    );
  }
  return null;
}