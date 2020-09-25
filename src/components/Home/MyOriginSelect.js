import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCountry } from "../../store/actions/filterActions";
import {LOAD_MY_FILTERS_ACTION} from "../../store/actions/sagaActions"
import Select from 'react-select';


const MyOriginSelect = () => {
  const itemsCountry = useSelector((state) => state.products.countryList);
  const rangePrice =  useSelector((state) => state.products.rangePrice);
  const dispatch = useDispatch();
  const setCountry = (value) => {
    const arr = [];
    if(value){
      value.forEach(item => {
        arr.push(item.value)
      })
    }
    dispatch(setSelectedCountry(arr))
    dispatch(LOAD_MY_FILTERS_ACTION(arr, rangePrice));
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