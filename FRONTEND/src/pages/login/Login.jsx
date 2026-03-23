import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';
function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {login,loading} = useLogin(); 
  const handleSubmit = async(e)=>{
    e.preventDefault();
    await login(username,password);
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-md shadow-md bg-gray-400/40 bg-clip-padding backdrop-blur-md border-1 border-gray-600 background-opacity-0'>
        <h1 className='text-3xl font-bold mb-2 text-center text-yellow-100'>Login
          <span className='text-yellow-300'> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}> 
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-black font-bold'>Username</span>
            </label>
            <input type="text" placeholder='USERNAME' className='w-full input input-bordered h-10' 
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-black font-bold'>Password</span>
            </label>
            <input type="password" placeholder='PASSWORD' className='w-full input input-bordered h-10' 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />

          </div>
          <Link to="/signup" className='text-sm hover:text-pink-200 mt-2 inline-block text-black font-bold'>
            {`Don't have an account?`}
          </Link>
          <div>
            <button className='btn btn-block btn-md mt-2'
            disabled={loading}
            >
              {loading ? <span className='loading loading-spinner'></span> : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;

// import React from 'react'

// function Login() {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className='w-full p-6 rounded-md shadow-md bg-gray-400/30'>
//             <h1 className='text-3xl font-semibold mb-2 text-center'>Login
//               <span className='text-yellow-200'> ChatApp</span>
//             </h1>
//             <form>
//               <div>
//                 <label className='label p-2'>
//                   <span className='text-base label-text'>Username</span>
//                 </label>
//                 <input type="text" placeholder='USERNAME' className='w-full input input-bordered h-10' />
//               </div>
//               <div>
//                 <label className='label p-2'>
//                   <span className='text-base label-text'>Password</span>
//                 </label>
//                 <input type="password" placeholder='PASSWORD' className='w-full input input-bordered h-10' />

//               </div>
//               <a href="#" className='text-sm hover:text-pink-200 mt-2 inline-block'>
//                 {`Don't have an account?`}
//               </a>
//               <div>
//                 <button className='btn btn-block btn-md mt-2'>Login</button>
//               </div>
//               </form>
//         </div>
//     </div>
//   )
// }

// export default Login