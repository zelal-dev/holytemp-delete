import { DescriptionText, SectionTitle } from "../shared"

const Projects = () => {
  return (
    <>
      <SectionTitle>Our Projects</SectionTitle>
      <DescriptionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. A dictum eget
        eleifend quam. Orci quis et cras viverra feugiat pretium. Maecenas
        tortor, aliquet blandit ornare. Sem a mattis interdum consectetur.
      </DescriptionText>
      <ul>
        <li>
          <a href='#'>All</a>
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
      <img src='/project-image.PNG' alt='PROJECT TITLE ' />
      <img src='/project-image.PNG' alt='PROJECT TITLE ' />
      <img src='/project-image.PNG' alt='PROJECT TITLE ' />
      <img src='/project-image.PNG' alt='PROJECT TITLE ' />
      <img src='/project-image.PNG' alt='PROJECT TITLE ' />
      <img src='/project-image.PNG' alt='PROJECT TITLE ' />
    </>
  )
}

export default Projects
