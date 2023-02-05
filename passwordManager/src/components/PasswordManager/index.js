import {Component} from 'react'
import './index.css'

class PasswordManager extends Component {
  state = {isPasswordVisible: true, passWordsList: []}

  render() {
    const {isPasswordVisible, passWordsList} = this.state

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="first-container">
          <form className="form-container">
            <h1 className="form-heading">Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-type-logo"
              />
              <input type="text" className="input-style" />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-type-logo"
              />
              <input type="text" className="input-style" />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-type-logo"
              />
              <input type="text" className="input-style" />
            </div>
            <button type="submit" className="password-add-btn">
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="main-image"
          />
        </div>
        <div className="second-container">
          <div className="heading-container">
            <h1 className="second-container-heading">
              Your Passwords<span className="counter-passwords">0</span>
            </h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-icon"
              />
              <input type="text" className="search-input" />
            </div>
          </div>
          <hr className="separator-line" />
          <div className="show-passwords-container">
            <input type="checkbox" className="show-password-checkbox" />
            <p className="show-password-text">Show Passwords</p>
          </div>
          <ul className="passwords-list-container">Hello</ul>
        </div>
      </div>
    )
  }
}

export default PasswordManager
