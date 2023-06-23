import React, { useContext } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../../../../../enums/product";
import Button from "../../../../../../reusable-ui/Button";
import Form from "./Form";
import SubmitMessage from "./SubmitMessage";
import { useSuccessMessage } from "../../../../../../../hooks/useSuccesMessage";

export default function AddForm() {
	// state
	const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
	const { isSubmitted, displaySuccessMessage } = useSuccessMessage(5000);

	// comportements
	const handleSubmit = (event) => {
		event.preventDefault();
		const newProductToAdd = {
			...newProduct,
			id: crypto.randomUUID(),
		};

		handleAdd(newProductToAdd);
		setNewProduct(EMPTY_PRODUCT);

		displaySuccessMessage();
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setNewProduct({ ...newProduct, [name]: value });
	};

	// affichage
	return (
		<Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
			<>
				<Button className="submit-button" label={"Ajouter un nouveau produit au menu"} version="success" />
				{isSubmitted && <SubmitMessage />}
			</>
		</Form>
	);
}
