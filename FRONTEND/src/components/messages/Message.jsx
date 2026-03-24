import React from 'react'
import { useAuthContext } from "../../context/AuthContext.jsx";
import useConversation from '../../zustand/useConversation.js'
import { extractTime } from '../../utils/extractTime.js'
const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const formattedTime = extractTime(message.createdAt);
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-[#98ECB7]" : "bg-[#53DF86]";
  const shakeClass = message.shouldShake ? "shake" : "";
  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img src={profilePic} alt="avatar" />
        </div>
      </div>
      <div className={`chat-bubble text-gray-900 font-bold ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
      <div className='chat-footer opacity-100 font-semibold font-mono text-xs text-black drop-shadow-md'>
        {formattedTime}
      </div>
    </div>
  )
}

export default Message