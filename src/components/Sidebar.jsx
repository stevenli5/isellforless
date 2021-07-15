import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as filled } from '@fortawesome/free-solid-svg-icons'
import { faStar as unfilled } from '@fortawesome/free-regular-svg-icons'

export default function Sidebar() {
    return (
        <div className="col-2 bg-secondary" style={{ height: '100vh' }}>
            <div className="pt-4 px-4 text-white">
                <h2 class="fs-3">Categories</h2>
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
                <h2 class="fs-3">Sort</h2>
                <div className="ps-4 py-2">
                    <h3 className="fs-5">Price</h3>
                    <Form>
                        <div key="default-radio" className="mb-3">
                            <Form.Check
                                type="radio"
                                id="lowestToHighest"
                                label="Lowest to highest"
                                name="priceSort"
                            />
                            <Form.Check
                                type="radio"
                                id="highestToLowest"
                                label="Highest to lowest"
                                name="priceSort"
                            />
                        </div>
                    <h3 className="fs-5">Average Customer Review</h3>
                            <Form.Check
                                type="radio"
                                id="4stars"
                                label={<><FontAwesomeIcon icon={filled} /><FontAwesomeIcon icon={filled} /><FontAwesomeIcon icon={filled} /><FontAwesomeIcon icon={filled} /><FontAwesomeIcon icon={unfilled} /><span> &amp; Up</span></>}
                                name="reviewSort"
                            />
                            <Form.Check
                                type="radio"
                                id="3stars"
                                label={<><FontAwesomeIcon icon={filled} /><FontAwesomeIcon icon={filled} /><FontAwesomeIcon icon={filled} /><FontAwesomeIcon icon={unfilled} /><FontAwesomeIcon icon={unfilled} /><span> &amp; Up</span></>}
                                name="reviewSort"
                            />
                            <Form.Check
                                type="radio"
                                id="2stars"
                                label={<><FontAwesomeIcon icon={filled} /><FontAwesomeIcon icon={filled} /><FontAwesomeIcon icon={unfilled} /><FontAwesomeIcon icon={unfilled} /><FontAwesomeIcon icon={unfilled} /><span> &amp; Up</span></>}
                                name="reviewSort"
                            />
                            <Form.Check
                                type="radio"
                                id="1star"
                                label={<><FontAwesomeIcon icon={filled} /><FontAwesomeIcon icon={unfilled} /><FontAwesomeIcon icon={unfilled} /><FontAwesomeIcon icon={unfilled} /><FontAwesomeIcon icon={unfilled} /><span> &amp; Up</span></>}
                                name="reviewSort"
                            />
                    </Form>
                </div>
            </div>
        </div>
    );
}

