import { css } from "@emotion/react"
import styled from "@emotion/styled"

const StyledDescriptionText = styled.p(
  ({ center, color = "#a5a5a5" }) => css`
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: ${color};
    width: ${center ? "500px" : "auto"};
    text-align: ${center ? "center" : "start"};
  `
)

const DescriptionText = ({ children, center, color }) => {
  return (
    <StyledDescriptionText center={center} color={color}>
      {children}
    </StyledDescriptionText>
  )
}

export default DescriptionText
