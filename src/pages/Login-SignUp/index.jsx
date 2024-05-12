import React from 'react'
import Login from '../Login'
import SignUp from '../SignUp'

function LoginSignUp() {
  return (
    <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>
            <SignUp></SignUp>
            <Login></Login>
	</div>
  )
}

export default LoginSignUp