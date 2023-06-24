import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import Header from "../../../../reusable-ui/Header";

export default function Total({ amountToPay }) {
	return (
		<Header>
      <TotalStyled>
        <span className="total">Total</span>
        <span className="amount">{amountToPay}</span>
      </TotalStyled>
    </Header>
	);
}

const TotalStyled = styled.div`
	height: 100%;
	color: ${theme.colors.primary};
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-family: "Amatic SC", cursive;
	font-weight: ${theme.fonts.weights.bold};
	font-size: ${theme.fonts.size.P4};
	letter-spacing: 2px;
`;
