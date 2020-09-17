import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GET_MY_FILTRED_PRODUCTS, setSelectedCountry } from "../../store/actions/filterActions";
import Select from 'react-select';


const MyOriginSelect = () => {
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
    dispatch(GET_MY_FILTRED_PRODUCTS(arr, rangePrice));
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

export default MyOriginSelect;