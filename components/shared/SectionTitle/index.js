import styled from "@emotion/styled"

const StyledSectionTitle = styled.h2`
  color: #211e2d;
  font-weight: 600;
  font-size: 40px;
  line-height: 59px;
`
const SectionTitle = ({ children }) => {
  return <StyledSectionTitle>{children}</StyledSectionTitle>
}

export default SectionTitle
