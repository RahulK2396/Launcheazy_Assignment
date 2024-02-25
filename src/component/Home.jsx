import React from 'react'
import TextAnimation from './TextAnimation'
import '../assets/SCSS/Home.scss'

function Home() {
  return (
    <div className='home-container'>
      <div>
        <p className='border-p'>Our Exclusive beta is live. <span className='blue-text'>Sign up for free</span></p>
      </div>
      <TextAnimation />
      <h1 className='animation_space'>in 3 clicks for your business</h1>
      <p className='p-content'> Simplify your marketing efforts with AI. Use a collection of ready-made, successful marketing strategies that practically run themselves.</p>
      <form class="form-inline">
        <div class="form-group mb-2 form-div">

          <input type="text"  id="staticEmail2" value="" />
        <button type="submit" class="btn btn-primary mb-2 btn-color">Join the waitlist</button>
        </div>

      </form>
      <p className='p-div'>Get access to a comprehensive directory of <span className='color-orange'> AI Tools </span>  and <br/> <span className='color-green'> ChatGPT Prompts</span> to elevate your business.</p>
    </div>
  )
}

export default Home