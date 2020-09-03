import React from 'react';

import Select from 'react-select';
// import { colourOptions } from '../data';

const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' }
  ]

const OriginSelect = () => (
  <Select
    defaultValue={[]}
    isMulti
    name="origins"
    options={options}
    className="basic-multi-select"
    classNamePrefix="select"
  />
);

export default OriginSelect;