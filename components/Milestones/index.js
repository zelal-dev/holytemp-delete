import styled from "@emotion/styled"
import { Card, DescriptionText, SectionTitle } from "../shared"
const Styles = {
  Wrapper: styled.section`
    margin: 120px;
  `,
  Flex: styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
  `,
  Card: styled.div`
    background: #ffffff;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 30px;
    margin-right: 30px;
    max-width: 270px;
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    > h3 {
      text-align: center;
      padding: 24px;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: #000000;
    }
    > p {
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #a5a5a5;
    }
  `,
}

const MileStone = () => {
  const cards = [
    {
      id: 1,
      title: "Strategy",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      img: "/milestone-image.PNG",
    },
    {
      id: 2,
      title: "Design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      img: "/milestone-image.PNG",
    },
    {
      id: 3,
      title: "Development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      img: "/milestone-image.PNG",
    },
    {
      id: 4,
      title: "Support",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      img: "/milestone-image.PNG",
    },
  ]
  return (
    <Styles.Wrapper>
      <SectionTitle center>Our Milestones</SectionTitle>
      <Styles.Flex>
        <DescriptionText center>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio dolor,
          faucibus proin eget leo ac et amet proin. Turpis malesuada facilisis
          egestas condimentum.
        </DescriptionText>
      </Styles.Flex>
      <Styles.Flex>
        {cards.map((card) => (
          <Styles.Card key={card.id}>
            <div>
              <img
                src={card.img}
                alt={card.title}
                style={{ height: "134px", width: "134px" }}
              />
            </div>
            <h3>{card.title}</h3>
            <p>{card.desc} </p>
          </Styles.Card>
        ))}
      </Styles.Flex>
    </Styles.Wrapper>
  )
}

export default MileStone
