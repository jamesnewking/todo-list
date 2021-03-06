import React from 'react';



export default props => {
    
    const listElements = props.data.map( (item, index) => {
        return  <li key={index} className='collection-item'>
            {item.title}
                </li>
    } )

    return (
       <ul className='collection'>
           {listElements}
       </ul>


    )

};