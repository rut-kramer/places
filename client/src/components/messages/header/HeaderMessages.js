import React from 'react'

export default function HeaderMessages() {
    return (
        <>
             <div id="titlebar">
    <div className="row">
      <div className="col-md-12  d-flex justify-content-between align-items-center">
        <h2>הודעות</h2>
        {/* Breadcrumbs */}
        <nav id="breadcrumbs">
          <ul>
            <li><a href="#">דף הבית</a></li>
            <li><a href="#">ראשי</a></li>
            <li>הודעות</li>
          </ul>
        </nav>
      </div>
    </div>
  </div> 
        </>
    )
}
