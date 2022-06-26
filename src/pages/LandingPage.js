import React from 'react'
import Logo from './Logo';
import "./../styles/landing.scss";
import Swipe from './Swipe';

import {Link} from 'react-router-dom';
import {Explore,Security,Navigation,Facebook,Twitter,Instagram,GitHub,ZoomIn,Person} from '@material-ui/icons'
export default function LandingPage() {
  return (
    <div className="land">
        <div className="header">
            <div className="header-bar">
                <div className="header-bar-left">
                    <Logo/>
                </div>
                <div className="header-bar-right">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/login" className="logs">Login</Link>
                    <Link to="/signup" className="logs">Sign Up</Link>
                </div>
            </div>
            <div className="header-bar-sec">
              <div className="sec-left">
                <h1>Explore the cultures and flavours by kitchens</h1>
                <small>About Our Company</small>
                <p>
                    The Grubhike company provides a place to customize,create,edit your food and start earning now.
                    For More Info...
                </p>
                <Link to="login" className="logs">Get Started or Join Now</Link>
              </div>
              <div className="sec-right">
                <Swipe/>
              </div>
            </div>
        </div>

        <div className="main">
           <h1>Our Features</h1>
           <h4>See Our Latest Features,Tools,etc...</h4>
           <div className="features">
            <div className="featureItem">
                <Navigation/>
                <p>Locate Easily</p>
            </div>

            <div className="featureItem">
                <Person/>
                <p>Right Choice</p>
            </div>

            <div className="featureItem">
                <Explore />
                <p>Explore World</p>
            </div>

            <div className="featureItem">
                <Security />
                <p>Secure</p>
            </div>
            
            <div className="featureItem">
                <ZoomIn />
                <p>Help & Support</p>
            </div>
           </div>
        </div>

        <div className="stage">
          <div className="leftstage">
            <div className="imgBox"></div>
          </div>
          <div className="rightstage">
              <h1><strong>Guest</strong> and <strong>Host</strong> in One Place.</h1>
              <p>
                    The Grubhike provides a place where guest and host meet and enjoy the meal.
                    For More Info...
              </p>
          </div>
        </div>

        <div className="connected">

        
            <ul>
              <li>
                <strong>Company</strong>
              </li>
              <li>About</li>
              <li>Careers</li>
              <li>Support</li>
              <li>API</li>
            </ul>

            <ul>
              <li>
                <strong>Brands</strong>
              </li>
              <li>Advertise with Us</li>
              <li>Tags</li>
              <li>Places</li>
            </ul>


            <ul>
              <li>
                <strong>Directories</strong>
              </li>
              <li>Achievements</li>
              <li>Ratings</li>
              <li>Privacy</li>
              <li>Terms and Conditions</li>
            </ul>



            <ul>
              <li>
                <strong>Blog</strong>
              </li>
              <li>Latest</li>
              <li>Popular</li>
              <li>Testimonials</li>
            </ul>


            <ul>
              <li>
                <strong>Follow Us</strong>
              </li>
              <li><Facebook/></li>
              <li><Instagram/></li>
              <li><Twitter/></li>
              <li><GitHub/></li>

            </ul>
        </div>

    </div>
  )
}
