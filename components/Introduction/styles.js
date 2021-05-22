import styled from "@emotion/styled"

const Styles = {
  Wrapper: styled.section`
    display: flex;
    padding: 120px;
    align-items: flex-start;
  `,
  Call: styled.div`
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    & div:first-child {
      color: #ff5300;
      margin: 25px 0 18px 0;
      > span {
        color: #211e2d;
      }
    }
    > button {
      border: 1px solid #a5a5a5;
      border-radius: 30px;
      height: 40px;
      width: 370px;
      background: #fff;
      font-size: 16px;
      line-height: 24px;
      color: #a5a5a5;
      text-align: start;
      padding-left: 25px;
      margin-top: 16px;
      cursor: pointer;
    }
  `,
}

export default Styles
