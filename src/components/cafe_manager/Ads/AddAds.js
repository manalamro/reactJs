import React, { Component } from 'react'
const uuidv1 = require('uuid/v1');

export default class AddAds extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showAddAds: false,
      addAdsDone: false
    }
    
    this.isInputChange = this.isInputChange.bind(this)
    this.submitNewAds = this.submitNewAds.bind(this)
  }

  isInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  submitNewAds() {
    const newAds = {
      id: uuidv1(),
      cafeteria_id :this.state.cafeteria_id,
      name:this.state.name,
      description: this.state.description,
      promotionVaue: this.state.promotionVaue,
      isactive:this.state.isactive,
      isPointPromotion:this.state.isPointPromotion,
      isDiscountPromotion:this.state.isDiscountPromotion,

    }

    this.props.createNewAds(newAds)

    this.setState({
      addAdsDone: !this.state.addAdsDone
    });
  }

  showAddAds() {
    this.setState({
      showAddAds: !this.state.showAddAds
    })
  }

  render() {
    if (!this.state.showAddAds) {
      return (
        <button className="btn btn-block" style={{backgroundColor:'#FAF4EE' ,borderColor:'#9A4726',color:"#9A4726"}} onClick={() => this.showAddAds()}>أضف عرض جديد</button>
      )
    } else {
      return (
        <div>
          {this.state.addAdsDone && (
            <div className="alert alert-success mt-3">
          تمت اضافة العرض!
            </div>
          )}
          <div className="card w-100 mt-2 ">
            <div className="card-header" style={{backgroundColor:'#FAF4EE' ,borderColor:'#9A4726',color:"#9A4726",textAlign:'center'}}>أضف عرض</div>
            <div className="card-body text-primary" >
              <form>

                <div className="form-group" >
                  <input type="number" name="cafeteria_id" className="form-control" placeholder="رقم الكافيتريا" onChange={this.isInputChange}/>
                </div>
                <div className="form-group">
                  <input type="text" name="name" className="form-control" placeholder="اسم الكافيتريا" onChange={this.isInputChange}/>
                </div>
                <div className="form-group">
                  <input type="text" name="description" className="form-control" placeholder="وصف العرض" onChange={this.isInputChange}/>
                </div>
                <div className="form-group">
                  <input type="number" name="promotionVaue" className="form-control" placeholder="قيمة العرض" onChange={this.isInputChange}/>
                </div>   

                <div className="form-group">
                  <select className="form-control" name="isactive" defaultValue={0} onChange={this.isInputChange}>
                    <option value={0} disabled>حدد حالة العرض</option>
                    <option value={1}>فعال</option>
                    <option value={2}>غير فعال</option>
       
                  </select>  
                </div> 
                
                <div className="form-group">
                  <select className="form-control" name="isDiscountPromotion" defaultValue={0} onChange={this.isInputChange}>
                    <option value={0} disabled>حدد العرض من ضمن عروض الخصومات ام لا </option>
                    <option value={1}>نعم</option>
                    <option value={2}>لا</option>
       
                  </select>  
                </div> 
             
                <div className="form-group">
                  <select className="form-control" name="isPointPromotion" defaultValue={0} onChange={this.isInputChange}>
                    <option value={0} disabled>حدد العرض من ضمن عروض النقاط ام لا </option>
                    <option value={1}>نعم</option>
                    <option value={2}>لا</option>
       
                  </select>  
                </div> 

                <button type="reset" className="btn btn-info btn-block" style={{backgroundColor:'#9A4726' ,borderBlockColor:'#9A4726'}} 
                  onClick={this.submitNewAds}>انشاء
                </button>
                <button className="btn btn-block btn-outline-secondary" 
                  onClick={() => this.showAddAds()}>الغاء
                </button>
              </form>
            </div>
          </div>
        </div>
  
      )
    }
  }
}
