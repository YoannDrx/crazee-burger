import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { theme } from "../../../../../../theme";
import { formatPrice } from "../../../../../../utils/maths";
import Card from "../../../../../reusable-ui/Card";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfProductIsClicked } from "./helper";
import { EMPTY_PRODUCT, IMAGE_COMING_SOON } from "../../../../../../enums/product";
import { findInArray } from "../../../../../../utils/array";

export default function Menu() {
	// state
	const {
		menu,
		isModeAdmin,
		handleDelete,
		resetMenu,
		productSelected,
		setProductSelected,
		setIsCollapsed,
		setCurrentTabSelected,
		titleEditRef,
		handleAddToBasket,
	} = useContext(OrderContext);

	// comportements
	if (menu.length === 0) {
		if (!isModeAdmin) return <EmptyMenuClient />;
		return <EmptyMenuAdmin onReset={resetMenu} />;
	}

	const handleClick = async (idProductClicked) => {
		if (!isModeAdmin) return;
		await setIsCollapsed(false);
		await setCurrentTabSelected("edit");
		const productClickedOn = findInArray(idProductClicked, menu);
		await setProductSelected(productClickedOn);
		titleEditRef.current.focus();
	};

	const handleCardDelete = (event, id) => {
		event.stopPropagation(id);
		handleDelete(id);

		if (productSelected.id === id) {
			setProductSelected(EMPTY_PRODUCT);
		}
	};

	const handleAddButton = (event, id) => {
		event.stopPropagation();
		const productToAdd = findInArray(id, menu);
		handleAddToBasket(productToAdd);
	};

	// affichage
	return (
		<MenuStyled className="menu">
			{menu.map(({ id, title, imageSource, price }) => {
				return (
					<Card
						key={id}
						title={title}
						imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
						leftDescription={formatPrice(price)}
						hasDeleteButton={isModeAdmin}
						onDelete={(event) => handleCardDelete(event, id)}
						onClick={() => handleClick(id)}
						isHoverable={isModeAdmin}
						isSelected={isModeAdmin && checkIfProductIsClicked(id, productSelected.id)}
						onAdd={(event) => handleAddButton(event, id)}
					/>
				);
			})}
		</MenuStyled>
	);
}

const MenuStyled = styled.div`
	background: ${theme.colors.background_white};
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	/* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
	grid-row-gap: 60px;
	padding: 50px 50px 150px;
	justify-items: center;
	box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
	overflow-y: scroll;
`;
