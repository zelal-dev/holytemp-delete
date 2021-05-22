import { css } from "@emotion/react"
import styled from "@emotion/styled"

const StyledSectionTitle = styled.h2(
  ({ center, padding }) => css`
    color: #211e2d;
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;
    margin-bottom: 18px;
    text-align: ${center ? "center" : "start"};
    padding: ${padding && padding};
  `
)
const SectionTitle = ({ children, center, padding }) => {
  return (
    <StyledSectionTitle center={center} padding={padding}>
      {children}
    </StyledSectionTitle>
  )
}

export default SectionTitle
