import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GET_FILTRED_ORIGINS, setSelectedCountry } from "../../store/actions/filterActions";
import Select from 'react-select';
// import { colourOptions } from '../data';


const OriginSelect = () => {
  const itemsCountry = useSelector((state) => state.products.countryList);
  const rangePrice =  useSelector((state) => state.products.rangePrice);
  const dispatch = useDispatch();
  const setCountry = (value) => {
    let arr = [];
    if(value){
      value.forEach(item => {
        arr.push(item.value)
      })
    }
    dispatch(setSelectedCountry(arr))
    dispatch(GET_FILTRED_ORIGINS(arr, rangePrice));
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