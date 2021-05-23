import styled from "@emotion/styled"

const Styles = {
  Wrapper: styled.footer`
    background: #211e2d;
    padding: 120px 120px 0px 120px;
    color: #ffffff;
    max-width: 1440px;
    h3 {
      font-weight: 600;
      font-size: 32px;
      line-height: 47px;
      margin-bottom: 12px;
      > span {
        color: #ff5300;
      }
    }
    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      padding-top: 8px;
    }
    li {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: #ffffff;
      padding: 8px;
    }
    > div {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 32px;
    }
  `,
  Credit: styled.p`
    text-align: center;
    border-top: 1px solid #ffffff;
    margin-top: 60px;
    padding: 12px;
    font-weight: 400;
  `,
  Social: styled.ul`
    display: flex;
    margin-top: 30px;
  `,
  ContactUs: styled.div`
    > h3 {
      margin-bottom: 20px;
    }
    > div {
      display: flex;
      align-items: center;
      margin-bottom: 28px;
    }
  `,
}

export default Styles
