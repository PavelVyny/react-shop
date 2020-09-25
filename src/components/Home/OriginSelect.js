import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCountry } from "../../store/actions/filterActions";
import { LOAD_FILTERS_ACTION } from "../../store/actions/sagaActions";
import Select from 'react-select';
import { useHistory, useParams } from "react-router-dom";



const OriginSelect = () => {
  const itemsCountry = useSelector((state) => state.products.countryList);
  const rangePrice = useSelector((state) => state.products.rangePrice);
  const dispatch = useDispatch();
  let history = useHistory();

  const { arr, urlRangePrice } = useParams();
  if(!urlRangePrice === false) {
    dispatch(LOAD_FILTERS_ACTION(arr, urlRangePrice.split(',')))
  }
 


  const setCountry = (value) => {

    const arr = [];

    if (value) {
      value.forEach(item => {
        arr.push(item.value)
      })
    }
    arr && rangePrice && value ? history.push(`/filters&origin=${arr}&priceRange=${rangePrice}`) :
    history.push('/')

    dispatch(setSelectedCountry(arr))
    dispatch(LOAD_FILTERS_ACTION(arr, rangePrice));


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