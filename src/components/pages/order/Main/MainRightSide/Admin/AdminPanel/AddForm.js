import { useContext, useState } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../../../../../enums/product";
import Form from "./Form";
import Button from "../../../../../../reusable-ui/Button";
import SubmitMessage from "./SubmitMessage";

export default function AddForm() {
	// state
	const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
	const [isSubmitted, setIsSubmitted] = useState(false);

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

	const displaySuccessMessage = () => {
		setIsSubmitted(true);
		setTimeout(() => {
			setIsSubmitted(false);
		}, 2000);
	};

	// affichage
	return (
		<Form onSunbmit={handleSubmit} onChange={handleChange} product={newProduct} isSubmitted={isSubmitted}>
			<>
				<Button className="submit-button" label={"Ajouter un nouveau produit au menu"} version="success" />
				{isSubmitted && <SubmitMessage />}
			</>
		</Form>
	);
}
