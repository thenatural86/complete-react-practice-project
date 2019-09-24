import React from "react"

class Form extends React.Component {
  state = { title: "", author: "", img: "", comments: "" }

  changeHandler = e => {
    // console.log("changing")
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault()
    this.props.submitHandler(this.state)
    this.setState({ title: "", author: "", img: "", comments: "" })
    console.log("submitting")
  }

  render() {
    return (
      <h1>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={this.state.title}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="author"
            placeholder="author"
            value={this.state.author}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="img"
            placeholder="img"
            value={this.state.img}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="comments"
            placeholder="comments"
            value={this.state.comments}
            onChange={this.changeHandler}
          />
          <input type="submit" value="submit" onChange={() => {}} />
        </form>
      </h1>
    )
  }
}

export default Form
