import styled from "@emotion/styled"

const Styles = {
  Navbar: styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  Logo: styled.span`
    color: #583bd1;
    font-weight: 600;
    font-size: 31.25px;
    line-height: 47px;
    margin-right: auto;
    > span {
      color: #ff5300;
    }
  `,
  NavItem: styled.span`
    color: #211e2d;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    margin-right: 65px;
  `,
}

export default Styles
