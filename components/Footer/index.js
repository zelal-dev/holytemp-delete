import { FaInstagram, FaFacebookF } from "react-icons/fa"
import { SiSkypeforbusiness } from "react-icons/si"
import { FiTwitter } from "react-icons/fi"
import { RiYoutubeLine } from "react-icons/ri"
import { GrLocation } from "react-icons/gr"
import { BiMessageAlt, BiPhone } from "react-icons/bi"
import Styles from "./styles"
import IconButton from "./IconButton"

const Footer = () => {
  return (
    <Styles.Wrapper>
      <div>
        <div>
          <h3>
            <span>IT</span> AGENCY
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu quam
            bibendum faucibus ultrices cras metus, eget duis pellentesque.
          </p>
          <Styles.Social>
            <IconButton icon={<FaInstagram size='16px' />} />
            <IconButton icon={<FaFacebookF size='16px' />} />
            <IconButton icon={<SiSkypeforbusiness size='16px' />} />
            <IconButton icon={<FiTwitter size='16px' />} />
            <IconButton icon={<RiYoutubeLine size='16px' />} />
          </Styles.Social>
        </div>
        <div>
          <h3>Our Services</h3>
          <ul>
            <li>Web Design</li>
            <li>Web Development</li>
            <li>Seo Marketing</li>
            <li>Brand</li>
          </ul>
        </div>
        <div>
          <h3>Useful Links</h3>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Work</li>
          </ul>
        </div>
        <Styles.ContactUs>
          <h3>Contact Us</h3>
          <div>
            <IconButton icon={<GrLocation size='16px' />} />
            <div>1901 Thornridge Cir. Shiloh, Hawaii 81063</div>
          </div>
          <div>
            <IconButton icon={<BiPhone size='16px' />} />
            <div>(307) 555-0133</div>
          </div>
          <div>
            <IconButton icon={<BiMessageAlt size='16px' />} />
            <div>info@youremail.com</div>
          </div>
        </Styles.ContactUs>
      </div>
      <Styles.Credit>
        &copy; Copyright 2021. JS Template. All Right reserved.
      </Styles.Credit>
    </Styles.Wrapper>
  )
}

export default Footer
