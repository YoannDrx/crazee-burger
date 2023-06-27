import React, { useContext } from "react"
import OrderContext from "../../../../../../../context/OrderContext"
import { EMPTY_PRODUCT } from "../../../../../../../enums/product"
import { useSuccessMessage } from "../../../../../../../hooks/useSuccessMessage"
import Form from "./Form"
import SubmitButton from "./SubmitButton"
import { replaceFrenchCommaWithDot } from "../../../../../../../utils/maths"

export default function AddForm() {
  // state
  const { handleAdd, newProduct, setNewProduct, username } = useContext(OrderContext)
  const { isSubmitted, displaySuccessMessage } = useSuccessMessage()

  // comportements
  const handleSubmit = (event) => {
    event.preventDefault()
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
      price : replaceFrenchCommaWithDot(newProduct.price)
    }

    handleAdd(newProductToAdd, username)
    setNewProduct(EMPTY_PRODUCT)

    displaySuccessMessage()
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setNewProduct({ ...newProduct, [name]: value })
  }

  // affichage
  return (
    <Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
      <SubmitButton isSubmitted={isSubmitted} />
    </Form>
  )
}
