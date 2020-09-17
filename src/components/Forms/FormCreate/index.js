import React from "react";
import { useDispatch } from "react-redux";
import { CREATE_ITEM_ACTION } from "../../../store/actions/cartActions";
import { Formik } from "formik";
import * as Yup from "yup";
import "./style.css";


const FormCreate = () => {

  const dispatch = useDispatch();
  return (

    <Formik

      initialValues={{ name: "", price: "", origin: "" }}

      onSubmit={async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 0));
        dispatch(CREATE_ITEM_ACTION(values));
      }}


      validationSchema={Yup.object().shape({
        name: Yup.string().trim('name should not have spaces at start and end of string').strict(true).min(3).max(20).required("Required"),
        price: Yup.number().typeError('price must be a positive number').integer().positive().required("Required"),
        origin: Yup.string().trim().strict(true).required("Required")
      })}
    >

      {(props) => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;

        return (
          <form onSubmit={handleSubmit}>

            <label htmlFor="name">
              Name
            </label>
            <input
              id="name"
              placeholder="Enter name of product"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.name && touched.name
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.name && touched.name && (
              <div className="input-feedback">{errors.name}</div>
            )}

            <label htmlFor="price">
              Price
            </label>
            <input
              id="price"
              placeholder="Enter product price"
              type="text"
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.price && touched.price ? "text-input error" : "text-input"
              }
            />
            {errors.price && touched.price && (
              <div className="input-feedback">{errors.price}</div>
            )}

            <label htmlFor="origin">
              Origin
            </label>
            <select
              id="origin"
              placeholder="Enter product origin"
              type="text"
              value={values.origin}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.origin && touched.origin ? "text-input error" : "text-input"
              }
            >
              <option default hidden>Choose product origin</option>
              <option value="usa">USA</option>
              <option value="europe">Europe</option>
              <option value="asia">Asia</option>
              <option value="africa">Africa</option>
            </select>

            {errors.origin && touched.origin && (
              <div className="input-feedback">{errors.origin}</div>
            )}


            <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
              </button>
            <button type="submit" disabled={isSubmitting}>
              Submit
              </button>
          </form>
        );
      }}
    </Formik>
  );
}




export default FormCreate;