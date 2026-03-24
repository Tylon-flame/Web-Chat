import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
const Conversation = ({ conversation, lastIdx, emoji }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;
    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);
    return (
        <>
            <div
                className={`flex gap-2 items-center hover:bg-[#c0cb9f] rounded p-2 py-1 cursor-pointer 
                    ${isSelected ? 'bg-[#c0cb9f]' : ''}`}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className={`avatar ${isOnline ? 'online' : ''}`}>
                    <div className='w-12 rounded-full'>
                        <img src={conversation.profilePic} alt="avatar" />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex gap-2 justify-between items-center'>
                        <p className='font-black text-[#1c1706f9]'>{conversation.fullname}</p>
                        <span className='text-xs text-black'>{emoji}</span>
                    </div>
                </div>
            </div>
            {!lastIdx && <div className='divider my-0 py-0 h-1'></div>}
        </>
    )
}

export default Conversation;

// const Conversation = () => {
//   return (
//     <>
//     <div className='flex gap-2 items-center hover:bg-sky-300 rounded p-2 py-1 cursor-pointer'>
//         <div className='avatar online'>
//             <div className='w-12 rounded-full'>
//                 <img src="https://avatar.iran.liara.run/public/boy" alt="avatar" />
//             </div>
//         </div>
//         <div className='flex flex-col flex-1'>
//             <div className='flex gap-2justify-between items-center'>
//                 <p className='font-bold text-gray-200'>John Doe</p>
//                 <span className='text-xs text-gray-400'>12:30</span>
//             </div>
//         </div>
//     </div>
//     <div className='divider my-0 py-0 h-1'></div>
//     </>
//   )
// }

// export default Conversation