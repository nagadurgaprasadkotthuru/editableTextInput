import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {inputValue: '', isShowInputElement: true}

  onChangeInput = event => this.setState({inputValue: event.target.value})

  onClickSaveOrEdit = () =>
    this.setState(prevState => ({
      isShowInputElement: !prevState.isShowInputElement,
    }))

  render() {
    const {inputValue, isShowInputElement} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="input-button-container">
            {isShowInputElement ? (
              <input
                className="input-element"
                type="text"
                onChange={this.onChangeInput}
                value={inputValue}
              />
            ) : (
              <p className="paragraph">{inputValue}</p>
            )}
            {isShowInputElement ? (
              <button
                className="button"
                type="button"
                onClick={this.onClickSaveOrEdit}
              >
                Save
              </button>
            ) : (
              <button
                className="button"
                type="button"
                onClick={this.onClickSaveOrEdit}
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
