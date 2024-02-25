import React from 'react'
import logo from "../assets/images/Logo.svg"
import smicon from "../assets/images/sm-icons.svg"
import Newsletter from './Newsletter'
import Copyright from './Copyright'
import "../assets/SCSS/Footer.scss"

function Footer() {
  return (
    <div className='footer-details'>
        <div className='column-div'>
        <div className='flex-column-div'>
        <img style={{width:'130px'}} class="navbar-brand" src={logo}/>
        <span>Engage customers, convert prospects effortlessly</span>
        <img style={{width: '78px'}} src={smicon}/>
        </div>
        <div className='ai-content'>
            <div>
                <span>AI Tools</span>
                <p>ChatGPT Prompts</p>
                <p>AI Tools Directory</p>
                <p>AI QR Generator</p>
            </div>
            <div>
                <span>Resources</span>
                <p>Marketplaces</p>
                <p>Blogsy</p>
                <p>Help Center</p>
            </div>
            <div>
                <span>Company</span>
                <p>About Us</p>
                <p>Pricing</p>
                <p>Contact Us</p>
            </div>
        </div>
        </div>
        <Newsletter/>
        <Copyright/>
    </div>
  )
}

export default Footer