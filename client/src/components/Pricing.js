import React from 'react'

export default function Pricing() {
    return (
        <>
            <div id="listing-pricing-list" className="listing-section">
                <h3 className="listing-desc-headline margin-top-70 margin-bottom-30">Pricing</h3>
                <div className="show-more">
                    <div className="pricing-list-container">
                        {/* Food List */}
                        <h4>Burgers</h4>
                        <ul>
                            <li>
                                <h5>Classic Burger</h5>
                                <p>Beef, salad, mayonnaise, spicey relish, cheese</p>
                                <span>$6</span>
                            </li>
                            <li>
                                <h5>Cheddar Burger</h5>
                                <p>Cheddar cheese, lettuce, tomato, onion, dill pickles</p>
                                <span>$6</span>
                            </li>
                            <li>
                                <h5>Veggie Burger</h5>
                                <p>Panko crumbed and fried, grilled peppers and mushroom</p>
                                <span>$6</span>
                            </li>
                            <li>
                                <h5>Chicken Burger</h5>
                                <p>Cheese, chicken fillet, avocado, bacon, tomatoes, basil</p>
                                <span>$6</span>
                            </li>
                        </ul>
                        {/* Food List */}
                        <h4>Drinks</h4>
                        <ul>
                            <li>
                                <h5>Frozen Shake</h5>
                                <span>$4</span>
                            </li>
                            <li>
                                <h5>Orange Juice</h5>
                                <span>$4</span>
                            </li>
                            <li>
                                <h5>Beer</h5>
                                <span>$4</span>
                            </li>
                            <li>
                                <h5>Water</h5>
                                <span>Free</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <a href="#" className="show-more-button" data-more-title="Show More" data-less-title="Show Less"><i className="fa fa-angle-down" /></a>
            </div>
        </>
    )
}
