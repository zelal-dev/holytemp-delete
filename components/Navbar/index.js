import Link from "next/link"
import { Button } from "../shared"
import Styles from "./styles"

const Navbar = () => {
  return (
    <Styles.Navbar>
      <Styles.Logo>
        I<span>T</span> AGENCY
      </Styles.Logo>
      <Styles.NavItem>Home</Styles.NavItem>
      <Styles.NavItem>Services</Styles.NavItem>
      <Styles.NavItem>Works</Styles.NavItem>
      <Styles.NavItem>Contact</Styles.NavItem>
      <Button>Get Started</Button>
    </Styles.Navbar>
  )
}

export default Navbar
