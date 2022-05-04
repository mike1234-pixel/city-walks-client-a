import React from 'react'
import { MDBInput } from "mdbreact"
import { FaSearchLocation } from "react-icons/fa"
import { connect } from 'react-redux'
import GlobalState from "../../types/State/Global/State"
import './SeachBar.scss'

interface Props {
  handleChangeSearch: Function;
  setRedirect: Function;
  searchValue: string;
}

let SearchBar: React.FC<Props> = (props: Props) => {

  const { handleChangeSearch, setRedirect, searchValue } = props;

  function submitSearch(e: React.FormEvent) {
    e.preventDefault()
    setRedirect(true)
  }

  function processInputValue(e: React.ChangeEvent<any>) {
    const inputValue = e.target.value
    handleChangeSearch(inputValue)
  }

  return (
    <form onSubmit={submitSearch}>
      <span className="search-container">
        <MDBInput
          data-testid="search-input"
          label="Search Walks"
          name="search-input"
          id="search-input"
          type="text" placeholder="Search"
          className="search-input"
          value={searchValue}
          onChange={processInputValue}
        />
        <button type="submit" data-testid="search-btn" className="search-btn"><FaSearchLocation id="search-btn-icon" className="search-location-icon" /></button>
      </span>
    </form>
  )
}

const mapStateToProps = (state: GlobalState) => ({
  searchValue: state.searchState.searchValue,
});


const mapDispatchToProps = (dispatch: Function) => {
  return {
    handleChangeSearch: (inputValue: string) => dispatch({ type: 'HANDLE_CHANGE_SEARCH', inputValue }),
    setRedirect: (boolValue: boolean) => dispatch({ type: 'SET_REDIRECT', boolValue }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);