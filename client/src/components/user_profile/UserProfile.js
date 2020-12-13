import React from "react";
import StarRating from "react-star-rating";
import ReactStars from "react-stars";

import "../../css/style.css";
import "../../css/main-color.css";
import "../../fonts/fontawesome-webfont.eot";
import "../user_profile/dist/userProfile.css";
import UserContactDetails from "../user_contact_details/UserContactDetails";

export default function UserProfile() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="node_modules/react-star-rating/dist/css/react-star-rating.min.css"
      />

      <div className="wrapper">
        {/* Header Container
================================================== */}
        {/* Header Container / End */}
        {/* Titlebar
================================================== */}
        <div id="titlebar" className="gradient">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="user-profile-titlebar">
                  <div className="user-profile-avatar">
                    {/* <img src="images/user-profile-avatar.jpg" alt /> */}
                  </div>
                  <div className="user-profile-name">
                    <h2>אבי כהן</h2>
                    <div className="d-flex align-content-center">
                      <ReactStars
                      size={30}
                        name="airbnb-rating"
                        caption="Rate your stay!"
                        totalStars={5}
                      />
                      <div className="rating-counter d-flex align-content-center">
                        <a href="#listing-reviews">(60 ביקורות)</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Content
================================================== */}
        <div className="container">
          <div className="row sticky-wrapper">
<UserContactDetails/>
            {/* Content
		================================================== */}
            <div className="col-lg-8 col-md-8 padding-left-30">
              <h3 className="margin-top-0 margin-bottom-40">הרשימות של אבי</h3>
              {/* Listings Container */}
              <div className="row">
                {/* Listing Item */}
                <div className="col-lg-12 col-md-12 d-flex mb-5">
                  <div className="listing-item-container list-layout">
                    <a
                      href="listings-single-page.html"
                      className="listing-item"
                    >
                      <div className="listing-badge now-open">פתוח עכשיו</div>

                      {/* Image */}
                      <div className="listing-item-image">
                        <img src="images/listing-item-01.jpg" alt />
                        <span className="tag">אוכל ושתיה</span>
                      </div>
                      {/* Content */}
                      <div className="listing-item-content d-flex align-content-center justify-content-between">
                        <div className="order-2">
                      <span className="like-icon" /></div>
                        <div className="listing-item-inner">
                          <h3>המסעדה של אבי</h3>
                          <span>ז'בוטינסקי 134, ישראל</span>
                          <div className="star-rating" data-rating="3.5">
                            <div className="rating-counter">(12 ביקורות)</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                {/* Listing Item / End */}
                {/* Listing Item */}
                <div className="col-lg-12 col-md-12 d-flex mb-5">
                  <div className="listing-item-container list-layout">
                    <a
                      href="listings-single-page.html"
                      className="listing-item"
                    >
                     <div className="listing-badge now-open">פתוח עכשיו</div>

                      {/* Image */}
                      <div className="listing-item-image">
                        <img src="images/listing-item-03.jpg" alt />
                        <span className="tag">מלונות</span>
                      </div>
                      {/* Content */}
                      <div className="listing-item-content d-flex align-content-center justify-content-between">
                      <div className="order-2">
                      <span className="like-icon order-1" /></div>
                        <div className="listing-item-inner">
                          <h3>Hotel Govendor</h3>
                          <span>התאנה תל אביב, ישראל</span>
                          <div className="star-rating" data-rating={2.0}>
                            <div className="rating-counter">(17 ביקורות)</div>
                          </div>
                        </div>
                        {/* <div className="listing-item-details">
                          Starting from $59 per night
                        </div> */}
                      </div>
                    </a>
                  </div>
                </div>
                {/* Listing Item / End */}
                {/* Listing Item */}
                <div className="col-lg-12 col-md-12 d-flex mb-5">
                  <div className="listing-item-container list-layout">
                    <a
                      href="listings-single-page.html"
                      className="listing-item"
                    >
                      <div className="listing-badge now-open">פתוח עכשיו</div>
                      {/* Image */}
                      <div className="listing-item-image">
                        <img src="images/listing-item-04.jpg" alt />
                        <span className="tag">אוכל ושתיה</span>
                      </div>
                      {/* Content */}
                      <div className="listing-item-content d-flex align-content-center justify-content-between">
                      <div className="order-2">
                      <span className="like-icon order-1" /></div>
                        <div className="listing-item-inner">
                          <h3>Burger House</h3>
                          <span>שמש ,333 ישראל</span>
                          <div className="star-rating" data-rating={5.0}>
                            <div className="rating-counter">(31 ביקורות)</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                {/* Listing Item / End */}
                <div className="col-md-12 browse-all-user-listings">
                  <a href="#">
                    עיין בכל הרישומים <i className="fa fa-angle-right" />{" "}
                  </a>
                </div>
              </div>
              {/* Listings Container / End */}
              {/* Reviews */}
            </div>
          </div>
        </div>
        {/* Footer
================================================== */}
        {/* Footer / End */}
        {/* Back To Top Button */}
        <div id="backtotop">
          <a href="#" />
        </div>
      </div>
      {/* Wrapper / End */}
      {/* Scripts
================================================== */}
      {/* Style Switcher
================================================== */}
      <div id="style-switcher">
        <h2>
          בחירת צבע{" "}
          <a href="#">
            <i className="sl sl-icon-settings" />
          </a>
        </h2>
        <div>
          <ul className="colors" id="color1">
            <li>
              <a href="#" className="main" title="Main" />
            </li>
            <li>
              <a href="#" className="blue" title="Blue" />
            </li>
            <li>
              <a href="#" className="green" title="Green" />
            </li>
            <li>
              <a href="#" className="orange" title="Orange" />
            </li>
            <li>
              <a href="#" className="navy" title="Navy" />
            </li>
            <li>
              <a href="#" className="yellow" title="Yellow" />
            </li>
            <li>
              <a href="#" className="peach" title="Peach" />
            </li>
            <li>
              <a href="#" className="beige" title="Beige" />
            </li>
            <li>
              <a href="#" className="purple" title="Purple" />
            </li>
            <li>
              <a href="#" className="celadon" title="Celadon" />
            </li>
            <li>
              <a href="#" className="red" title="Red" />
            </li>
            <li>
              <a href="#" className="brown" title="Brown" />
            </li>
            <li>
              <a href="#" className="cherry" title="Cherry" />
            </li>
            <li>
              <a href="#" className="cyan" title="Cyan" />
            </li>
            <li>
              <a href="#" className="gray" title="Gray" />
            </li>
            <li>
              <a href="#" className="olive" title="Olive" />
            </li>
          </ul>
        </div>
      </div>
      {/* Style Switcher / End */}
    </div>
  );
}
