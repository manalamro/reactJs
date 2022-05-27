import React, { Component } from 'react'

export default class EditAds extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      id: this.props.ads.id,
      cafeteria_id: this.props.ads.cafeteria_id,
      name: this.props.ads.name,
      description: this.props.ads.description,
      promotionVaue: this.props.ads.promotionVaue,
      isactive: this.props.ads.isactive,
      isPointPromotion: this.props.ads.isPointPromotion,
      isDiscountPromotion: this.props.ads.isDiscountPromotion,

    }

    this.submitEdit = this.submitEdit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  
  handleInputChange(event) {
    const target = event.target
    const name = target.name
    const value = (target.tagName === "SELECT") ? parseInt(target.value): target.value
    this.setState({
      [name]: value
    });
  }
  submitEdit() {
    const ads = this.state;
    this.props.updateEditAds(ads)
  }
  

  render() {
    const {id, cafeteria_id, name, description, promotionVaue,isactive,isPointPromotion,isDiscountPromotion} = this.state 
    return (
      <div>
        <div className="card w-100 mt-2 border-danger">
          <div className="card-header bg-danger text-light">تعديل العرض رقم : <small>{id}</small></div>
          <div className="card-body text-primary">
            <form>
              <div className="form-group">
                <input type="number" name="cafeteria_id" className="form-control" placeholder="رقم الكافيتريا"
                  value={cafeteria_id}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <input type="text" name="name" className="form-control" placeholder="اسم الكافيتريا" 
                  value={name}
                  onChange={this.handleInputChange}
                />
                
              </div>
              <div className="form-group">
                <input type="text" name="description" className="form-control" placeholder="وصف العرض" 
                  value={description}
                  onChange={this.handleInputChange}
                />
                
              </div>
              <div className="form-group">
                <input type="number" name="promotionVaue" className="form-control" placeholder="قيمة العرض" 
                  value={promotionVaue}
                  onChange={this.handleInputChange}
                />
              
              </div>

                <div className="form-group">
                <select className="form-control" name="isactive" value={isactive} onChange={this.handleInputChange}
                >
                    <option value={0} disabled>حدد حالة العرض</option>
                    <option value={1}>فعال</option>
                    <option value={2}>غير فعال</option>
                </select>  
              </div>

              <div className="form-group">
                <select className="form-control" name="isDiscountPromotion" value={isDiscountPromotion} onChange={this.handleInputChange}
                >
                  <option value={0} disabled>حدد العرض من ضمن عروض الخصومات ام لا </option>
                    <option value={1}>نعم</option>
                    <option value={2}>لا</option>
       
                </select>  
              </div>

          
                <div className="form-group">
                  <select className="form-control" name="isPointPromotion"value={isPointPromotion} onChange={this.handleInputChange}>
                  <option value={0} disabled>حدد العرض من ضمن عروض النقاط ام لا </option>
                    <option value={1}>نعم</option>
                    <option value={2}>لا</option>
       
                  </select>  
                </div> 
             

              <button type="reset" className="btn btn-block" style ={{}} 
                onClick={this.submitEdit}><i className="fa fa-edit"></i>تعديل
              </button>
              <button className="btn btn-block btn-outline-secondary" 
                onClick={this.props.cancelEditAds}>الغاء
              </button>
            </form>
          </div>
        </div>
      </div>
    
    )
  }
}
