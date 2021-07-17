import React, {useEffect} from 'react';
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard as card } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

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
            Enter your phone number. Example: (613) 343-9866
        </Tooltip>
    );

    useEffect(()=>{
        // Phone number input formatting
        $("input[type='tel']").each(function () {
            $(this).on("change keyup paste", function (e) {
                let output,
                $this = $(this),
                input = $this.val();
            
                if (e.keyCode !== 8) {
                input = input.replace(/[^0-9]/g, '');
                let area = input.substr(0, 3);
                let pre = input.substr(3, 3);
                let tel = input.substr(6, 4);
                if ((area.length < 3) && (area.length !== 0)) {
                    output = "(" + area;
                } else if (area.length === 3 && pre.length < 3) {
                    output = "(" + area + ")" + " " + pre;
                } else if (area.length === 3 && pre.length === 3) {
                    output = "(" + area + ")" + " " + pre + "-" + tel;
                }
                $this.val(output);
                }
            });
        });
    })

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
                        <input type="tel" maxLength="14" style={{ width: '100%' }}></input>
                    </OverlayTrigger>
                </div>
            </div>
        </>
    );
}



