import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from 'react-icons/ti'
const MessageContainer = () => {
  const noChatSelected = false;
  return (
    <div className='md:min-w-[450px] flex flex-col h-full bg-yellow-200/20'>
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className='bg-gray-400 px-4 py-2 mb-2'>
            <span className='label-text text-gray-900 font-bold'>Rajat</span>{" "}
            <span className='text-gray-800 font-bold'>@rajat</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};


export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className='md:min-w-[450px] flex h-full bg-yellow-200/20 items-center'>
      <div className='bg-[#444444] flex flex-col px-4 py-2 mb-2 sm:text-lg md:text-xl text-center font-semibold items-center gap-2'>
        <p>WELCOME #CHATS</p>
        <p>SELECT CHAT TO START MESSAGING</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>

    </div>
  )
}
