import Navbar from "../Navbar"
import { Button } from "../shared"
import Styles from "./styles"

const HeroSection = () => {
  return (
    <Styles.Hero>
      <Styles.Wrapper>
        <Navbar />
        <Styles.Content>
          <Styles.Header>
            <h1>
              We Provide <span>Design Services</span> To Ready Made Products.
            </h1>
            <div>
              We have tried our best to come up with ideas that would mean a lot
              to you and your company. Wishing you good luck! Choose the best,
              choose from these handpicked ideas.
            </div>
            <Button>Start Now</Button>
          </Styles.Header>
          <Styles.Image>
            <img src='/hero-illustration.PNG' alt='HOLY TEMP' />
          </Styles.Image>
        </Styles.Content>
      </Styles.Wrapper>
    </Styles.Hero>
  )
}

export default HeroSection
