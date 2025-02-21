import { assets } from '../../assets/frontend_assets/assets'
import './Footer.css'

function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-context-left">
           <img src={assets.logo} alt="" />
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestias libero earum quisquam possimus vero ad omnis sunt, fugit rem.</p>
           <div className="footer-social-icons">
               <img src={assets.facebook_icon} alt="" />
               <img src={assets.twitter_icon} alt="" />
               <img src={assets.linkedin_icon} alt="" />
           </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
             <h2>Get In Touch</h2>
             <ul>
                <li>+1 657-890-4567</li>
                <li>contact@tomato.com</li>
             </ul>
        </div>

        
      </div>
      <hr />
      <p>Copy Right Text</p>
    </div>
  )
}

export default Footer
