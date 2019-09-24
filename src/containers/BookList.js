import React, { Component } from "react"
import Form from "../components/Form"
import Book from "../components/Book"

class BookList extends Component {
  state = { allBooks: [] }

  componentDidMount() {
    fetch("http://localhost:3005/books")
      .then(resp => resp.json())
      .then(data => {
        // console.log(data)
        this.setState({ allBooks: data })
      })
  }

  submitHandler = bookObj => {
    this.setState({ allBooks: [bookObj, ...this.state.allBooks] })
  }

  render() {
    // console.log(this.props)
    let books = this.state.allBooks.map(book => {
      return (
        <Book
          key={book.id}
          book={book}
          clickHandler={this.props.clickHandler}
        />
      )
    })
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form submitHandler={this.submitHandler} />
        <ul>{books}</ul>
      </div>
    )
  }
}

export default BookList
