import { useState } from 'react';
import './App.css';

function App() {

  const [username,setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [tnc, setTnc] = useState(null)
  const [check,setCheck] = useState(false)
  const [gender, setGender] = useState(null)
  const [loginDate, setLoginDate] = useState('2023-08-09')
  const [range,setRange] = useState(1)
  const  [time,setTime] = useState('13:02')
  //const [[usernameError,passworError],setError] = useState(['',''])
  const [error, setError] = useState({
    usernameError:'',
    passwordError:''
  })

  //error.usernameError
  // apis 

  const handleSubmit  =(e)=>{
    e.preventDefault()
    //rest of the code
    //

    //validation

    if(username==null || username==''){
      setError({
        usernameError:'Enter your username'
      })
    }else{
      setError({
        usernameError:''
      })
    }

    if(password==null || password==''){
      setError({
        ...error,
        passwordError:'Enter your password'
      })
    }else{
      setError({
        passwordError:''
      })
    }

    //[...]

    

    console.log(`Username :  ${username}`)
    console.log(`Password :  ${password}`)
    console.log(`Role :  ${role}`)
    console.log(`Tnc :  ${tnc}`)
    console.log(`Gender :  ${gender}`)
    console.log(`Date of Login :  ${loginDate}`)
    console.log(`Range :  ${range}`)
    console.log(`Time :  ${time}`)

    //api call for login username and password
  }

  const handleUsername = (event)=>{
    //console.log('ddddd')
    //e.target.value =  value of the input
    //console.log(event.target.value)
    setUsername(event.target.value)
    
  }

  //continues run, condition: state variable

  const handlePassword = (event) =>{
    setPassword(event.target.value)
  }

  const handleRole = (event) =>{
    setRole(event.target.value)
  }

  const handleTnc = (event) =>{
    setCheck(event.target.checked)

    if(event.target.checked==true){
      setTnc('accepted')
    }else{
      setTnc(null)
    }
    

 

  }
  const handleGender = (event) =>{
    setGender(event.target.value)
  }

  const handleLoginDate = (event) =>{
    setLoginDate(event.target.value)
  }

  const handleRange  = (event) =>{
    setRange(event.target.value)
  }
  
  const handleTime = (event) => {
    setTime(event.target.value)
  }

  return (
    <>
      <div className='container py-4'>
        <div className='row'>
          <div className='col-md-3'>
            <form action='' onSubmit={handleSubmit}>
              <div className='form-group'>
                <label>Username</label>
                <input type='text' className='form-control' onChange={handleUsername} value={username} />
              </div>
              <div className='form-group'>
                <label>Password</label>
                <input type='password' className='form-control' onChange={handlePassword} value={password} />
              </div>
              <div className='form-group'>
                <label>Role</label>
                <select className='form-control'  onChange={handleRole}>
                  <option value={''}>Select Your Role</option>
                  <option value={'admin'}>Administrator</option>
                  <option value={'editor'}>Editor</option>
                  <option value={'media'}>Media Person</option>
                  <option value={'guest'}>Guest</option>
                </select>
              </div>
              <div className='form-group'>
                <label><input type='checkbox' className='' onChange={handleTnc} value={tnc} checked={check} /> I Accept the companies terms and conditions </label>
              </div>

              <div className='form-group'>
                <label className='me-2'><input type='radio' value={'male'} onChange={handleGender}  name='gender' /> Male</label>
                <label><input type='radio' value={'female'} name='gender' onChange={handleGender} /> Female</label>
              </div>
              <div className='form-group'>
                <label>Date of login</label>
                <input type='date' className='form-control' onChange={handleLoginDate} value={loginDate}/>
              </div>
              <div className='form-group'>
                <label>Date of Time</label>
                <input type='time' className='form-control' onChange={handleTime} value={time}/>
              </div>
              <div className='form-group'>
                <label>Range</label>
                <div><input type='range' className='w-100' onChange={handleRange} value={range}/></div>
                <div className='d-flex justify-content-between'>
                  <span>
                    <span>Min: </span>
                    <span>0</span>
                  </span>
                  <span>
                    <span>Max: </span>
                    <span>{range}</span>
                  </span>
                </div>
              </div>
              <div>{error.usernameError}</div>
              <div>{error.passwordError}</div>
              <div className='form-group'>
                <button type='submit' className='btn btn-primary'>Login</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
