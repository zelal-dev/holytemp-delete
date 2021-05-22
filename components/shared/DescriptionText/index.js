import styled from "@emotion/styled"

const StyledDescriptionText = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #a5a5a5;
`

const DescriptionText = ({ children }) => {
  return <StyledDescriptionText>{children}</StyledDescriptionText>
}

export default DescriptionText
