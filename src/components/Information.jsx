import React from 'react';
import { OverlayTrigger, Button, Tooltip} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard as card } from '@fortawesome/free-solid-svg-icons';

export default function Information() {

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Simple tooltip
        </Tooltip>
    );

    return (
        <>
            <h1 className="text-center mb-4"><FontAwesomeIcon icon={card} /> Your Information</h1>
            <div className="row my-1">
                <div className="col-2">
                    <label className="fw-bold ps-4">First&nbsp;Name</label>
                </div>
                <div className="col-4">
                    <input type="text" style={{ width: '100%' }}></input>
                </div>
                <div className="col-2">
                    <label className="fw-bold ms-2 ps-4">Last&nbsp;Name</label>
                </div>
                <div className="col-4">
                    <input type="text" style={{ width: '100%' }}></input>
                </div>
            </div>
            <div className="row my-1">
                <div className="col-2">
                    <label className="fw-bold ms-3 ps-5">Email</label>
                </div>
                <div className="col-4">
                    <input type="text" style={{ width: '100%' }}></input>
                </div>
                <div className="col-2">
                    <label className="fw-bold">Phone&nbsp;Number</label>
                </div>
                <div className="col-4">
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                        title="test"
                    >
                        <input type="tel" maxLength="10" style={{ width: '100%' }}></input>
                    </OverlayTrigger>
                    
                </div>
            </div>
        </>
    );
}
