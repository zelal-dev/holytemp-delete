import styled from "@emotion/styled"

const StyledCard = styled.div`
  width: 270px;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
`
const Card = ({ children }) => {
  return <StyledCard>{children}</StyledCard>
}

export default Card
