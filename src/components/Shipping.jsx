export default function Shipping() {

    return (
        <>
        <h1 className="text-center mb-4">Shipping Information</h1>
        <div className="row my-1">
            <div className="col-2">
            <label className="fw-bold">Address</label>
            </div>
            <div className="col-10">
                <input type="text" style={{width: '100%'}}></input>
            </div>
        </div>
        <div className="row my-1">
            <div className="col-2">
            <label className="fw-bold">Postal Code</label>
            </div>
            <div className="col-4">
                <input type="text" style={{width: '100%'}}></input>
            </div>
            <div className="col-2">
            <label className="fw-bold ms-2 ps-5">City</label>
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
            <label className="fw-bold ms-2 ps-5">Country</label>
            </div>
            <div className="col-4">
                <input type="text" style={{width: '100%'}}></input>
            </div>
        </div>
        </>
    );
}
