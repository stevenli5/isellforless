import React, { useState, useEffect } from 'react';
import { Button } from "react-bootstrap";

export default function Cart(props) {
    const [total, setTotal] = useState(0);
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    useEffect(() => {
        let curTotal = 0;
        props.cart.forEach(item => {
            curTotal += Number(item.price);
        });
        setTotal(curTotal);
    });

    function handleRemove(item){
        props.handleRemove(item.id);
        forceUpdate();
    }

    return (
        <>
            <h1 className="text-center mb-4">Cart</h1>
            <div className="row mb-3 fs-5">
                <div className="col-7 fw-bold"><u>Product(s)</u></div>
                <div className="col-4 align-bottom text-end fw-bold"><u>Price</u></div>
            </div>
            <div>
                {props.cart.map(item =>
                (
                    <div className="row mb-2">
                        <div className="col-4"><b>{item.name}</b><br />{item.quality}<br />{item.colour}</div>
                        <div className="col-3 text-end"><img src={item.image} style={{ height: '7rem', width: '60%' }}></img></div>
                        <div className="col-4 align-bottom text-end">${item.price}</div>
                        <Button className="col-1 text-end" onClick={()=>{handleRemove(item)}}>X</Button>
                    </div>)
                )}
            </div>
            <div className="fs-5 text-end">
                <div className="row">
                    <div className="col-12">
                        <b>Subtotal:</b> ${total.toFixed(2)}
                    </div>
                </div>
                <div className="row">
                    <div className="col-8"></div>
                    <div className="col-4 text-end">
                        <b>Tax:</b> ${(total * 0.13).toFixed(2)}
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <b>Total:</b> ${(total * 1.13).toFixed(2)}
                    </div>
                </div>
            </div>
        </>
    );
}
