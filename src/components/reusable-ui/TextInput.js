import styled from "styled-components"
import { theme } from "../../theme"

export default function TextInput({ value, onChange, Icon, style, ...extraProps }) {
  return (
    <InputStyled style={style}>
      {Icon && Icon}
      <input onChange={onChange} type="text" {...extraProps} />
    </InputStyled>
  )
}

const InputStyled = styled.div`
  background-color: #fff;
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

  .icon {
    font-size: ${theme.fonts.size.SM};
    margin-right: 8px;
    color: ${theme.colors.greySemiDark};
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    width: 100%;

    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
  }
`
