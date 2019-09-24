import React from "react"

class SearchForm extends React.Component {
  render() {
    return (
      <div>
        search form
        <form>
          <input
            type="text"
            name="search"
            placeholder="search"
            value={this.props.search}
            onChange={this.props.changeHandler}
          />
        </form>
      </div>
    )
  }
}

export default SearchForm
