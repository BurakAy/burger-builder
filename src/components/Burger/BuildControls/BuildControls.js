import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Lettuce', type: 'lettuce' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
    { label: 'Turkey Bacon', type: 'turkeyBacon' }
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <span className={classes.TotalPrice}>${props.price.toFixed(2)}</span></p>
        {controls.map(ctrl => (
            <BuildControl 
                added={() => props.ingredientAdded(ctrl.type)} 
                removed={() => props.ingredientRemoved(ctrl.type)}
                key={ctrl.label} 
                label={ctrl.label} 
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button onClick={props.clicked} disabled={!props.purchaseable} className={classes.OrderButton}>CHECKOUT</button>
    </div>
);

export default buildControls;