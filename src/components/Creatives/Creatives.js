import React from 'react';
import './Creatives.scss';
import creativeSettings from './animations'

class Creatives extends React.Component {
  state = {
    creativeSlide: 0
  };

  componentDidMount() {
    setInterval(() => {

      let addSlide = this.state.creativeSlide + 1;
      if(addSlide > (creativeSettings.length-1)) {
        addSlide = 0;
      }

      this.setState({
        creativeSlide: addSlide
      });
    },3000);
  }

  render(){

    let currentCreative = creativeSettings[this.state.creativeSlide];

    return (
      <div className="Creatives">
        <div className="container">
          <div className="creativeContainer" style={{
            width: currentCreative.creativeWidth,
            height: currentCreative.creativeHeight,
          }}>
            <div className="device" style={{
              transform: currentCreative.deviceSize,
              left: currentCreative.deviceLeft,
              top: currentCreative.deviceTop
            }}>
              <div className="crossLine left"></div>
              <div className="crossLine right"></div>
            </div>
            <div className="content" style={{
              width: currentCreative.contentWidth,
              transform: currentCreative.contentScale,
              top: currentCreative.contentTop,
              right: currentCreative.contentRight,
            }}>
              <h3 className="headline">Creative Headline</h3>
              <p className="subline">Here some extra information</p>
              <div className="cta" style={{
                transform: currentCreative.ctaSize,
                top: currentCreative.ctaTop,
                left: currentCreative.ctaLeft,
              }}>
                <span className="ctaCopy">Click out!</span>
              </div>
            </div>
            <div className="logo" style={{
              bottom: currentCreative.logoBottom,
              right: currentCreative.logoRight,
            }}>
              <span className="logoCircle"></span>
              <span className="logoCopy">Brand Logo</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Creatives;
