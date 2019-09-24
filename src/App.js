import React from "react"
import "./App.css"
import BookList from "./containers/BookList"
import Bookshelf from "./containers/Bookshelf"

class App extends React.Component {
  state = { bookShelfList: [], search: "" }

  clickHandler = bookObj => {
    console.log("clickin")
    if (!this.state.bookShelfList.includes(bookObj)) {
      this.setState({ bookShelfList: [bookObj, ...this.state.bookShelfList] })
    }
  }

  removeHandler = bookObj => {
    console.log("removing")
    this.setState({
      bookShelfList: this.state.bookShelfList.filter(book => book !== bookObj)
    })
  }

  changeHandler = e => {
    this.setState({ search: e.target.value })
  }

  filterBooks = () => {
    return this.state.bookShelfList.filter(book =>
      book.title.toUpperCase().includes(this.state.search.toUpperCase())
    )
  }

  render() {
    return (
      <div className="book-container">
        <BookList clickHandler={this.clickHandler} />
        <Bookshelf
          books={this.state.bookShelfList}
          clickHandler={this.removeHandler}
          changeHandler={this.changeHandler}
          search={this.state.search}
          filterBooks={this.filterBooks}
        />
      </div>
    )
  }
}

export default App
