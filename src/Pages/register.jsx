import React from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

const initInput = {
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    confirmPassword:'',
}
function register() {
    const [input,setInput] = useState(initInput)
    const hdlChange =e =>{
        setInput(prv=>({...prv,[e.target.name]:e.target.value}))
    }

    const hdlClearInput = ()=>setInput(initInput)

    const hdlRegister = async e =>{
        try {
            const {firstname,lastname,email,password,confirmPassword }=input

            console.log('input', input)
            e.preventDefault()
           //**validation
           if(!firstname.trim() || !lastname.trim() || !email.trim() || !password.trim()){
            return toast.error('Please fill all inputs')
        }
            if(password !== confirmPassword){
                return toast('Password and Confirm password unmatched!!')
            }
            // toast.success(JSON.stringify(input),{position:'top-center'})
            //npm i react-toastify
            //** send request to api
            const rs = await axios.post('http://localhost:8899/auth/register',input)

            hdlClearInput()
            document.getElementById('register-form').close()
            toast("Register successful")
        } catch (err) {
            console.log(err);
            const errMsg =err.response?.data?.error || err.message
            toast.error(errMsg)
        }
    }
  return (
    <>
    <div className='text-3xl text-center opacity-70'>Create a new account</div>
    <div className='divider opacity-60'></div>
    <form onSubmit={hdlRegister} className='flex flex-col gap-5 p-4 pt-3'>
        <div className='flex gap-2'>
        <input type="text" placeholder='First name'className='input input-bordered w-full' name='firstname' value={input.firstName} onChange={hdlChange}/>
        <input type="text" placeholder='Last name'className='input input-bordered w-full' name='lastname' value={input.lastName} onChange={hdlChange}/>
        </div>
        <input type="text" placeholder='Email or Phone number'className='input input-bordered w-full'name='identity' value={input.identity} onChange={hdlChange} />
        <input type="password" placeholder='New password'className='input input-bordered w-full' name='password' value={input.password} onChange={hdlChange} />
        <input type="password" placeholder='Confirm password'className='input input-bordered w-full'  name='confirmPassword' value={input.confirmPassword} onChange={hdlChange} />
        <button className='btn btn-secondary text-xl text-white'>Sign up</button>
        <button className='btn btn-warning text-xl text-white' type='button' 
        onClick={hdlClearInput}
        >Reset</button>
       
    </form>
    </>
  )
}

export default register