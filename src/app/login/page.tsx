
import InputPassword from '@/components/input/InputPassword'
import InputText from '@/components/input/InputText'
import React from 'react'
import { PiSignInLight } from 'react-icons/pi'

const page = () => {
  return (
    <div style={{ backgroundImage: 'url("/images/bg.jpg")' }} className='bg-cover bg-center h-screen'>
      <div className='container-fluid mx-auto flex justify-end items-center min-h-screen'>
        <div className='bg-[#ffffffeb] p-10  h-screen backdrop-blur-3xl flex justify-end items-center'>
          <div>
            <center><PiSignInLight /></center>
            <center className='text-[32px] text-[#030708] KantumruyProMedium'>Sign In</center>
            <InputText />'
            <br />
            <InputPassword />
          </div>
        </div>
      </div>
    </div>

  )
}

export default page