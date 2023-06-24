import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deeplClone } from "../utils/array";

export const useBasket = () => {
	const [basket, setBasket] = useState(fakeBasket.LARGE);

	const handleAddToBasket = (productToAdd) => {
		// 1. copie du tableau
		const basketCopy = deeplClone(basket);

		const isProductAlreadyInBasket = basketCopy.find(productToAdd.id, basketCopy) !== undefined;

		// 2. manip de la copie du tableau
		// 1er cas : le produit n'est pas déjà dans le basket
		if (!isProductAlreadyInBasket) {
			const newBasketProduct = {
				...productToAdd,
				quantity: 1,
			};

			const basketUpdated = [newBasketProduct, ...basketCopy];

			// 3. update du state
			setBasket(basketUpdated);
		}

		// 2ème cas : le produit est déjà dans le basket
		if (isProductAlreadyInBasket) {
		}
	};
	return { basket, handleAddToBasket };
};
