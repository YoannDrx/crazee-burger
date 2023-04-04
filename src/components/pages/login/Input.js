import styled from 'styled-components';

export default function Input({ value, onChange, Icon, ...restProps }) {

    
    return (
        <InputStyled>
            {Icon && Icon}
            <input value={value} onChange={onChange} type="text" {...restProps}/>
        </InputStyled>
    );
}

const InputStyled = styled.div`
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        margin: 18px 0;
        padding: 18px 24px;
        white-space: nowrap;
        width: 100%;

    .icon {
        color: #93a2b1;
        margin: 0 8px;
        font-size: 15px;
        min-width: 1em;
    }
    
    input {
        border: none;
        font-size: 15px;
        width: 100%;
        display: flex;
        color: #17161a;
    }

    &::placeholder {
        backgorund: white;
        color: lightgrey;
    }
`;