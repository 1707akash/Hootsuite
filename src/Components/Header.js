
import './Header.css'
import logo from '../logo.png'

const Header = () => {
  return (
    <div className='header' >
    <div className="navleft">
    <img className='logoImg' src={logo} alt="logo" />
    <ul className='navlist'>
        <li >Platform</li>
        <li>Plans</li>
        <li>Enterprise</li>
        <li>Resources</li>
        <li>Education</li>
    </ul>
    </div>

    <div className="navright">
    <a href="">Contact Us</a>
    <a href="">Login</a>
    <button>Sign Up</button>
    </div>


    </div>
  )
}

export default Header