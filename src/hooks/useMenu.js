import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deeplClone } from "../utils/array";

export const useMenu = () => {
	const [menu, setMenu] = useState(fakeMenu.LARGE);

	const handleAdd = (newProduct) => {
		// 1. copie du tableau
		const menuCopy = deeplClone(menu);

		// 2. manip de la copie du tableau
		const menuUpdated = [newProduct, ...menuCopy];

		// 3. update du state
		setMenu(menuUpdated);
	};

	const handleDelete = (idOfProductToDelete) => {
		//1. copy du state
		const menuCopy = deeplClone(menu);

		//2. manip de la copie state
		const menuUpdated = menuCopy.filter((product) => product.id !== idOfProductToDelete);

		//3. update du state
		setMenu(menuUpdated);
	};

	const handleEdit = (productBeingEdited) => {
		// 1. copie du tableau
		const menuCopy = deeplClone(menu);

		// 2. manip de la copie du tableau
		const indexofProductBeingEdited = menuCopy.findIndex((product) => product.id === productBeingEdited.id);

		menuCopy[indexofProductBeingEdited] = productBeingEdited;

		// 3. update du state
		setMenu(menuCopy);
	};

	const resetMenu = () => {
		setMenu(fakeMenu.MEDIUM);
	};

	return { menu, handleAdd, handleDelete, handleEdit, resetMenu };
};
