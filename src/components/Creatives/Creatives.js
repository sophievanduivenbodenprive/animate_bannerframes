import React from 'react';
import './Creatives.scss';

const creativeSettings = [
  {
    label: 'rectangle',
    creativeWidth: '336px',
    creativeHeight: '280px',
    deviceSize: 'scale(1)',
    deviceTop: '20px',
    deviceLeft: '20px',
    contentWidth: '155px',
    contentScale: 'scale(1)',
    contentTop: '50px',
    contentRight: '20px',
    ctaSize: 'scale(1)',
    ctaTop: '105px',
    ctaLeft: '0',
    logoBottom: '20px',
    logoRight: '20px'
  }, {
    label: 'billboard',
    creativeWidth: '970px',
    creativeHeight: '250px',
    deviceSize: 'scale(0.87)',
    deviceTop: '6px',
    deviceLeft: '330px',
    contentWidth: '400px',
    contentScale: 'scale(1.3)',
    contentTop: '67px',
    contentRight: '20px',
    ctaSize: 'scale(0.8)',
    ctaTop: '57px',
    ctaLeft: '0',
    logoBottom: '20px',
    logoRight: '20px'
  }, {
    label: 'hpa',
    creativeWidth: '300px',
    creativeHeight: '600px',
    deviceSize: 'scale(1.1)',
    deviceTop: '45px',
    deviceLeft: '86px',
    contentWidth: '187px',
    contentScale: 'scale(1.45)',
    contentTop: '345px',
    contentRight: '50px',
    ctaSize: 'scale(0.8)',
    ctaTop: '80px',
    ctaLeft: '0',
    logoBottom: '20px',
    logoRight: '20px'
  }, {
    label: 'leaderboard',
    creativeWidth: '728px',
    creativeHeight: '90px',
    deviceSize: 'scale(0.8)',
    deviceTop: '-9px',
    deviceLeft: '18px',
    contentWidth: '487px',
    contentScale: 'scale(1.1)',
    contentTop: '19px',
    contentRight: '61px',
    ctaSize: 'scale(1)',
    ctaTop: '6px',
    ctaLeft: '240px',
    logoBottom: '30px',
    logoRight: '20px'
  }, {
    label: 'skyscraper',
    creativeWidth: '160px',
    creativeHeight: '600px',
    deviceSize: 'scale(1)',
    deviceTop: '40px',
    deviceLeft: '18px',
    contentWidth: '130px',
    contentScale: 'scale(1)',
    contentTop: '300px',
    contentRight: '15px',
    ctaSize: 'scale(1.1)',
    ctaTop: '105px',
    ctaLeft: '0',
    logoBottom: '20px',
    logoRight: '14px'
  }
]

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
