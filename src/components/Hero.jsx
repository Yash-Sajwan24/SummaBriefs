// import React from 'react'
// import {newLogo} from '../assets'
// import { ReactComponent as NewLogo } from '../assets/newLogo.svg'
import logo from '../assets/Logo.png'


const Hero = () => {
  // console.log(newLogo)
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img
          src={logo}
          width={250}
          height={250}
          style={{ borderRadius : '2rem'}}
        />
       
        <button
          type='button'
          onClick={() => window.open('https://github.com/Yash-Sajwan24')}
          className='black_btn'
        >My Github</button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden'/>
        <span className='orange_gradient'> OpenAI GPT-4 </span>
      </h1>

      <h2 className='desc'>
        An open-source article summarizer that streamlines content creation & curation. Transform lengthy articles into concise summaries effortlessly, allowing you to grasp key points without spending hours reading. 
      </h2>

    </header>
  )
}

export default Hero
