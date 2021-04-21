import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setMaxMinPrice } from "../../store/actions/filterActions";
import { LOAD_MY_FILTERS_ACTION } from "../../store/actions/sagaActions";
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import { useHistory, useParams } from "react-router-dom";

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const MyPriceSlider = () => {
  const itemsCountry = useSelector((state) => state.products.selectedCountry);
  const dispatch = useDispatch();

  let history = useHistory();
  const { arr, urlRangePrice } = useParams();

  if(!urlRangePrice === false) {
    dispatch(LOAD_MY_FILTERS_ACTION(arr, urlRangePrice.split(',')))
  }

  const handleChangeSlider = (event, valuePrice) => {
    valuePrice ? history.push(`/my-products/filters&origin=${itemsCountry}&priceRange=${valuePrice}`) :
    history.push('/my-products')

    dispatch(setMaxMinPrice(valuePrice));
    dispatch(LOAD_MY_FILTERS_ACTION(itemsCountry, valuePrice));
  }
  return (
    <>
      <div>Price filter</div>
      <Slider
        min={0}
        max={3000}
        step={1}
        onChange={handleChangeSlider}
        ValueLabelComponent={ValueLabelComponent}
        defaultValue={[0, 3000]}
      />
    </>
  )
}

export default MyPriceSlider;