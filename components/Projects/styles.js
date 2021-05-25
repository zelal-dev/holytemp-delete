import styled from "@emotion/styled"

const Styles = {
  Wrapper: styled.section`
    margin: 120px;
    > ul {
      display: flex;
      align-items: center;
      justify-content: center;
      > li {
        padding: 16px;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        text-align: center;
        color: #211e2d;
      }
    }
  `,
  Flex: styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
  `,
  Grid: styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
    grid-auto-rows: 350px;
    > div {
      background: green;
      overflow: hidden;

      > img {
        width: 100%;
      }
    }
  `,
}

export default Styles
