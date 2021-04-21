import React from "react";
import { useDispatch } from "react-redux";
import { LOAD_NEW_ITEM_ACTION } from "../../../store/actions/sagaActions";
import { Formik } from "formik";
import "./style.css";

import * as Constants from '../constants'

const FormCreate = () => {

  const dispatch = useDispatch();
  return (

    <Formik

      initialValues={{ name: "", price: "", origin: "" }}

      onSubmit={(values) => {
        dispatch(LOAD_NEW_ITEM_ACTION(values));
      }}


      validationSchema={Constants.validationSchema}
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
