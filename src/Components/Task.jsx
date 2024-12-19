import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Test = () => {

    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();

    let handleSubmit = (e) =>{
        e.preventDefault()

        if (name==='') {
            setNameError('Valid name is required')
        } else {
            setNameError('')
        }

        if (email==='' || !email.includes('@')) {
            setEmailError('valid email with @ is required')
        } else {
            setEmailError('')
        }

        if (password==='') {
            setPasswordError('Password is required')
        } else  {
            setPasswordError('')
        }


        if (name && !nameError && email && !emailError && password && !passwordError) {
            alert('Successfully submitted')
            navigate('/home')
        }
    }

  return (
    <div>
        <h1>Simple Form Validation</h1>
      <form onSubmit={handleSubmit}>
          {/* <div>
            
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='type name here'/>
            {nameError&&<p style={{color: 'red'}}>{nameError}</p>}
          </div> */}
          <div>
            
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='type email here'/>
            {emailError&&<p style={{color: 'red'}}>{emailError}</p>}
          </div>

          <div>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder=''/>
            {passwordError && <p style={{color:'red'}}>{password}</p>}
          </div>
          
          <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Test




