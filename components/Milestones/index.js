import { Card, DescriptionText, SectionTitle } from "../shared"

const MileStone = () => {
  return (
    <div>
      <SectionTitle>Our Milestones</SectionTitle>
      <DescriptionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio dolor,
        faucibus proin eget leo ac et amet proin. Turpis malesuada facilisis
        egestas condimentum.
      </DescriptionText>
      <Card>
        <img src='/milestone-image.PNG' alt='MILESTONE-1' />
        <h3>Strategy</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </Card>
      <Card>
        <img src='/milestone-image.PNG' alt='MILESTONE-1' />
        <h3>Design</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </Card>
      <Card>
        <img src='/milestone-image.PNG' alt='MILESTONE-1' />
        <h3>Development</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </Card>
      <Card>
        <img src='/milestone-image.PNG' alt='MILESTONE-1' />
        <h3>Support</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </Card>
    </div>
  )
}

export default MileStone
