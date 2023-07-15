import styled from "styled-components";

export default function SelectInput({options, className, id}) {
	return (
		<SelectInputStyled name="isAvailable" className={className} id={id}>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </SelectInputStyled>
	);
}

const SelectInputStyled = styled.select`
border: 3px solid red;
  
`;
