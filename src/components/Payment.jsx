export default function Payment() {

    return (
        <>
        <h1 className="text-center mb-4">Payment Information</h1>
        <div className="row my-1">
            <div className="col-2">
            <label className="fw-bold">Name on Card</label>
            </div>
            <div className="col-10">
                <input type="text" style={{width: '100%'}}></input>
            </div>
        </div>
        <div className="row my-1">
            <div className="col-2">
            <label className="fw-bold">Card Number</label>
            </div>
            <div className="col-10">
                <input type="text" style={{width: '100%'}}></input>
            </div>
        </div>
        <div className="row my-1">
            <div className="col-2">
            <label className="fw-bold">Expiry Date</label>
            </div>
            <div className="col-4">
                <input type="text" style={{width: '100%'}}></input>
            </div>
            <div className="col-2">
            <label className="fw-bold ms-2 ps-5">CVV</label>
            </div>
            <div className="col-4">
                <input type="text" style={{width: '100%'}}></input>
            </div>
        </div>
        </>
    );
}
