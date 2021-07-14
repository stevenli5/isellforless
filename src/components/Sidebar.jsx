import { Button } from "react-bootstrap";
import { Accordion } from 'react-bootstrap';

export default function Sidebar() {
    return (
        <div className="col-2 bg-secondary" style={{ height: '100vh' }}>
            <div className="pt-4 px-4 text-white">
                <h2>Categories</h2>
                <div className="py-2">
                    <div className="d-grid gap-2">
                        <Button className="p-0" variant="secondary">
                            Accessories
                        </Button>
                        <Button className="p-0" variant="secondary">
                            Cases
                        </Button>
                        <Button className="p-0" variant="secondary">
                            Chargers
                        </Button>
                        <Button className="p-0" variant="secondary">
                            iPads
                        </Button>
                        <Button className="p-0" variant="secondary">
                            iPhones
                        </Button>
                        <Button className="p-0" variant="secondary">
                            Macs
                        </Button>
                    </div>
                </div>
            </div>
            <div className="px-4 text-white">
                <h2>Sort</h2>
                <div className="py-2">
                    
                </div>
            </div>
        </div>
    );
}

