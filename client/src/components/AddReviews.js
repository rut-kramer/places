import React from 'react'

export default function AddReviews() {
    return (
        <>
             <div id="add-review" className="add-review-box">
            {/* Add Review */}
            <h3 className="listing-desc-headline margin-bottom-10">Add Review</h3>
            <p className="comment-notes">Your email address will not be published.</p>
            {/* Subratings Container */}
            <div className="sub-ratings-container">
              {/* Subrating #1 */}
              <div className="add-sub-rating">
                <div className="sub-rating-title">Service <i className="tip" data-tip-content="Quality of customer service and attitude to work with you" /></div>
                <div className="sub-rating-stars">
                  {/* Leave Rating */}
                  <div className="clearfix" />
                  <form className="leave-rating">
                    <input type="radio" name="rating" id="rating-1" defaultValue={1} />
                    <label htmlFor="rating-1" className="fa fa-star" />
                    <input type="radio" name="rating" id="rating-2" defaultValue={2} />
                    <label htmlFor="rating-2" className="fa fa-star" />
                    <input type="radio" name="rating" id="rating-3" defaultValue={3} />
                    <label htmlFor="rating-3" className="fa fa-star" />
                    <input type="radio" name="rating" id="rating-4" defaultValue={4} />
                    <label htmlFor="rating-4" className="fa fa-star" />
                    <input type="radio" name="rating" id="rating-5" defaultValue={5} />
                    <label htmlFor="rating-5" className="fa fa-star" />
                  </form>
                </div>
              </div>
              {/* Subrating #2 */}
              <div className="add-sub-rating">
                <div className="sub-rating-title">Value for Money <i className="tip" data-tip-content="Overall experience received for the amount spent" /></div>
                <div className="sub-rating-stars">
                  {/* Leave Rating */}
                  <div className="clearfix" />
                  <form className="leave-rating">
                    <input type="radio" name="rating" id="rating-11" defaultValue={1} />
                    <label htmlFor="rating-11" className="fa fa-star" />
                    <input type="radio" name="rating" id="rating-12" defaultValue={2} />
                    <label htmlFor="rating-12" className="fa fa-star" />
                    <input type="radio" name="rating" id="rating-13" defaultValue={3} />
                    <label htmlFor="rating-13" className="fa fa-star" />
                    <input type="radio" name="rating" id="rating-14" defaultValue={4} />
                    <label htmlFor="rating-14" className="fa fa-star" />
                    <input type="radio" name="rating" id="rating-15" defaultValue={5} />
                    <label htmlFor="rating-15" className="fa fa-star" />
                  </form>
                </div>
              </div>
              {/* Subrating #3 */}
              <div className="add-sub-rating">
                <div className="sub-rating-title">Location <i className="tip" data-tip-content="Visibility, commute or nearby parking spots" /></div>
                <div className="sub-rating-stars">
                  {/* Leave Rating */}
                  <div className="clearfix" />
                  <form className="leave-rating">
                    <input type="radio" name="rating" id="rating-21" defaultValue={1} />
                    <label htmlFor="rating-21" className="fa fa-star" />
                    <input type="radio" name="rating" id="rating-22" defaultValue={2} />
                    <label htmlFor="rating-22" className="fa fa-star" />
                    <input type="radio" name="rating" id="rating-23" defaultValue={3} />
                    <label htmlFor="rating-23" className="fa fa-star" />
                    <input type="radio" name="rating" id="rating-24" defaultValue={4} />
                    <label htmlFor="rating-24" className="fa fa-star" />
                    <input type="radio" name="rating" id="rating-25" defaultValue={5} />
                    <label htmlFor="rating-25" className="fa fa-star" />
                  </form>
                </div>
              </div>
              {/* Subrating #4 */}
              <div className="add-sub-rating">
                <div className="sub-rating-title">Cleanliness <i className="tip" data-tip-content="The physical condition of the business" /></div>
                <div className="sub-rating-stars">
                  {/* Leave Rating */}
                  <div className="clearfix" />
                  <form className="leave-rating">
                    <input type="radio" name="rating" id="rating-31" defaultValue={1} />
                    <label htmlFor="rating-31" className="fa fa-star" />
                    <input type="radio" name="rating" id="rating-32" defaultValue={2} />
                    <label htmlFor="rating-32" className="fa fa-star" />
                    <input type="radio" name="rating" id="rating-33" defaultValue={3} />
                    <label htmlFor="rating-33" className="fa fa-star" />
                    <input type="radio" name="rating" id="rating-34" defaultValue={4} />
                    <label htmlFor="rating-34" className="fa fa-star" />
                    <input type="radio" name="rating" id="rating-35" defaultValue={5} />
                    <label htmlFor="rating-35" className="fa fa-star" />
                  </form>
                </div>
              </div>	
              {/* Uplaod Photos */}
              <div className="uploadButton margin-top-15">
                <input className="uploadButton-input" type="file" name="attachments[]" accept="image/*, application/pdf" id="upload" multiple />
                <label className="uploadButton-button ripple-effect" htmlFor="upload">Add Photos</label>
                <span className="uploadButton-file-name" />
              </div>
              {/* Uplaod Photos / End */}
            </div>
            {/* Subratings Container / End */}
            {/* Review Comment */}
            <form id="add-comment" className="add-comment">
              <fieldset>
                <div className="row">
                  <div className="col-md-6">
                    <label>Name:</label>
                    <input type="text" defaultValue />
                  </div>
                  <div className="col-md-6">
                    <label>Email:</label>
                    <input type="text" defaultValue />
                  </div>
                </div>
                <div>
                  <label>Review:</label>
                  <textarea cols={40} rows={3} defaultValue={""} />
                </div>
              </fieldset>
              <button className="button">Submit Review</button>
              <div className="clearfix" />
            </form>
          </div>
        </>
    )
}
