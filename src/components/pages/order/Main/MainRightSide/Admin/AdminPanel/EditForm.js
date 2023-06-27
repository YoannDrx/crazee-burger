import { useContext, useState } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import Form from "./Form";
import EditInfoMessage from "./EditInfoMessage";
import SavingMessage from "./SavingMessage";
import { useSuccessMessage } from "../../../../../../../hooks/useSuccessMessage";

export default function EditForm() {
	// state
	const { username, productSelected, setProductSelected, handleEdit, titleEditRef } = useContext(OrderContext);
	const [valueOnFocus, setValueOnFocus] = useState();
	const { isSubmitted: isSaved, displaySuccessMessage } = useSuccessMessage();

	// comportements (gestionnaires d'événement ou "event handlers")
	const handleChange = (event) => {
		const { name, value } = event.target;

		const productBeingUpdated = {
			...productSelected,
			[name]: value,
		};

		setProductSelected(productBeingUpdated); // cette ligne update le formulaire
		handleEdit(productBeingUpdated, username); // cette ligne update le menu
	};

	const handleOnFocus = (event) => {
		const inputValueOnFocus = event.target.value;
		setValueOnFocus(inputValueOnFocus);
	};

	const handleOnBlur = (event) => {
		const valueOnBlur = event.target.value;
		if (valueOnFocus !== valueOnBlur) {
		}
		displaySuccessMessage();
	};

	// affichage
	return (
		<Form
			product={productSelected}
			onChange={handleChange}
			onFocus={handleOnFocus}
			onBlur={handleOnBlur}
			ref={titleEditRef}
		>
			{isSaved ? <SavingMessage /> : <EditInfoMessage />}
		</Form>
	);
}
