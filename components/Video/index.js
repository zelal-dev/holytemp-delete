import styled from "@emotion/styled"
import { DescriptionText, SectionTitle } from "../shared"
const Styles = {
  Wrapper: styled.section`
    height: 680px;
  `,
  Content: styled.div`
    background: #ffeee5;
    height: 400px;
  `,
  Flex: styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
  `,
  Img: styled.div`
    display: flex;
    justify-content: center;
  `,
}
const OurVideo = () => {
  return (
    <Styles.Wrapper>
      <Styles.Content>
        <SectionTitle center padding='60px 0px 18px 0px'>
          Our Video
        </SectionTitle>
        <Styles.Flex>
          <DescriptionText center color='#000'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A dictum
            eget eleifend quam. Orci quis et cras viverra feugiat pretium.
            Maecenas tortor, aliquet blandit ornare. Sem a mattis interdum
            consectetur.
          </DescriptionText>
        </Styles.Flex>
        <Styles.Img>
          <img src='/our-video.PNG' alt='video' />
        </Styles.Img>
      </Styles.Content>
    </Styles.Wrapper>
  )
}

export default OurVideo
