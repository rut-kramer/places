import React from 'react'

export default function OpenHours() {
    return (
        <>
            <div className="boxed-widget opening-hours margin-top-35">
                <div className="listing-badge now-open">עכשיו פתוח</div>
                <h3><i className="sl sl-icon-clock" /> שעות פתיחה</h3>
                <ul>
                    <li> <span>9  - 5 </span>ראשון</li>
                    <li> <span>9  - 5 </span>שני</li>
                    <li> <span>9  - 5 </span>שלישי</li>
                    <li> <span>9  - 5 </span>רביעי</li>
                    <li> <span>9  - 5 </span> חמישי</li>
                    <li> <span>9  - 3 </span> שישי</li>
                    <li> <span>סגור </span> שבת</li>
                </ul>
            </div>
        </>
    )
}
