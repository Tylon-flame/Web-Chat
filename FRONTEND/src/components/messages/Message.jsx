import React from 'react'
import useConversation from '../../hooks/useConversation'
const Message = () => {
  return (
    <div className='chat chat-end   '>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img src="https://img.daisyui.com/images/stock/photo-1534508775227-a3283af973db.webp" alt=" img" />
        </div>
      </div>
      <div className='chat-bubble text-gray-700 font-bold bg-green-400'>Hi</div>
      <div className='chat-footer opacity-100 font-semibold font-mono text-xs text-black drop-shadow-md'>12:30</div>

    </div>
  )
}

export default Message