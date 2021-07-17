import React, { useState, useEffect } from 'react';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket as basket, faTimesCircle as remove } from '@fortawesome/free-solid-svg-icons';

/*export default function Final(props) {
    const [total, setTotal] = useState(0);

    return (
        <>
            <h1 className="text-center mb-4"><FontAwesomeIcon icon={basket} /> Cart</h1>
            <div className="row mb-3 fs-5">
                <div className="col-7 fw-bold"><u>Product(s)</u></div>
                <div className="col-4 align-bottom text-end fw-bold"><u>Price</u></div>
            </div>
            <Button variant="danger" className="my-auto p-2 text-middle" onClick={() => { props.handleClear([]) }}>Clear Cart</Button>
            <div>
                {props.cart.map(item =>
                (
                    <div className="row mb-3">
                        <div className="col-4"><b>{item.name}</b><br />{item.quality}<br />{item.colour}</div>
                        <div className="col-3 text-end"><img src={item.image} style={{ height: '7rem', width: '60%' }}></img></div>
                        <div className="col-4 align-bottom text-end">${item.price}</div>
                        <div className="col-1 d-flex"><Button variant="danger" className="my-auto p-2 text-middle" onClick={() => { handleRemove(item) }}><FontAwesomeIcon className="fs-3" icon={remove} /></Button></div>
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
}*/
