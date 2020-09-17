import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GET_MY_FILTRED_PRODUCTS, setMaxMinPrice } from "../../store/actions/filterActions";
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';

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
    const handleChangeSlider = (event, valuePrice) => {
        dispatch(setMaxMinPrice(valuePrice));
        dispatch(GET_MY_FILTRED_PRODUCTS(itemsCountry, valuePrice));
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