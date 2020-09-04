import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GET_FILTRED_ORIGINS } from "../../store/actions/filterActions";
import Select from 'react-select';
// import { colourOptions } from '../data';


const OriginSelect = () => {


  const itemsCountry = useSelector((state) => state.products.countryList);
  const dispatch = useDispatch();
  const setCountry = (value) => {
    let arr = [];
    value.forEach(item => {
      arr.push(item.value)
    })
    dispatch(GET_FILTRED_ORIGINS(arr))
  }

  return (
    <Select
    defaultValue={[]}
    isMulti
    name="origins"
    onChange={setCountry}
    options={itemsCountry}
    className="basic-multi-select"
    classNamePrefix="select"
  />
  );
}

export default OriginSelect;