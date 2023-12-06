// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeShowContent = event => {
        onToggleShowContent(event.target.value)
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <nav className="nav-bar-container">
          <h1>Layout</h1>
          <div className="check-box-container">
            <input
              type="checkbox"
              id="content"
              className="input-element"
              onChange={onChangeShowContent}
            />
            <label htmlFor="content" className="label-content">
              Content
            </label>
          </div>
          <div className="check-box-container">
            <input
              type="checkbox"
              id="leftNavBar"
              className="input-element"
              onChange={onChangeLeftNavbar}
            />
            <label htmlFor="leftNavBar" className="label-content">
              Left Navbar
            </label>
          </div>
          <div className="check-box-container">
            <input
              type="checkbox"
              id="rightNavBar"
              className="input-element"
              onChange={onChangeRightNavbar}
            />
            <label htmlFor="rightNavBar" className="label-content">
              Right Navbar
            </label>
          </div>
        </nav>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
