import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=""/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusamus doloremque dolorum labore pariatur a!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis distinctio eos enim praesentium dolor expedita. Ipsa, praesentium incidunt.</p>
          <b className='text-gray-800'>OUR MISSION</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit aliquam odit ipsam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quaerat. Esse, eius.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet every product to ensure it meets our high standards of excellence. Our commitment to quality means you can shop with total confidence, knowing you’re receiving only the best..</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Enjoy a seamless shopping experience with our user-friendly interface and lightning-fast checkout process. We prioritize your time by offering hassle-free browsing and reliable delivery options tailored to your schedule.</p>
        </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our dedicated support team is available around the clock to assist you with any inquiries or concerns. We pride ourselves on providing personalized solutions to ensure your complete satisfaction with every purchase. className='text-gray-600'</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
