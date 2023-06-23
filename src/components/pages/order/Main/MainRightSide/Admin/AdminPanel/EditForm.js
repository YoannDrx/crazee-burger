import { useContext } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import EditInfoMessage from "./EditInfoMessage";
import Form from "./Form";

export default function EditForm() {
	// state
	const { productSelected, setProductSelected, handleEdit, titleEditRef } = useContext(OrderContext);

	// comportements
	const handleChange = (event) => {
		const { name, value } = event.target;
		const productBeingUpdated = { ...productSelected, [name]: value };

		setProductSelected(productBeingUpdated);
		handleEdit(productBeingUpdated);
	};

	//affichage
	return (
		<Form product={productSelected} onChange={handleChange} ref={titleEditRef}>
			<EditInfoMessage />
		</Form>
	);
}
