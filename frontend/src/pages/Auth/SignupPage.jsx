import React from 'react'

function SignupPage() {
  function Signup(){
    console.log("Form Submitted")
  }
  return (
    <div className='flex md:flex-1 h-screen w-screen'>
      <div className="w-[50%] bg-green-400">
        <h1>Left</h1>
      </div>
      <div className="w-[50%] bg-white">
        <div className="p-8 flex items-center justify-center">
          <h1 className='md:text-3xl sm:text-2xl lg:text-4xl font-bold'>Signup for FreelanceOS</h1>
        </div>
        <div className="form">
          <form >
            <label>Username</label>
            <input type="text" placeholder='Username' />
            <label>Email</label>
            <input type="text" placeholder='example@gmail.com' />
             <label>Password</label>
            <input type="password" placeholder='Strong Password' />
            <input type="submit" value="Signup" />
          </form>
        </div>
        <div className="flex gap-1">
          <a href=""> <span className='text-gray-700 font-light text-3.5'>Privacy Policy</span></a>
          <a href=""> <span className='text-gray-700 font-light text-3.5'>Terms and Condition</span></a>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
