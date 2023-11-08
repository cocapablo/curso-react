import { useState } from "react"

export const Filter = ({children, productos}) => {
    const [filterState, setFilterState] = useState("");

    const handleFilterChange = (e) => {
        setFilterState(e.target.value);
    }

    return (
        
        children({productos, filterState, handleFilterChange})
        
    )
}