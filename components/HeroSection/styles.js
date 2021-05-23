import styled from "@emotion/styled"

const Styles = {
  Hero: styled.section`
    background: #ffeee5;
    margin: auto;
    border-radius: 30px;
    margin: 30px;
  `,
  Wrapper: styled.div`
    padding: 16px 105px;
  `,
  Content: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 120px 0px;
  `,
  Header: styled.header`
    width: 50%;
    > h1 {
      font-weight: bold;
      font-size: 48px;
      color: #211e2d;
      line-height: 73px;
      margin-bottom: 18px;
      > span {
        color: #ff5300;
      }
    }

    > div {
      color: #a5a5a5;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 35px;
    }
  `,
  Image: styled.div`
    width: 50%;
    > img {
      width: 100%;
      height: auto;
      max-height: 600px;
    }
  `,
}

export default Styles
