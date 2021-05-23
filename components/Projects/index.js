import styled from "@emotion/styled"
import { DescriptionText, SectionTitle } from "../shared"
const Styles = {
  Wrapper: styled.section`
    margin: 120px;
    > ul {
      display: flex;
      align-items: center;
      justify-content: center;
      > li {
        padding: 16px;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        text-align: center;
        color: #211e2d;
      }
    }
  `,
  Flex: styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
  `,
  Grid: styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
    grid-auto-rows: 350px;
    > div {
      background: green;
      overflow: hidden;

      > img {
        width: 100%;
      }
    }
  `,
}
const Projects = () => {
  return (
    <Styles.Wrapper>
      <SectionTitle center>Our Projects</SectionTitle>
      <Styles.Flex>
        <DescriptionText center>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A dictum eget
          eleifend quam. Orci quis et cras viverra feugiat pretium. Maecenas
          tortor, aliquet blandit ornare. Sem a mattis interdum consectetur.
        </DescriptionText>
      </Styles.Flex>
      <ul>
        <li>
          <a style={{ color: "#FF5300" }} href='#'>
            All
          </a>
        </li>
        <li>
          <a href='#'>Logo Design</a>
        </li>
        <li>
          <a href='#'>Design</a>
        </li>
        <li>
          <a href='#'>Web Design</a>
        </li>
        <li>
          <a href='#'>Advertisement</a>
        </li>
        <li>
          <a href='#'>Brand</a>
        </li>
        <li>
          <a href='#'>Photo</a>
        </li>
      </ul>
      <Styles.Grid>
        <div>
          <img src='/project-image.PNG' alt='PROJECT TITLE ' />
        </div>
        <div>
          <img src='/project-image.PNG' alt='PROJECT TITLE ' />
        </div>
        <div>
          <img src='/project-image.PNG' alt='PROJECT TITLE ' />
        </div>
        <div>
          <img src='/project-image.PNG' alt='PROJECT TITLE ' />
        </div>
        <div>
          <img src='/project-image.PNG' alt='PROJECT TITLE ' />
        </div>
        <div>
          <img src='/project-image.PNG' alt='PROJECT TITLE ' />
        </div>
      </Styles.Grid>
    </Styles.Wrapper>
  )
}

export default Projects
