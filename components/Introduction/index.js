import styled from "@emotion/styled"
import { DescriptionText, SectionTitle } from "../shared"

const Introduction = () => {
  const Styles = {
    Wrapper: styled.div``,
    Call: styled.div``,
  }
  return (
    <Styles.Wrapper>
      <img src='/introduction-illustartion.PNG' alt='' />
      <SectionTitle>Who We Are</SectionTitle>
      <DescriptionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed
        vulputate dolor viverra porta natoque et at sit. Aliquet gravida
        scelerisque accumsan morbi iaculis. Non lorem justo pulvinar odio.{" "}
      </DescriptionText>
      <DescriptionText>
        In semper dui, ut a. Condimentum varius bibendum eget velit, eget
        aliquet non dictum. Placerat tincidunt cursus est lectus. Nunc sagittis
        ut arcu magna laoreet.
      </DescriptionText>
      <Styles.Call>
        <div>Just Call Us Now or Request Call</div>
        <div>(308) 555-0121 & (225) 555-0118</div>
        <button>REQUEST A CALL</button>
      </Styles.Call>
    </Styles.Wrapper>
  )
}

export default Introduction
