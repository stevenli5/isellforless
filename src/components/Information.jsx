export default function Information() {

    return (
        <>
        <h1 className="text-center mb-4">Your Information</h1>
        <div className="row my-1">
            <div className="col-3">
            <label className="fw-bold">First Name</label>
            </div>
            <div className="col-9">
                <input type="text" style={{width: '100%'}}></input>
            </div>
        </div>
        <div className="row my-1">
            <div className="col-3">
            <label className="fw-bold">Last Name</label>
            </div>
            <div className="col-9">
                <input type="text" style={{width: '100%'}}></input>
            </div>
        </div>
        <div className="row my-1">
            <div className="col-3">
            <label className="fw-bold">Email</label>
            </div>
            <div className="col-9">
                <input type="text" style={{width: '100%'}}></input>
            </div>
        </div>
        <div className="row my-1">
            <div className="col-3">
            <label className="fw-bold">Phone Number</label>
            </div>
            <div className="col-9">
                <input type="text" style={{width: '100%'}}></input>
            </div>
        </div>
        </>
    );
}
