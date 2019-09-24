import React from "react"

const Book = props => {
  console.log(props)
  return (
    <div>
      <h2>{props.book.title}</h2>
      <img
        alt=""
        src={props.book.img}
        onClick={e => props.clickHandler(props.book)}
      />
      <button onClick={() => console.log("yolo")}>Add Comment</button>
      <button onClick={() => console.log("dolo")}>Show Comments</button>
    </div>
  )
}

export default Book
