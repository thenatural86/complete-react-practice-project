import React from "react"
import Book from "../components/Book"
import SearchForm from "../components/SearchForm"

const Bookshelf = props => {
  console.log(props)
  let books = props.filterBooks().map(book => {
    return <Book key={book.id} book={book} clickHandler={props.clickHandler} />
  })
  return (
    <div>
      <h1>Book Shelf</h1>
      <SearchForm changeHandler={props.changeHandler} search={props.search} />
      <ul>{books}</ul>
    </div>
  )
}

export default Bookshelf
