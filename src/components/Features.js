import React from 'react';
import cranfruitImage from '../source/cranfruit.png';
import noPreservativesImage from '../source/no-preservatives.png';
import noAdditivesImage from '../source/no-additives.png';
import flavourImage from '../source/flavour.png';
import biodegradableImage from '../source/biodegradable.png';

function Features() {
  return (
      <section className="features" id="features">
          <div className="left">
            <img src={cranfruitImage} alt="cran-img" className="cranf" id="cranf" />
          </div>

          <div className="right">
            <div className="row mb-3">
              <div className="col-md-12 feature-grid">
                <div className="features-head">
                  <span className="head-p" style={{ fontWeight: 'bolder', fontSize: '1.3rem' }}>
                    "Pure Fruit Essence"
                  </span>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6 mb-2 feature-subgrid">
                <div className="features-subhead features-subhead1">
                  <img src={noPreservativesImage} alt="Preservatives" className="sub-img" />
                  <span className="sub-p">No Preservatives</span>
                </div>
              </div>

              <div className="col-md-6 mb-2 feature-subgrid">
                <div className="features-subhead features-subhead2">
                  <img src={noAdditivesImage} alt="Artificial Color" className="sub-img" />
                  <span className="sub-p">No Artificial Color</span>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6 mb-2 feature-subgrid">
                <div className="features-subhead features-subhead3">
                  <img src={flavourImage} alt="Flavours" className="sub-img" />
                  <span className="sub-p">No Artificial Flavours</span>
                </div>
              </div>
              <div className="col-md-6 mb-2 feature-subgrid">
                <div className="features-subhead features-subhead4">
                  <img src={biodegradableImage} alt="Biodegradable" className="sub-img" />
                  <span className="sub-p">100% Biodegradable </span>
                </div>
              </div>
            </div>
          </div>
      </section>
  );
}

export default Features;
