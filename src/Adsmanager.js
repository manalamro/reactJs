import React, { Component } from 'react';
import AdsData from './components/cafe_manager/Ads/AdsData';
import AddAds from './components/cafe_manager/Ads/AddAds';
import EditAds from './components/cafe_manager/Ads/EditAds';
import Data from './DataSample.json';


class Adsmanager extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      adsData: [],
      editAds: {user: null, display: false}
    }
    this.createNewAds  = this.createNewAds.bind(this);
    this.editAds       = this.editAds.bind(this);
    this.cancelEditAds = this.cancelEditAds.bind(this);
    this.updateEditAds = this.updateEditAds.bind(this);
    this.deleteAds    = this.deleteAds.bind(this)

  }

  componentWillMount() {
    // Check localStorage
    if (!localStorage.getItem('adsData')) {
      localStorage.setItem('adsData', JSON.stringify(Data))
    }
    let data = localStorage.getItem('adsData')
    this.setState({
      adsData: JSON.parse(data)
    });
  }
  

  createNewAds(newOffer) {
    // Parse isactive to number
    let newAdsoffer = this.state.adsData
    newOffer.isactive = parseInt(newOffer.isactive)
    newOffer.isPointPromotion = parseInt(newOffer.isPointPromotion)
    newOffer.isDiscountPromotion = parseInt(newOffer.isDiscountPromotion)
    newAdsoffer.push(newOffer)
    this.setState({
      adsData: newAdsoffer
    });
    // Save to local storage
    localStorage.setItem('adsData', JSON.stringify(newAdsoffer))
  }

  editAds(adsId) {
    var ads = this.state.adsData.filter((item) => item.id === adsId)[0]
    this.setState({
      editAds: {ads: ads, display: true}
    })
  }

  cancelEditAds() {
    this.setState({
      editAds: { ...this.state.editAds, display: false}
    })
  }

  updateEditAds(ads) {
    const adsIndex = this.state.adsData.findIndex((item) => item.id === ads.id)
    ads = {...this.state.adsData[adsIndex], ...ads} // update data user
    const newAds2 = this.state.adsData
    newAds2[adsIndex] = {...ads}; // update edited user to data
    this.setState({
      adsData: newAds2
    })
    // Save to local storage
    localStorage.setItem('adsData', JSON.stringify(newAds2))
    
    // Hide edit form
    this.setState({
      editAds: { ...this.state.editAds, display: false}
    })
  }

  deleteAds(adsId) {
    const newAds1 = this.state.adsData.filter((item) => item.id !== adsId)
    this.setState({
      adsData: newAds1
    });
    // Save to local storage
    localStorage.setItem('adsData', JSON.stringify(newAds1))
  }

  render() {

    return (
      <div>
        <div>
        <div className="jumbotron jumbotron-fluid" style={{backgroundColor:'#FAF4EE',height:'136px'}}>
          <div className="container">
            <h1 className="display-4 text-center" style={{fontFamily:'Poppins' ,fontsize:'17',marginTop:'-34px',color:'#9A4726'}}>ادارة العروض</h1>
            <img src={require('./assets/logo.png')} style={{height:'100px', width:'100px', marginTop:'-114px',marginLeft:'-114px'}} alt=""/>
          </div>
        </div>
      </div>
        <div className="container">


          <div className="row">
            <div className="col-3">
              <AddAds createNewAds={this.createNewAds}/>

              {this.state.editAds.display && (
                <EditAds ads={this.state.editAds.ads}
                  cancelEditAds={this.cancelEditAds}
                  updateEditAds={this.updateEditAds}
                />
              )}
              
            </div>
            <div className="col-9">
              <AdsData 
                adss={this.state.adsData}
                editAds={this.editAds}
                deleteAds={this.deleteAds} 
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Adsmanager;
