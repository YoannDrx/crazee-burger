import styled from "styled-components"

export default function Basket() {
  return <BasketStyled>
    <div className="head">Head</div>
    <div className="body">Body</div>
    <div className="footer">Footer</div>
  </BasketStyled>
}

const BasketStyled = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;

  .head{
    border: 3px solid red;
  }

  .body{
    border: 3px solid blue;
  }

  .footer{
    border: 3px solid green;
  }
`
