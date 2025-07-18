import React from 'react'



const Register = () => {
  return (
    <div>
      <form className='register'>
        <h1>Register here 📝</h1>
        <div>
          {/* username */}
          <label htmlFor="username">Username</label>

        <input type="text" id='username' placeholder='username..' />
        </div>

          <div>
            {/* email */}
             <label htmlFor="email">Email</label>

          <input type="text" id='email' placeholder='forexample@gmail.com..' />
          </div>
          
            <div>
              {/* password */}
               <label htmlFor="password">password</label>

          <input type="password" id='pass' placeholder='password..' />
            </div>

          {/* button */}

        <button type="submit">Register</button>

      </form>
    </div>
  )
}

export default Register;