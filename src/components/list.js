import React from 'react';
import listData from '../data/list';

export default props => {
    
    const listElements = listData.map( (item, index) => {
        return  <li key={item.id} className='collection-item'>
            {item.title}
                </li>
    } )

    return (
       <ul className='collection'>
           {listElements}
       </ul>


    )

};