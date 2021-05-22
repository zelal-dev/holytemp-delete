import { StyledButton } from "./styles"

const Button = ({ children, variant }) => {
  return <StyledButton variant={variant}>{children}</StyledButton>
}

export default Button
