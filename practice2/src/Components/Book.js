import React from 'react'

export const Book = ({book}) => {
  return (
    <div>
        <h1>Hello</h1>
        <h1>{book.title}</h1>
        <img src={book.coverImageUrl} alt="" />
    </div>
  )
}
