import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard as ccard } from '@fortawesome/free-solid-svg-icons';

export default function Payment() {

    const nameTooltip = (props) => (
        <Tooltip id="name-tooltip" {...props}>
            Enter the name as it appears on your card.
        </Tooltip>
    );
    const numberTooltip = (props) => (
        <Tooltip id="number-tooltip" {...props}>
            Enter your credit card number. Example: 4520-1203-3304-8888
        </Tooltip>
    );
    const expiryTooltip = (props) => (
        <Tooltip id="expiry-tooltip" {...props}>
            Enter your card expiry date. Example: 09/23
        </Tooltip>
    );
    const cvvTooltip = (props) => (
        <Tooltip id="cvv-tooltip" {...props}>
            Enter your security code (CVV). Example: 123
        </Tooltip>
    );

    return (
        <>
            <h1 className="text-center mb-4"><FontAwesomeIcon icon={ccard} /> Payment Information</h1>
            <div className="row my-1">
                <div className="col-2">
                    <label className="fw-bold">Name on Card</label>
                </div>
                <div className="col-4">
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={nameTooltip}
                    >
                        <input type="text" style={{ width: '100%' }}></input>
                    </OverlayTrigger>
                </div>
                <div className="col-2">
                    <label className="fw-bold">Card&nbsp;Number</label>
                </div>
                <div className="col-4">
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={numberTooltip}
                    >
                        <input type="text" maxLength="19" style={{ width: '100%' }}></input>
                    </OverlayTrigger>
                </div>
            </div>
            <div className="row my-1">
                <div className="col-2">
                    <label className="fw-bold">Expiry Date</label>
                </div>
                <div className="col-4">
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={expiryTooltip}
                    >
                        <input type="text" maxLength="5" style={{ width: '100%' }}></input>
                    </OverlayTrigger>
                </div>
                <div className="col-2">
                    <label className="fw-bold">CVV</label>
                </div>
                <div className="col-4">
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={cvvTooltip}
                    >
                        <input type="text" maxLength="3" style={{ width: '100%' }}></input>
                    </OverlayTrigger>
                </div>
            </div>
        </>
    );
}
