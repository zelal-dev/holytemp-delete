import { StyledButton } from "./styles"

const Button = ({ children, variant, width }) => {
  return (
    <StyledButton variant={variant} width={width}>
      {children}
    </StyledButton>
  )
}

export default Button
