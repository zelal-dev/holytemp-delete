import { DescriptionText, SectionTitle } from "../shared"
import Styles from "./styles"

const Introduction = () => {
  return (
    <Styles.Wrapper>
      <img src='/introduction-illustartion.PNG' alt='' />
      <div>
        <SectionTitle>Who We Are</SectionTitle>
        <DescriptionText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed
          vulputate dolor viverra porta natoque et at sit. Aliquet gravida
          scelerisque accumsan morbi iaculis. Non lorem justo pulvinar odio.
        </DescriptionText>
        <br />
        <DescriptionText>
          In semper dui, ut a. Condimentum varius bibendum eget velit, eget
          aliquet non dictum. Placerat tincidunt cursus est lectus. Nunc
          sagittis ut arcu magna laoreet.
        </DescriptionText>
        <Styles.Call>
          <div>
            Just Call Us Now <span>or</span> Request Call
          </div>
          <div>
            (308) 555-0121 <span style={{ color: " #ff5300" }}>&#38;</span>{" "}
            (225) 555-0118
          </div>
          <button>REQUEST A CALL</button>
        </Styles.Call>
      </div>
    </Styles.Wrapper>
  )
}

export default Introduction
