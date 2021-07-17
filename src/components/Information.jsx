import React from 'react';
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard as card } from '@fortawesome/free-solid-svg-icons';

export default function Information() {

    const firstNameTooltip = (props) => (
        <Tooltip id="firstName-tooltip" {...props}>
            Enter your first name.
        </Tooltip>
    );
    const lastNameTooltip = (props) => (
        <Tooltip id="lastName-tooltip" {...props}>
            Enter your last name.
        </Tooltip>
    );
    const emailTooltip = (props) => (
        <Tooltip id="email-tooltip" {...props}>
            Enter your email address. Example: john.appleseed@icloud.com
        </Tooltip>
    );
    const phoneNumberTooltip = (props) => (
        <Tooltip id="phoneNumber-tooltip" {...props}>
            Enter your phone number. Example: 6133439866
        </Tooltip>
    );

    return (
        <>
            <h1 className="text-center mb-4"><FontAwesomeIcon icon={card} /> Your Information</h1>
            <div className="row my-1">
                <div className="col-2">
                    <label className="fw-bold">First&nbsp;Name</label>
                </div>
                <div className="col-4">
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={firstNameTooltip}
                    >
                        <input type="fname" style={{ width: '100%' }}></input>
                    </OverlayTrigger>
                </div>
                <div className="col-2">
                    <label className="fw-bold">Last&nbsp;Name</label>
                </div>
                <div className="col-4">
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={lastNameTooltip}
                    >
                        <input type="lname" style={{ width: '100%' }}></input>
                    </OverlayTrigger>
                </div>
            </div>
            <div className="row my-1">
                <div className="col-2">
                    <label className="fw-bold">Email</label>
                </div>
                <div className="col-4">
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={emailTooltip}
                    >
                        <input type="email" style={{ width: '100%' }}></input>
                    </OverlayTrigger>
                </div>
                <div className="col-2">
                    <label className="fw-bold">Phone&nbsp;Number</label>
                </div>
                <div className="col-4">
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={phoneNumberTooltip}
                    >
                        <input type="tel" maxLength="10" style={{ width: '100%' }}></input>
                    </OverlayTrigger>
                </div>
            </div>
        </>
    );
}
