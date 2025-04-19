import React from 'react';
import catPfp from '../img/cute-cat-pfp.gif'; // Adjust path based on your actual file location

const ProfileSideBar = () => {
  return (
    <div className='w-1/3 bg-violet-400 p-12 text-2xl text-white font-semibold flex flex-col gap-20' style={{fontFamily:"Indie flower"}}>
      {/* user profile */}
      <div className='flex gap-5 mt-15'>
        <div className="rounded-full w-[150px] h-[150px] bg-black overflow-hidden">
          <img src={catPfp} alt="Profile" className="w-full h-full object-cover" />
        </div>
        <div className='flex justify-center flex-col text-3xl'>
          <span className='font-bold'>Satyam Shukla</span>
          <span className='text-xl'>Hates semi-colon</span>
        </div>
      </div>

      {/* options */}
      <div className="flex gap-8 flex-col text-2xl p-2 items-center justify-center">
        <button className="p-3.5 bg-gray-300 w-full text-black transition-all duration-300 hover:scale-110 cursor-pointer rounded-xl border-2 border-fuchsia-400 hover:font-extrabold hover:text-3xl">To-dos</button>
        <button className="p-3.5 bg-gray-300 w-full text-black transition-all duration-300 hover:scale-110 cursor-pointer rounded-xl border-2 border-fuchsia-400 hover:font-extrabold hover:text-3xl">Settings</button>
        <button className="p-3.5 bg-gray-300 w-full text-black transition-all duration-300 hover:scale-110 cursor-pointer rounded-xl border-2 border-fuchsia-400 hover:font-extrabold hover:text-3xl">AI</button>
      </div>
    </div>
  )
}

export default ProfileSideBar;