import React from 'react'
export default function Booking() {
    return (
        <>
            <div id="booking-widget-anchor" className="boxed-widget booking-widget margin-top-35">
                <h3><i className="fa fa-calendar-check-o " /> הזמנות</h3>
                <div className="row with-forms  margin-top-0">
                    {/* Date Range Picker - docs: http://www.daterangepicker.com/ */}
                    <div className="col-lg-12">
                        <input type="text" id="date-picker" placeholder="תאריך" readOnly="readonly" />
                    </div>
                    {/* Panel Dropdown */}
                    <div className="col-lg-12">
                        <div className="panel-dropdown time-slots-dropdown">
                            <a href="#">זמני מחירות</a>
                            <div className="panel-dropdown-content padding-reset">
                                <div className="panel-dropdown-scrollable">
                                    {/* Time Slot */}
                                    <div className="time-slot">
                                        <input type="radio" name="time-slot" id="time-slot-1" />
                                        <label htmlFor="time-slot-1">
                                            <strong>8:30  - 9:00 </strong>
                                            <span>1 חריץ זמין</span>
                                        </label>
                                    </div>
                                    {/* Time Slot */}
                                    <div className="time-slot">
                                        <input type="radio" name="time-slot" id="time-slot-2" />
                                        <label htmlFor="time-slot-2">
                                            <strong>9:00  - 9:30 </strong>
                                            <span>2 slots available</span>
                                        </label>
                                    </div>
                                    {/* Time Slot */}
                                    <div className="time-slot">
                                        <input type="radio" name="time-slot" id="time-slot-3" />
                                        <label htmlFor="time-slot-3">
                                            <strong>9:30  - 10:00 </strong>
                                            <span>1 משבצות זמינות</span>
                                        </label>
                                    </div>
                                    {/* Time Slot */}
                                    <div className="time-slot">
                                        <input type="radio" name="time-slot" id="time-slot-4" />
                                        <label htmlFor="time-slot-4">
                                            <strong>10:00  - 10:30 </strong>
                                            <span>3 משבצות זמינות</span>
                                        </label>
                                    </div>
                                    {/* Time Slot */}
                                    <div className="time-slot">
                                        <input type="radio" name="time-slot" id="time-slot-5" />
                                        <label htmlFor="time-slot-5">
                                            <strong>13:00  - 13:30 </strong>
                                            <span>2 משבצות זמינות</span>
                                        </label>
                                    </div>
                                    {/* Time Slot */}
                                    <div className="time-slot">
                                        <input type="radio" name="time-slot" id="time-slot-6" />
                                        <label htmlFor="time-slot-6">
                                            <strong>13:30  - 14:00 </strong>
                                            <span>1 משבצות זמינות</span>
                                        </label>
                                    </div>
                                    {/* Time Slot */}
                                    <div className="time-slot">
                                        <input type="radio" name="time-slot" id="time-slot-7" />
                                        <label htmlFor="time-slot-7">
                                            <strong>14:00  - 14:30 </strong>
                                            <span>1 משבצות זמינות</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Panel Dropdown / End */}
                    {/* Panel Dropdown */}
                    <div className="col-lg-12">
                        <div className="panel-dropdown">
                            <a href="#">אורחים <span className="qtyTotal" name="qtyTotal">1</span></a>
                            <div className="panel-dropdown-content">
                                {/* Quantity Buttons */}
                                <div className="qtyButtons">
                                    <div className="qtyTitle">מבוגרים</div>
                                    <input type="text" name="qtyInput" defaultValue={1} />
                                </div>
                                <div className="qtyButtons">
                                    <div className="qtyTitle">ילדים</div>
                                    <input type="text" name="qtyInput" defaultValue={0} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Panel Dropdown / End */}
                </div>
                {/* Book Now */}
                <a href="pages-booking.html" className="button book-now fullwidth margin-top-5">בקשה להזמין</a>
            </div>
        </>
    )
}
