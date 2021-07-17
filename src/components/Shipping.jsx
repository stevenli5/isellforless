import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast as truck } from '@fortawesome/free-solid-svg-icons';

export default function Shipping() {

    return (
        <>
        <h1 className="text-center mb-4"><FontAwesomeIcon icon={truck} /> Shipping Information</h1>
        <div className="row my-1">
            <div className="col-2">
            <label className="fw-bold ms-1 ps-5">Address</label>
            </div>
            <div className="col-10">
                <input type="text" style={{width: '100%'}}></input>
            </div>
        </div>
        <div className="row my-1">
            <div className="col-2">
            <label className="fw-bold ps-4">Postal&nbsp;Code</label>
            </div>
            <div className="col-4">
                <input type="text" style={{width: '100%'}}></input>
            </div>
            <div className="col-2">
            <label className="fw-bold ps-4">City/Town</label>
            </div>
            <div className="col-4">
                <input type="text" style={{width: '100%'}}></input>
            </div>
        </div>
        <div className="row my-1">
            <div className="col-2">
            <label className="fw-bold">Province/State</label>
            </div>
            <div className="col-4">
                <input type="text" style={{width: '100%'}}></input>
            </div>
            <div className="col-2">
            <label className="fw-bold ms-3 ps-4">Country</label>
            </div>
            <div className="col-4">
                <input type="text" style={{width: '100%'}}></input>
            </div>
        </div>
        </>
    );
}
