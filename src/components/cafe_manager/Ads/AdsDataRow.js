import React, { Component } from 'react'
export default class AdsDataRow extends Component {
  constructor(props, context) {
    super(props, context);
    this.onClickEditAds = this.onClickEditAds.bind(this);
    this.onClickDeleteAds = this.onClickDeleteAds.bind(this);
  }

  
  onClickEditAds() {
    this.props.editAds(this.props.ads.id)
  }
  onClickDeleteAds() {
    this.props.deleteAds(this.props.ads.id)
  }


   IsActiveState(Isactive) {
    if(Isactive===1) return 'فعال'
    if(Isactive===2) return 'غير فعال'


  }

  isPointPromotionType(IsPointPromotion) {
  
    if(IsPointPromotion===1) return 'نعم'
    if(IsPointPromotion===2) return 'لا'    


  }
  isDiscountPromotionType(IsDiscountPromotion) {
 
    if(IsDiscountPromotion===1) return 'نعم'
    if(IsDiscountPromotion===2) return 'لا'

  }

  render() {
    const { ads, order } = this.props
  
   
    const isactiveStyle = 
      (ads.isactive === 1 ? {color: "red", fontWeight: "bold"} 
      : ads.isactive === 2 ? {color : "black"} : {})

      const ispointStyle = 
      (ads.isPointPromotion === 1 ? {color: "red", fontWeight: "bold"} 
      : ads.isPointPromotion === 2 ? {color : "black"} : {})

      const isdiscountStyle = 
      (ads.isDiscountPromotion === 1 ? {color: "red", fontWeight: "bold"} 
      : ads.isDiscountPromotion === 2 ? {color : "black"} : {})

    return (

          <tr>
            <th scope="row">{order + 1}</th>
            <td>{ads.cafeteria_id}</td>
            <td>{ads.name}</td>
            <td>{ads.description}</td>  
            <td>{ads.promotionVaue}</td>
            <td style={isactiveStyle}>{this.IsActiveState(ads.isactive)}</td>                
            <td style={ispointStyle}>{this.isPointPromotionType(ads.isPointPromotion)}</td>                
            <td style={isdiscountStyle}>{this.isDiscountPromotionType(ads.isDiscountPromotion)}</td>                
            <td>
              <button className="btn btn-info" onClick={this.onClickEditAds}><i className="fa fa-edit" /> تعديل</button>
              <button className="btn btn-danger" onClick={this.onClickDeleteAds}><i className="fa fa-trash-o" /> حذف</button>
            </td>
          </tr>
    
        )
      }
}

