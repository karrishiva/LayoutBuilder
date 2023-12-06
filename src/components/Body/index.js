// Write your code here

import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-nav-bar">
              <h1 className="left-nav-bar-heading">Left Navbar Menu</h1>
              <ul className="list-container">
                <li className="item">Item 1</li>
                <li className="item">Item 2</li>
                <li className="item">Item 3</li>
                <li className="item">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content-container">
              <h1 className="left-nav-bar-heading">Content</h1>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                elusmod tempor Incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim venalm.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right-nav-bar">
              <h1 className="right-nav-bar-heading">Right Navbar Menu</h1>
              <div className="box-container">
                <p>Ad 1</p>
              </div>
              <div className="box-container">
                <p>Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
