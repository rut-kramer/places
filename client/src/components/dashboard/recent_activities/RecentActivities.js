import React from 'react'
import '../dist/dashboard.css'


export default function RecentActivities() {
    return (
        <>
             <div className="col-lg-6 col-md-12">
      <div className="dashboard-list-box with-icons margin-top-20">
        <h4>פעולות אחרונות</h4>
        <ul>
          <li>
           <div className="wrapper-li d-flex"> <i className="list-box-icon sl sl-icon-layers order-1" /><p className="order-2 pr-4">הרישום שלך ב- <strong><a href="#">מלון גובנדור</a></strong> אושר!</p></div>
           <div className="wrapper-close-list-item d-flex flex-row-reverse"> <a href="#" className="close-list-item"><i className="fa fa-close" /></a></div>
          </li>
          <li>
          <div className="wrapper-li d-flex"> <i className="list-box-icon sl sl-icon-star order-1" /><p className="order-2 pr-4">דוד השאיר<div className="numerical-rating high" data-rating={5.0} /> ביקורות על <strong><a href="#">בורגר הבית</a></strong></p></div>
          <div className="wrapper-close-list-item d-flex flex-row-reverse"><a href="#" className="close-list-item"><i className="fa fa-close" /></a></div>
          </li>
          <li>
          <div className="wrapper-li d-flex"><i className="list-box-icon sl sl-icon-heart order-1" /><p className="order-2 pr-4"> משהו סימן את  <strong><a href="#">בורגר הבית</a></strong></p></div>
          <div className="wrapper-close-list-item d-flex flex-row-reverse"><a href="#" className="close-list-item"><i className="fa fa-close" /></a></div>
          </li>
          <li>
          <div className="wrapper-li d-flex"> <i className="list-box-icon sl sl-icon-star order-1" /><p className="order-2 pr-4">יוני השאיר<div className="numerical-rating high" data-rating={2.0} /> ביקורות על <strong><a href="#">בורגר הבית</a></strong></p></div>
          <div className="wrapper-close-list-item d-flex flex-row-reverse"><a href="#" className="close-list-item"><i className="fa fa-close" /></a></div>
          </li>
          <li>
          <div className="wrapper-li d-flex"><i className="list-box-icon sl sl-icon-heart order-1" /><p className="order-2 pr-4"> משהו סימן את <strong><a href="#">בורגר הבית</a></strong></p></div>
          <div className="wrapper-close-list-item d-flex flex-row-reverse"><a href="#" className="close-list-item"><i className="fa fa-close" /></a></div>
          </li>
          <li>
          <div className="wrapper-li d-flex"> <i className="list-box-icon sl sl-icon-star order-1" /><p className="order-2 pr-4">יוני השאיר<div className="numerical-rating high" data-rating={4.0} /> ביקורות על <strong><a href="#">בורגר הבית</a></strong></p></div>
          <div className="wrapper-close-list-item d-flex flex-row-reverse"><a href="#" className="close-list-item"><i className="fa fa-close" /></a></div>
          </li>
          <li>
          <div className="wrapper-li d-flex"> <i className="list-box-icon sl sl-icon-star order-1" /><p className="order-2 pr-4">יעקב השאיר  <div className="numerical-rating high" data-rating="2.5" /> ביקורות על <strong><a href="#">מסעדת אבי</a></strong></p></div>
          <div className="wrapper-close-list-item d-flex flex-row-reverse"><a href="#" className="close-list-item"><i className="fa fa-close" /></a></div>
          </li>
        </ul>
      </div>
    </div> 
        </>
    )
}
