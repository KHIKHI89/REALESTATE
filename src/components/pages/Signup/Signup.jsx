import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import OAuth from '../../OAuth';
import {AiFillEyeInvisible , AiFillEye} from 'react-icons/ai'
import './Signup.css'
export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ //hook
    Nom:"",
    email:"",
    password:"",
  });
  const {Nom,email, password} = formData;
  function onChange(e){
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
  return (
    <body className="">
    <section>
      <h1 className="log">Sign Up</h1>
      <div className="container">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-3 ">
          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80" alt="key" className="w-full rounded-2xl"/>
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-10">
          <form className="flex-wrap">
          <div className="w-full">
               <input className="www" type="text" id="Nom" placeholder="Nom" value={Nom} onChange={onChange}/>
            </div>
            <div className="w-full">
               <input className="w" type="email" id="email" placeholder="Email" value={email} onChange={onChange}/>
            </div>
            <div className="w-full relative ">
              <input className="ww " type={showPassword ? "text" : "password"} id="password" placeholder="password" value={password} onChange={onChange}/>
               {showPassword ? (<AiFillEyeInvisible className="absolute right-3 top-6 cursor-pointer" onClick={()=>setShowPassword((prevState)=>!prevState)}/>) :( <AiFillEye className="absolute right-3 top-6 text-xl cursor-pointer"onClick={()=>setShowPassword((prevState)=>!prevState)}/> )}
            </div>
            <div className="w-full flex justify-between whitespace-nowrap text-sm">
              <p className="mb-6 my-6 text-sm">
                 have an account?
                <Link to ="/log-in" className="text-red-600 hover:text-red-700">Log In</Link>
              </p>
              <p className="my-6">
                <Link to ="/forget-password"  className="text-blue-600 hover:text-blue-700">Forget your password?</Link>
              </p>
              
            </div>
            <div className="w-full">
                <button className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded " type="submit">SIGN UP</button>
            </div>
            <div className = "w-full  my-3">
              <OAuth className="text-center"/>
            </div>
          </form>
        
        </div>
      </div>
    </section>
    </body>
  )
}

