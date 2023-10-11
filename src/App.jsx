import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='md:h-screen w-full py-5 md:py-8 xl:py-[65px] overflow-hidden bg-[#2F1893] flex justify-center items-center'>
        <div className=' h-full w-[90%] relative md:w-[80%] lg:w-[80%] xl:w-[70%]'>
            <div className='w-full mb-5 md:mb-0 flex items-center text-white justify-between'>
              <span className='font-medium text-[24px]'>Startup 3</span>
              <div className='md:flex hidden gap-[34px] items-center'>
                <span>Overview</span>
                <span>Prices</span>
                <span>Blog</span>
                <span>Feedback</span>
                <button className='bg-[#E93A7D]  w-[120px] h-[40px] rounded-full'>Purchase</button>
              </div>
              <div onClick={()=> setToggle(prev=>!prev)} className='flex gap-1 md:hidden items-center flex-col'>
                <span className='w-5 h-[2px] bg-white rounded-full '></span>
                <span className='w-5 h-[2px] bg-white rounded-full '></span>
                <span className='w-5 h-[2px] bg-white rounded-full '></span>
              </div>
            </div>
            {toggle && <div className='flex text-white font-medium text-xl absolute w-full py-10 px-5 flex-col gap-5 items-center justify-center bg-[#2F1893] shadow-sm shadow-white'>
              <span>Overview</span>
                <span>Prices</span>
                <span>Blog</span>
                <span>Feedback</span>
                <button className='bg-[#E93A7D]  w-[120px] h-[40px] rounded-full'>Purchase</button>
            </div>}

            <div className='flex mt-10 md:mt-0 w-full md:flex-row flex-col text-white h-full justify-between'>
                <div className=' h-full gap-2 md:gap-5 flex flex-col justify-center flex-1'>
                  <span className=' w-full md:w-[400px] text-[30px] md:text-[40px] lg:text-[58px] font-medium leading-tight'>Generate Awesome Web Pages</span>
                  <p className=' text-[18px] md:text-[22px] w-full md:w-[360px]'>The most important part of the Startup is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks.</p>
                  <button className=' w-[157px] mt-5 h-[50px] bg-[#E93A7D] rounded-full'>Learn more</button>
                </div>

                <div className='md:flex-1 h-full justify-start flex md:justify-end items-center'>
                  <form className=' h-auto md:h-[500px] gap-5 py-2 md:py-0 w-[450px] bg-white rounded flex flex-col justify-center items-center'>
                      <h1 className=' text-[32px] md:text-[42px] text-[#1E0E62] font-medium'>Sign Up Now</h1>
                      <input type='text' placeholder='Your Email' className='rounded-full border-[2px] border-[#EBEAED] w-[330px] py-2 px-4 outline-none'/>
                      <input type='text' placeholder='Your Password' className='rounded-full border-[2px] border-[#EBEAED] w-[330px] py-2 px-4 outline-none'/>
                      <div className='flex gap-2 w-[330px] items-center justify-start ml-4'>
                          <input type='checkbox' checked={true} className='rounded-md accent-teal-400 p-1 outline-none h-[18px] w-[18px]  cursor-pointer'/>
                          <p className='text-[#151439]'>I agree to the Terms of service</p>
                      </div>
                      <button className=' w-[330px] h-[50px] bg-[#482BE7] rounded-full'>Sign in</button>
                      <div className='flex w-[330px] items-center gap-2'>
                        <span className='border-t-[1px] w-full'></span>
                        <span className='text-[#151439]'>or</span>
                        <span className='border-t-[1px] w-full'></span>
                      </div>
                      <button className=' w-[330px] h-[50px] bg-[#1DA1F2] rounded-full'>Login via Twitter</button>
                      <div className='flex gap-2'>
                        <span className='text-[#151439] text-[18px]'>Do you have account?</span>
                        <span className='text-[#25DAC5] text-[18px]'>Sign in</span>
                      </div>
                  </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App
