import React from 'react'
import "../assets/SCSS/Goodbye.scss"
function Goodbye() {
  return (
    <div className='goodbye'>
      <div style={{    width: '34%'}}>
      <h2>
      Say goodbye to ✋🏻 excessive  spending on designers, experts, and multiple tools
      </h2>
      <span className='goodbye-p'>
      Say hello to Launcheazy - your superstar marketer in your pocket!
      </span>
      <form class="form-inline">
        <div class="form-group mb-2 form-div" style={{    gap: "10px"}}>

          <input type="text" placeholder='Enter your work email'  id="staticEmail2" value="" />
        <button type="submit" style={{backgroundColor:'black'}} class="btn btn-primary  btn-color">Join the waitlist</button>
        </div>

      </form>
      </div>
    </div>
  )
}

export default Goodbye