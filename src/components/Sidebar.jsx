import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as filled, faBars as hamburger, faArrowsAltV as arrows, faTags as price, faStarHalfAlt as rating, faAward as quality } from '@fortawesome/free-solid-svg-icons';
import { faStar as unfilled } from '@fortawesome/free-regular-svg-icons';

export default function Sidebar(props) {
    return (
        <div className="col-2 sticky-top text-white" style={{ height: '100vh', backgroundColor: '#212529', paddingTop: '5rem' }}>
            <div className="pt-5 px-4 mb-5">
                <h2 class="fs-3"><FontAwesomeIcon icon={hamburger} /> Categories</h2>
                <div className="py-2">
                    <div className="d-grid gap-2">
                        <Button className="rounded-pill p-0 fs-5" variant="light" onClick={()=>{props.setCategory("All")}}>
                            All
                        </Button>
                        <Button className="rounded-pill p-0 fs-5" variant="light" onClick={()=>{props.setCategory("iPhone")}}>
                            iPhones
                        </Button>
                        <Button className="rounded-pill p-0 fs-5" variant="light" onClick={()=>{props.setCategory("iPad")}}>
                            iPads
                        </Button>
                        <Button className="rounded-pill p-0 fs-5" variant="light" onClick={()=>{props.setCategory("MacBook")}}>
                            MacBooks
                        </Button>
                        <Button className="rounded-pill p-0 fs-5" variant="light" onClick={()=>{props.setCategory("Apple Watch")}}>
                            Apple Watches
                        </Button>
                    </div>
                </div>
            </div>
            <div className="px-4">
                <h2 class="fs-3 mb-3"><FontAwesomeIcon icon={arrows} /> Sort</h2>
                <div className="ps-4 pb-2">
                    <Form>
                        <div className="mb-3">
                            <h3 className="fs-5"><FontAwesomeIcon icon={price} /> Price</h3>
                            <div key="default-radio">
                                <Form.Check
                                    type="radio"
                                    id="lowestToHighest"
                                    label="Lowest to Highest"
                                    name="priceSort"
                                    onClick={() => { props.sortByPrice("L2H") }}
                                />
                                <Form.Check
                                    type="radio"
                                    id="highestToLowest"
                                    label="Highest to Lowest"
                                    name="priceSort"
                                    onClick={() => { props.sortByPrice("H2L") }}
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <h3 className="fs-5"><FontAwesomeIcon icon={rating} /> Average Rating</h3>
                            <Form.Check
                                type="radio"
                                id="4stars"
                                label={<><FontAwesomeIcon icon={filled} /><FontAwesomeIcon icon={filled} /><FontAwesomeIcon icon={filled} /><FontAwesomeIcon icon={filled} /><FontAwesomeIcon icon={unfilled} /><span> &amp; Up</span></>}
                                name="reviewSort"
                                onClick={() => { props.sortByRating("4") }}
                            />
                            <Form.Check
                                type="radio"
                                id="3stars"
                                label={<><FontAwesomeIcon icon={filled} /><FontAwesomeIcon icon={filled} /><FontAwesomeIcon icon={filled} /><FontAwesomeIcon icon={unfilled} /><FontAwesomeIcon icon={unfilled} /><span> &amp; Up</span></>}
                                name="reviewSort"
                                onClick={() => { props.sortByRating("3") }}
                            />
                            <Form.Check
                                type="radio"
                                id="2stars"
                                label={<><FontAwesomeIcon icon={filled} /><FontAwesomeIcon icon={filled} /><FontAwesomeIcon icon={unfilled} /><FontAwesomeIcon icon={unfilled} /><FontAwesomeIcon icon={unfilled} /><span> &amp; Up</span></>}
                                name="reviewSort"
                                onClick={() => { props.sortByRating("2") }}
                            />
                            <Form.Check
                                type="radio"
                                id="1star"
                                label={<><FontAwesomeIcon icon={filled} /><FontAwesomeIcon icon={unfilled} /><FontAwesomeIcon icon={unfilled} /><FontAwesomeIcon icon={unfilled} /><FontAwesomeIcon icon={unfilled} /><span> &amp; Up</span></>}
                                name="reviewSort"
                                onClick={() => { props.sortByRating("1") }}
                            />
                        </div>
                        <div className="mb-3">
                            <h3 className="fs-5"><FontAwesomeIcon icon={quality} /> Quality</h3>
                            <Form.Check
                                type="radio"
                                id="any"
                                label="Any"
                                name="qualitySort"
                                onClick={() => { props.sortByQuality("Any") }}
                            />
                            <Form.Check
                                type="radio"
                                id="likeNew"
                                label="Used - Like New"
                                name="qualitySort"
                                onClick={() => { props.sortByQuality("Like New") }}
                            />
                            <Form.Check
                                type="radio"
                                id="good"
                                label="Used - Good"
                                name="qualitySort"
                                onClick={() => { props.sortByQuality("Good") }}
                            />
                            <Form.Check
                                type="radio"
                                id="acceptable"
                                label="Used - Acceptable"
                                name="qualitySort"
                                onClick={() => { props.sortByQuality("Acceptable") }}
                            />
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

