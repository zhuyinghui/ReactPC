import React from 'react'; 
import { Link } from 'react-router-dom'
function Header(){
  return(
      <div>
        <Link to="/login">登录</Link>
      </div>
    )
}
export default Header