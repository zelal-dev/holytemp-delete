import styled from "@emotion/styled"

const StyledIcon = styled.button`
  height: 40px;
  width: 40px;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  min-width: 40px;
  min-height: 40px;
  cursor: pointer;
  :hover {
    background-color: #ff5300;
    color: #ffffff;
  }
`
const IconButton = ({ icon }) => {
  return <StyledIcon>{icon}</StyledIcon>
}

export default IconButton
