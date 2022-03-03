import { createContext, useState, useRef } from "react";

const FilterContext = createContext() 

const FilterProvider = ({children}) => {

    return(
        {children}
    )
} 

export default FilterContext