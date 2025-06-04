import React from 'react'
import { assets } from '../assets/assets'

const Login = () => {
    const [state , setState] = useState('Sign Up')
  return (
    <div>
        <img src={assets.logo} alt="" className='absolute left-5 sm:left-20 top-5 w-28 sm;w-32 cursor-pointer'/>
        <div>
            <h2>{state==='Sign Up'? 'Create Account' : 'Login'}</h2>
            <p>{state==='Sign Up'? 'Create your account' : 'Login to your Account'}</p>
        </div>
    </div>
  )
}

export default Login