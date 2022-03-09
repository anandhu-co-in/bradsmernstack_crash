import { Link } from "react-router-dom"
import {FaSignInAlt,FaSignOutAlt,FaUser, FaUserAlt} from 'react-icons/fa'

const Header = () => {
  return (
    <div>

        <Link to='/'> Dashboard</Link>
        <Link to='/login'> <FaSignInAlt/> Login</Link>
        <Link to='/register'> <FaUser/> Register</Link>

    </div>

  )
}

export default Header