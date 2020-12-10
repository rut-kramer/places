import React from 'react'

export default function Reviews() {
    return (
        <>
            <section className="comments listing-reviews">
              <ul>
                <li>
                  <div className="avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=70" alt /></div>
                  <div className="comment-content"><div className="arrow-comment" />
                    <div className="comment-by">Kathy Brown <i className="tip" data-tip-content="Person who left this review actually was a customer" /> <span className="date">June 2019</span>
                      <div className="star-rating" data-rating={5} />
                    </div>
                    <p>Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere tristique sem, eu ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus</p>
                    <div className="review-images mfp-gallery-container">
                      <a href="images/review-image-01.jpg" className="mfp-gallery"><img src="images/review-image-01.jpg" alt /></a>
                    </div>
                    <a href="#" className="rate-review"><i className="sl sl-icon-like" /> Helpful Review <span>12</span></a>
                  </div>
                </li>
                <li>
                  <div className="avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=70" alt /> </div>
                  <div className="comment-content"><div className="arrow-comment" />
                    <div className="comment-by">John Doe<span className="date">May 2019</span>
                      <div className="star-rating" data-rating={4} />
                    </div>
                    <p>Commodo est luctus eget. Proin in nunc laoreet justo volutpat blandit enim. Sem felis, ullamcorper vel aliquam non, varius eget justo. Duis quis nunc tellus sollicitudin mauris.</p>
                    <a href="#" className="rate-review"><i className="sl sl-icon-like" /> Helpful Review <span>2</span></a>
                  </div>
                </li>
                <li>
                  <div className="avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=70" alt /></div>
                  <div className="comment-content"><div className="arrow-comment" />
                    <div className="comment-by">Kathy Brown<span className="date">June 2019</span>
                      <div className="star-rating" data-rating={5} />
                    </div>
                    <p>Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere tristique sem, eu ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus</p>
                    <div className="review-images mfp-gallery-container">
                      <a href="images/review-image-02.jpg" className="mfp-gallery"><img src="images/review-image-02.jpg" alt /></a>
                      <a href="images/review-image-03.jpg" className="mfp-gallery"><img src="images/review-image-03.jpg" alt /></a>
                    </div>
                    <a href="#" className="rate-review"><i className="sl sl-icon-like" /> Helpful Review <span>4</span></a>
                  </div>
                </li>
                <li>
                  <div className="avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=70" alt /> </div>
                  <div className="comment-content"><div className="arrow-comment" />
                    <div className="comment-by">John Doe<span className="date">May 2019</span>
                      <div className="star-rating" data-rating={5} />
                    </div>
                    <p>Commodo est luctus eget. Proin in nunc laoreet justo volutpat blandit enim. Sem felis, ullamcorper vel aliquam non, varius eget justo. Duis quis nunc tellus sollicitudin mauris.</p>
                    <a href="#" className="rate-review"><i className="sl sl-icon-like" /> Helpful Review</a>
                  </div>
                </li>
              </ul>
            </section>
        </>
    )
}
