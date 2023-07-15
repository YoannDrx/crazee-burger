import styled from "styled-components";

export default function SelectInput({value, options, name, className, id, onChange, ...restProps}) {
	return (
		<SelectInputStyled value={value} name={name} className={className} id={id} onChange={onChange} {...restProps}>
          {options.map(({ value, label }) => (
            <option key={label} value={value}>
              {label}
            </option>
          ))}
        </SelectInputStyled>
	);
}

const SelectInputStyled = styled.select`
border: 3px solid red;
  
`;
