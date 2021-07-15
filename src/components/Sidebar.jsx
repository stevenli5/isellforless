import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as filled } from '@fortawesome/free-solid-svg-icons'
import { faStar as unfilled } from '@fortawesome/free-regular-svg-icons'

export default function Sidebar() {
    return (
        <div className="col-2" style={{ height: '100vh', backgroundColor: '#F8F9FA' }}>
            <div className="pt-4 px-4 mb-5">
                <h2 class="fs-3">Categories</h2>
                <div className="py-2">
                    <div className="d-grid gap-2">
                        <Button className="p-0" variant="secondary">
                            iPhones
                        </Button>
                        <Button className="p-0" variant="secondary">
                            iPads
                        </Button>
                        <Button className="p-0" variant="secondary">
                            Laptops
                        </Button>
                        <Button className="p-0" variant="secondary">
                            Cases
                        </Button>
                        <Button className="p-0" variant="secondary">
                            Chargers
                        </Button>
                        <Button className="p-0" variant="secondary">
                            Accessories
                        </Button>
                    </div>
                </div>
            </div>
            <div className="px-4">
                <h2 class="fs-3 mb-3">Sort</h2>
                <div className="ps-4 pb-2">
                    <Form>
                        <div className="mb-3">
                            <h3 className="fs-5">Price</h3>
                            <div key="default-radio">
                                <Form.Check
                                    type="radio"
                                    id="lowestToHighest"
                                    label="Lowest to Highest"
                                    name="priceSort"
                                />
                                <Form.Check
                                    type="radio"
                                    id="highestToLowest"
                                    label="Highest to Lowest"
                                    name="priceSort"
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <h3 className="fs-5">Average Rating</h3>
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
                        </div>
                        <div className="mb-3">
                            <h3 className="fs-5">Quality</h3>
                            <Form.Check
                                type="radio"
                                id="likeNew"
                                label="Used - Like New"
                                name="qualitySort"
                            />
                            <Form.Check
                                type="radio"
                                id="good"
                                label="Used - Good"
                                name="qualitySort"
                            />
                            <Form.Check
                                type="radio"
                                id="acceptable"
                                label="Used - Acceptable"
                                name="qualitySort"
                            />
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

