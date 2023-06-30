import React from 'react';

function BenefitCard(props){

    return ( <div>
        
        <img src={props.img} style={{height:"30px",width:"30px"}}/>
        <p><b>{props.description}</b></p>
        </div>);
}

export default BenefitCard;