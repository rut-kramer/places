import React from 'react'
import RecentActivities from './recent_activities/RecentActivities'
import Invoices from './invoices/Invoices'
import './dist/dashboard.css'

export default function Dashboard() {
    return (
        <>
  {/* Content
	================================================== */}
<div className="dashboard-content">
  {/* Titlebar */}
  <div id="titlebar">
    <div className="row">
      <div className="col-md-12 d-flex justify-content-between">
        <h2>היי אבי!</h2>
        {/* Breadcrumbs */}
        <nav id="breadcrumbs">
          <ul>
            <li><a href="#">דף הבית</a></li>
            <li>ראשי</li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  {/* Notice */}
  <div className="row">
    <div className="col-md-12">
      <div className="notification success closeable margin-bottom-30">
        <p>הרישום שלך ב- <strong>מלון גובנדור</strong> אושר!</p>
        <a className="close" href="#" />
      </div>
    </div>
  </div>
  {/* Content */}
  <div className="row">
    {/* Item */}
    <div className="col-lg-3 col-md-6">
      <div className="dashboard-stat color-1">
        <div className="dashboard-stat-content"><h4>6</h4> <span>רשומות פעילות</span></div>
        <div className="dashboard-stat-icon"><i className="im im-icon-Map2" /></div>
      </div>
    </div>
    {/* Item */}
    <div className="col-lg-3 col-md-6">
      <div className="dashboard-stat color-2">
        <div className="dashboard-stat-content"><h4>726</h4> <span>צפיות כוללות</span></div>
        <div className="dashboard-stat-icon"><i className="im im-icon-Line-Chart" /></div>
      </div>
    </div>
    {/* Item */}
    <div className="col-lg-3 col-md-6">
      <div className="dashboard-stat color-3">
        <div className="dashboard-stat-content"><h4>95</h4> <span>ביקורות כוללות</span></div>
        <div className="dashboard-stat-icon"><i className="im im-icon-Add-UserStar" /></div>
      </div>
    </div>
    {/* Item */}
    <div className="col-lg-3 col-md-6">
      <div className="dashboard-stat color-4">
        <div className="dashboard-stat-content"><h4>126</h4> <span>מסומנים </span></div>
        <div className="dashboard-stat-icon"><i className="im im-icon-Heart" /></div>
      </div>
    </div>
  </div>
  <div className="row">
    {/* Recent Activity */}
  <RecentActivities/>
    {/* Invoices */}
   <Invoices/>
    {/* Copyrights */}
    <div className="col-md-12">
      <div className="copyrights">© 2019 Listeo. All Rights Reserved.</div>
    </div>
  </div>
</div>
{/* Content / End */}

        </>
    )
}
