import { FaBars } from 'react-icons/fa'
import logo from './logo.svg'

export const Logos = ({ handleValueState }) => {
  return (
    <div className="logos-container">
      <img className="logo" src={logo} alt="logo" />
      <button type="button" className="btn-icon" onClick={handleValueState}>
        <FaBars className="menu-icon" />
      </button>
    </div>
  )
}
