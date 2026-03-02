import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <div>
      <form action="" className='flex items-center gap-2'>
        <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />
        <button type='submit' className='btn btn-circle bg-sky-200 text-blue-700'>
          <IoSearchSharp className='w-5 h-5' />
        </button >
      </form>
    </div>
  )
}

export default SearchInput;

// const SearchInput = () => {
//   return (
//     <div>
//       <form action="" className='flex items-center gap-2'>
//         <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />
//         <button type='submit' className='btn btn-circle bg-sky-200 text-blue-700'>
//           <IoSearchSharp className='w-5 h-5' />
//         </button >
//       </form>
//     </div>
//   )
// }

// export default SearchInput;