import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { DescriptionText, SectionTitle } from "../shared"
const Styles = {
  Wrapper: styled.section`
    margin: 120px;
  `,
  Flex: styled.div(
    ({ margin }) => css`
      display: flex;
      justify-content: center;
      margin: ${margin};
    `
  ),
  Card: styled.div(
    ({ mt }) => css`
      width: 270px;
      height: 250px;
      background: #ffffff;
      box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 30px;
      margin-top: ${mt && mt};
      > h3 {
        font-weight: bold;
        font-size: 48px;
        line-height: 73px;
        color: #373737;
      }
      > p {
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        color: #7b7b7b;
      }
    `
  ),
}
const Achievements = () => {
  return (
    <Styles.Wrapper>
      <SectionTitle center>Achievements</SectionTitle>
      <Styles.Flex margin='0px 0px 24px 0px'>
        <DescriptionText center>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A dictum eget
          eleifend quam. Orci quis et cras viverra feugiat pretium. Maecenas
          tortor, aliquet blandit ornare. Sem a mattis interdum consectetur.
        </DescriptionText>
      </Styles.Flex>
      <Styles.Flex>
        <img src='/img/svgs/achichievements.svg' alt='Achievements' />
        <div>
          <Styles.Flex>
            <Card name='Projects Completed' number='250+' />
            <Card name='Happy Clients' number='146+' mt='30px' />
          </Styles.Flex>
          <Styles.Flex>
            <Card name='Awards Earned' number='50+' />
            <Card name='Years of Experience' number='5+' mt='30px' />
          </Styles.Flex>
        </div>
      </Styles.Flex>
    </Styles.Wrapper>
  )
}

export default Achievements
const Card = ({ number, name, mt }) => {
  return (
    <Styles.Card mt={mt}>
      <h3>{number}</h3>
      <p>{name}</p>
    </Styles.Card>
  )
}
