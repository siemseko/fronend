'use client'
import React, { useState } from 'react'
import { MdPhoneMissed } from 'react-icons/md'
import { PiLockKey } from 'react-icons/pi';

const InputPassword = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState('');
    return (
        <>
            <div className='relative'>
                <div className={`absolute bg-white mx-3 px-2 KantumruyProMedium text-[16px] text-[#7071738c] transition-all duration-200 ${isFocused || value ? 'top-[-9px] text-[11px] px-1' : 'top-[20px] text-[18px]'}`}>
                    លេខសម្ងាត់<span className='text-[#f24c4c]'>*</span>
                </div>
                <input
                    type="password"
                    placeholder=' '
                    className='w-[100%] p-4 text-[18px] text-[#0000004a] rounded-[12px] outline-none border-[2px] border-[#7071733e] KantumruyProMedium pr-10'
                    onFocus={() => setIsFocused(true)}
                    onBlur={(e) => setIsFocused(!!e.target.value)}
                />
                <div className='absolute right-3 top-1/2 transform -translate-y-1/2 text-[#7071738c]'>
                    <PiLockKey size={23} />
                </div>
            </div>

        </>

    )
}

export default InputPassword