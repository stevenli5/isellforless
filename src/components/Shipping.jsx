import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast as truck } from '@fortawesome/free-solid-svg-icons';

export default function Shipping() {

    const addressTooltip = (props) => (
        <Tooltip id="name-tooltip" {...props}>
            Enter your shipping address.
        </Tooltip>
    );
    const postalTooltip = (props) => (
        <Tooltip id="number-tooltip" {...props}>
            Enter shipping postal code/ZIP code.
        </Tooltip>
    );
    const cityTooltip = (props) => (
        <Tooltip id="expiry-tooltip" {...props}>
            Enter your shipping city/town.
        </Tooltip>
    );
    const provinceTooltip = (props) => (
        <Tooltip id="cvv-tooltip" {...props}>
            Enter your shipping province/state.
        </Tooltip>
    );
    const countryTooltip = (props) => (
        <Tooltip id="cvv-tooltip" {...props}>
            Enter your shipping country.
        </Tooltip>
    );

    return (
        <>
            <h1 className="text-center mb-4"><FontAwesomeIcon icon={truck} /> Shipping Information</h1>
            <div className="row my-1">
                <div className="col-2">
                    <label className="fw-bold">Address</label>
                </div>
                <div className="col-10">
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={addressTooltip}
                    >
                        <input type="text" style={{ width: '100%' }}></input>
                    </OverlayTrigger>
                </div>
            </div>
            <div className="row my-1">
                <div className="col-2">
                    <label className="fw-bold">Postal/ZIP&nbsp;Code</label>
                </div>
                <div className="col-4">
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={postalTooltip}
                    >
                        <input type="text" style={{ width: '100%' }}></input>
                    </OverlayTrigger>
                </div>
                <div className="col-2">
                    <label className="fw-bold">City/Town</label>
                </div>
                <div className="col-4">
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={cityTooltip}
                    >
                        <input type="text" style={{ width: '100%' }}></input>
                    </OverlayTrigger>
                </div>
            </div>
            <div className="row my-1">
                <div className="col-2">
                    <label className="fw-bold">Province/State</label>
                </div>
                <div className="col-4">
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={provinceTooltip}
                    >
                        <input type="text" style={{ width: '100%' }}></input>
                    </OverlayTrigger>
                </div>
                <div className="col-2">
                    <label className="fw-bold">Country</label>
                </div>
                <div className="col-4">
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={countryTooltip}
                    >
                        <input type="text" style={{ width: '100%' }}></input>
                    </OverlayTrigger>
                </div>
            </div>
        </>
    );
}
