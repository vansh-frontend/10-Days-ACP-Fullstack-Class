import React from 'react'

const Login = () => {
  return (
    <div>
      <div>
      <form className='Login'>
        <h1>Login Here 👋</h1>
      
          <div>
            
             <label htmlFor="email">Email</label>

          <input type="text" id='email' placeholder='forexample@gmail.com..' />
          </div>
          
            <div>
              {/* password */}
               <label htmlFor="password">password</label>

          <input type="password" id='pass' placeholder='password..' />
            </div>

          {/* button */}

        <button type="submit">Login</button>

      </form>
    </div>
    </div>
  )
}

export default Login;