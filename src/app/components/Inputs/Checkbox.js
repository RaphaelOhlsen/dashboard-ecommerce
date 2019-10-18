import React from 'react';

import './Checkbox.css'

const Checkbox = ({ label, value, onChange }) => (
    <div className="Checkbox">
        <input type="checkbox" checked={value} onChange={onChange} />
        <span>&nbsp;{label}</span>
    </div>
)

export default Checkbox;
