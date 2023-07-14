import React, { useEffect, useState } from 'react'
import './Login.css';
const Login = () => {
    const initial={name:'',email:'',Password:''};
    const[formvalue,setFormvalue]=useState(initial)
    const[formerror,setFormError]=useState({})
    const[isSubmit,setIsSubmit]=useState(false);
    const handleChange=(e)=>{
        const {name,value} = e.target;
        setFormvalue({...formvalue,[name]:value})
    }
    const HandleSubmit=(e)=>{
      e.preventDefault();
      setFormError(validation(formvalue));
      setIsSubmit(true);
    }

    useEffect(()=>{
      if(Object.keys(formerror).length===0 && isSubmit){
        console.log(formvalue);
      }
    },[formerror])
    const validation=(values)=>{
      const errors={};
      if(!values.name){
        errors.name="Name is Required";
      }
      if(!values.email){
        errors.email="Email is Required";
      }
      if(!values.Password){
        errors.Password="Password is Required";
      }
      return errors;
    }
  return (
    <div className='signin' id='Login-section'>
      <form onSubmit={HandleSubmit}>
        <h1>LogIn/SignIn</h1>
        <div className='forminput'>
        <div className='field'>
        <label for="name">Name</label><br/>
        <input type='text' name='name' value={formvalue.name} onChange={handleChange}/>
        <p>{formerror.name}</p>
        </div>
        <div className='field'>
        <label for="Email">Email</label><br/>
        <input type='email' name='email' value={formvalue.email} onChange={handleChange}/>
        <p>{formerror.email}</p>
        </div>
        <div className='field'>
        <label for="Password">Password</label><br/>
        <input type='password' name='Password' value={formvalue.Password} onChange={handleChange}/>
        <p>{formerror.Password}</p>
        </div>
        <div>
            <button type="submit"  className='btn2'>Submit</button>
        </div>
        </div>
      </form>
    </div>
  )
}

export default Login