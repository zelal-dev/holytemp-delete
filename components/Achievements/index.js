import { Card, DescriptionText, SectionTitle } from "../shared"

const Achievements = () => {
  return (
    <>
      <SectionTitle>Achievements</SectionTitle>
      <DescriptionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. A dictum eget
        eleifend quam. Orci quis et cras viverra feugiat pretium. Maecenas
        tortor, aliquet blandit ornare. Sem a mattis interdum consectetur.
      </DescriptionText>
      <img src='/achievement-illustration.PNG' alt='Achievements' />
      <Card>
        <h3>250+</h3>
        <p>Projects Completed</p>
      </Card>
      <Card>
        <h3>146+</h3>
        <p>Happy Clients</p>
      </Card>
      <Card>
        <h3>50+</h3>
        <p>Awards Earned</p>
      </Card>
      <Card>
        <h3>5+</h3>
        <p>Years of Experience</p>
      </Card>
    </>
  )
}

export default Achievements
