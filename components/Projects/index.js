import Styles from "./styles"
import { DescriptionText, SectionTitle } from "../shared"
const projects = [
  {
    id: 0,
    category: "Web Design",
    title: "Project 1",
    image: "/img/projects/project-1.PNG",
  },
  {
    id: 1,
    category: "Logo design",
    title: "Project 2",
    image: "/img/projects/project-2.PNG",
  },
  {
    id: 2,
    category: "Design",
    title: "Project 3",
    image: "/img/projects/project-3.PNG",
  },
  {
    id: 3,
    category: "Advertisement",
    title: "Project 4",
    image: "/img/projects/project-4.PNG",
  },
  {
    id: 4,
    category: "Brand",
    title: "Project 5",
    image: "/img/projects/project-5.PNG",
  },
  {
    id: 5,
    category: "Photo",
    title: "Project 6",
    image: "/img/projects/project-6.PNG",
  },
]

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
        {projects.map((project) => (
          <div key={project.id}>
            <img src={project.image} alt='' />
          </div>
        ))}
      </Styles.Grid>
    </Styles.Wrapper>
  )
}

export default Projects
