import styled from "@emotion/styled"

const StyledButton = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 32px;
  height: 50px;
  background: #ff5300;
  border-radius: ${({ variant }) => (variant === "square" ? "0px" : "30px")};
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  font-family: Raleway;
  line-height: 30px;
`
export { StyledButton }
