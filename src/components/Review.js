import React from 'react';
import userImage from '../source/user.png'; // Import the user image

function Review() {
  return (
    <section className="review" id="review">
        <div className="review-container">

          <div className="col-md-12 review-highlight">
              <div className="review-head">
                <span className="head-p">Review</span>
              </div>
          </div>
          
          <div className="row mb-3">
            <div className="col-6 col-lg-3 mb-3">
              <div className="review-user">
                <img src={userImage} alt="Review 1" className="user-img" />
                <h5 className="review-h">Miguel L.</h5>
                <p className="review-p">Hits the spot</p>
              </div>
            </div>

            <div className="col-6 col-lg-3 mb-3">
              <div className="review-user">
                <img src={userImage} alt="Review 2" className="user-img" />
                <h5 className="review-h">Scott E.</h5>
                <p className="review-p">High Quality</p>
              </div>
            </div>

            <div className="col-6 col-lg-3 mb-3">
              <div className="review-user">
                <img src={userImage} alt="Review 3" className="user-img" />
                <h5 className="review-h">Jule G.</h5>
                <p className="review-p">Not Good Not Bad</p>
              </div>
            </div>

            <div className="col-6 col-lg-3 mb-3">
              <div className="review-user">
                <img src={userImage} alt="Review 4" className="user-img" />
                <h5 className="review-h">Melissa F.</h5>
                <p className="review-p">Satisfactory</p>
              </div>
            </div>

          </div>
        </div>
    </section>
  );
}

export default Review;
