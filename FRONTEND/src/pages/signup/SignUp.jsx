import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-md shadow-md bg-gray-400/10 bg-clip-padding backdrop-blur-md border-1 border-gray-600 background-opacity-0'>
        <h1 className='text-3xl font-bold mb-2 text-center text-yellow-200'>Sign Up <span className='text-yellow-400'>ChatApp</span></h1>
        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-black font-bold'>FULL NAME</span>
            </label>
            <input type="text" placeholder='Name' className='w-full input input-bordered h-9' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-black font-bold'>USERNAME</span>
            </label>
            <input type="text" placeholder='Username' className='w-full input input-bordered h-9' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-black font-bold'>PASSWORD</span>
            </label>
            <input type="password" placeholder='Password' className='w-full input input-bordered h-9' />

          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-black font-bold'>CONFIRM PASSWORD</span>
            </label>
            <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-9' />

            <GenderCheckbox />
          </div>
          <a href="#" className='text-sm hover:text-pink-200 mt-4 inline-block text-black font-bold'>
            {`Already have an account?`}
          </a>
          <div>
            <button className='btn btn-block btn-md mt-2 border border-slate-700 hover:border-slate-500'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp

// import React from 'react'
// import GenderCheckbox from './GenderCheckbox'

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-md shadow-md bg-gray-500/60 bg-clip-padding backdrop-blur-md border-1 border-gray-600 background-opacity-0'>
//         <h1 className='text-3xl font-semibold mb-2 text-center'>Sign Up <span className='text-yellow-200'>ChatApp</span></h1>
//         <form>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>FULL NAME</span>
//             </label>
//             <input type="text" placeholder='Name' className='w-full input input-bordered h-9' />
//           </div>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>USERNAME</span>
//             </label>
//             <input type="text" placeholder='Username' className='w-full input input-bordered h-9' />
//           </div>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>PASSWORD</span>
//             </label>
//             <input type="password" placeholder='Password' className='w-full input input-bordered h-9' />

//           </div>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>CONFIRM PASSWORD</span>
//             </label>
//             <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-9' />

//             <GenderCheckbox />
//           </div>
//           <a href="#" className='text-sm hover:text-pink-200 mt-4 inline-block'>
//             {`Already have an account?`}
//           </a>
//           <div>
//             <button className='btn btn-block btn-md mt-2 border border-slate-700 hover:border-slate-500'>Sign Up</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default SignUp