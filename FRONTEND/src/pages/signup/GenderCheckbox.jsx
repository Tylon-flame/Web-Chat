
const GenderCheckbox = () => {
    return (
        <div className='flex items-center mt-2'>
            <div className='form-control'>
                <label className='label gap-2 cursor-pointer p-1'>
                    <span className='text-base label-text text-black font-bold'>Male</span>
                    <input type="radio" name='gender' className='radio border-slate-700' />
                </label>
            </div>
            <div className='form-control'>
                <label className='label gap-2 cursor-pointer p-1'>
                    <span className='text-base label-text text-black font-bold'>Female</span>
                    <input type="radio" name='gender' className='radio border-slate-700' />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckbox;


// const GenderCheckbox = () => {
//     return (
//         <div className='flex items-center mt-2'>
//             <div className='form-control'>
//                 <label className='label gap-2 cursor-pointer p-1'>
//                     <span className='text-base label-text text-black font-bold'>Male</span>
//                     <input type="radio" name='gender' className='radio border-slate-700' />
//                 </label>
//             </div>
//             <div className='form-control'>
//                 <label className='label gap-2 cursor-pointer p-1'>
//                     <span className='text-base label-text text-black font-bold'>Female</span>
//                     <input type="radio" name='gender' className='radio border-slate-700' />
//                 </label>
//             </div>
//         </div>
//     )
// }

// export default GenderCheckbox;
