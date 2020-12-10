import React from 'react'

export default function Contact() {
    return (
        <>
            <div className="boxed-widget margin-top-35">
                <div className="hosted-by-title">
                    <h4><span>בחסות</span> <a href="pages-user-profile.html">טום פריין</a></h4>
                    <a href="pages-user-profile.html" className="hosted-by-avatar"><img src="images/dashboard-avatar.jpg" alt /></a>
                </div>
                <ul className="listing-details-sidebar">
                    <li><i className="sl sl-icon-phone" /> (123) 123-456</li>
                    {/* <li><i class="sl sl-icon-globe"></i> <a href="#">http://example.com</a></li> */}
                    <li><i className="fa fa-envelope-o" /> <a href="#">tom@example.com</a></li>
                </ul>
                <ul className="listing-details-sidebar social-profiles">
                    <li><a href="#" className="facebook-profile"><i className="fa fa-facebook-square" /> Facebook</a></li>
                    <li><a href="#" className="twitter-profile"><i className="fa fa-twitter" /> Twitter</a></li>
                    {/* <li><a href="#" class="gplus-profile"><i class="fa fa-google-plus"></i> Google Plus</a></li> */}
                </ul>
                {/* Reply to review popup */}
                <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
                    <div className="small-dialog-header">
                        <h3>שלח הודעה</h3>
                    </div>
                    <div className="message-reply margin-top-0">
                        <textarea cols={40} rows={3} placeholder="Your message to Tom" defaultValue={""} />
                        <button className="button">שלח הודעה</button>
                    </div>
                </div>
                <a href="#small-dialog" className="send-message-to-owner button popup-with-zoom-anim"><i className="sl sl-icon-envelope-open" /> שלח הודעה</a>
            </div>
        </>
    )
}
