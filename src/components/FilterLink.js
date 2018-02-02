import React from 'react';
import {NavLink} from 'react-router-dom';

const FilterLink = ({ filter, children }) => (
    <NavLink to={'/${ filter }'} activeClassName='active'>
        {children}
    </NavLink>
)

export default FilterLink;