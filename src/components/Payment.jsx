import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard as ccard } from '@fortawesome/free-solid-svg-icons';

export default function Payment() {

    // const nameTooltip = (props) => (
    //     <Tooltip id="button-tooltip" {...props}>
    //         Enter your first name.
    //     </Tooltip>
    // );
    // const numberTooltip = (props) => (
    //     <Tooltip id="button-tooltip" {...props}>
    //         Enter your last name.
    //     </Tooltip>
    // );
    // const expiryTooltip = (props) => (
    //     <Tooltip id="button-tooltip" {...props}>
    //         Enter your email address. Example: john.appleseed@icloud.com
    //     </Tooltip>
    // );
    // const cvvTooltip = (props) => (
    //     <Tooltip id="button-tooltip" {...props}>
    //         Enter your phone number. Example: 6133439866
    //     </Tooltip>
    // );

    return (
        <>
        <h1 className="text-center mb-4"><FontAwesomeIcon icon={ccard} /> Payment Information</h1>
        <div className="row my-1">
            <div className="col-2">
            <label className="fw-bold">Name on Card</label>
            </div>
            <div className="col-4">
                <input type="text" style={{width: '100%'}}></input>
            </div>
            <div className="col-2">
            <label className="fw-bold ms-1">Card&nbsp;Number</label>
            </div>
            <div className="col-4">
                <input type="text" style={{width: '100%'}}></input>
            </div>
        </div>
        <div className="row my-1">
            <div className="col-2">
            <label className="fw-bold ms-1 ps-3">Expiry Date</label>
            </div>
            <div className="col-4">
                <input type="text" style={{width: '100%'}}></input>
            </div>
            <div className="col-2">
            <label className="fw-bold ms-4 ps-5">CVV</label>
            </div>
            <div className="col-4">
                <input type="text" style={{width: '100%'}}></input>
            </div>
        </div>
        </>
    );
}
