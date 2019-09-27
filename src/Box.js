import React, { useState } from 'react';


function Box(props){
    const name = useState(props.name);

    return (
        <div>hello {name} </div>
    )
}
export default Box;