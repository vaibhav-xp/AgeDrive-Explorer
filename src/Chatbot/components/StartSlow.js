import React from 'react'

export default function StartSlow(props) {

    const preference = (preference) => {
        const { name, age } = props.state.userData;
        const category = props.state.userData.category;
        const product = props.state.data[category][preference];
        props.state.userData.product = product;
        props.actions.finalResult(name, age, preference, product.name);
    }

    return (
        <div>
            <button className='start-btn' onClick={() => preference("fast")}>Fast</button>
            <button className='start-btn slow-btn' onClick={() => preference("slow")}> Slow</button>
        </div >
    )
}
