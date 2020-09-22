import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
	name: Yup.string().trim('name should not have spaces at start and end of string').strict(true).min(3).max(20).required("Required"),
	price: Yup.number().typeError('price must be a positive number').integer().positive().required("Required"),
	origin: Yup.string().trim().strict(true).required("Required")
})