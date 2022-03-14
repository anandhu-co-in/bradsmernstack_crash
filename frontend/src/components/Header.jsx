import { Link, useNavigate } from "react-router-dom"
import {FaSignInAlt,FaSignOutAlt,FaUser, FaUserAlt} from 'react-icons/fa'
import {useDispatch, useSelector} from 'react-redux'
import { logout,reset } from "../features/auth/authSlice"


const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state)=>state.auth)


  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  } 


  return (
    <div>
        <Link to='/'> Dashboard</Link>

        {user?<button onClick={onLogout}> Logout </button>:
          <>
            <Link to='/login'> <FaSignInAlt/> Login</Link>
            <Link to='/register'> <FaUser/> Register</Link>
          </>
        }
    </div>

  )
}

export default Header