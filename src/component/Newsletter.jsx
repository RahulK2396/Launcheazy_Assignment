import React from 'react'
import "../assets/SCSS/Footer.scss"

function Newsletter() {
    return (
        <div className='newsletter'>
            <div className='left-width'>
                <span>newsletter</span>
                <h5>The AI Launch<span style={{color:'#007bff'}}>pad</span> 🚀</h5>
                <p>Receive must-read articles and trends on marketing and artificial intelligence, from leading publications in your inbox.</p>
            </div>
            <div>
                <form class="form-inline">
                    <div class="form-group mb-2 form-div" style={{    gap: "10px"}}>

                        <input type="text" id="staticEmail2" value="" />
                        <button type="submit" class="btn btn-primary mb-2 btn-color">Subscribe</button>
                    </div>

                </form>
                By signing up, you are agreeing to our <span style={{color:'#007bff'}}>privacy statement.</span>
            </div>
        </div>
    )
}

export default Newsletter