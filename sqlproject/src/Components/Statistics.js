import React from "react"

const Statistics =({name,stat}
    ) =>{
    return(
        <tr>
            <th>{name}</th>
            <td>{stat}</td>
        </tr>
    )
}

export default Statistics