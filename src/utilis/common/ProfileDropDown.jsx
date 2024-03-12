import React from 'react'

const ProfileDropDown = ({handleLogout}) => {
  return (
    <div>
        <div className="w-[200px] h-auto absolute z-10 right-0 mt-2 bg-black bg-opacity-75 border border-white border-opacity-15 text-white cursor-default text-sm leading-[21px] opacity-100 transition-opacity duration-[5000] px-[10px] py-[10px]">
    
      <ul>
        <li className='py-[5px] cursor-pointer hover:underline'>change Profile</li>
        <li className='py-[5px]  cursor-pointer hover:underline' onClick={handleLogout}>Sign out of Netflix</li>
      </ul>
</div>
    </div>
  )
}

export default ProfileDropDown