import React from "react";
import Header from "../../../../reusable-ui/Header";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function BasketFooter() {
	return (
		<Header>
			<BasketFooterStyled>
				<span>Codé avec ❤️ et React.js par <a className="link" href="https://www.yodev.fr/">Yodev</a> </span>
			</BasketFooterStyled>
		</Header>
	);
}

const BasketFooterStyled = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	span {
		font-size: ${theme.fonts.size.P2};
		font-family: ${theme.fonts.family.stylish};
		font-weight: ${theme.fonts.weights.bold};
		color: ${theme.colors.white};
	}

	.link{
		text-decoration: none;
		color: ${theme.colors.primary};
	}
`;