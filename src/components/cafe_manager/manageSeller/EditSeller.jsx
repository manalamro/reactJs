import React, { Component } from 'react'

export default class EditSeller extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      id: this.props.user.id,
      username: this.props.user.username,
      phone: this.props.user.phone,
      email: this.props.user.email,
      credit: this.props.user.credit,

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
    const user = this.state;
    this.props.updateEditUser(user)
  }
  
  render() {
    const {id, username, phone, email, credit} = this.state 
    return (
      <div>
        <div className="card w-100 mt-2 border-danger">
          <div className="card-header bg-danger text-light">تعديل العرض رقم : <small>{id}</small></div>
          <div className="card-body text-primary">
            <form>
             
            <div className="form-group">
              <input type="text" name="username" className="form-control" placeholder="اسم المستخدم" onChange={this.handleInputChange}/>
              value={username}
              </div>
             
              <div className="form-group">
                  <input type="number" name="phone" className="form-control" placeholder="الهاتف" onChange={this.handleInputChange}/>                
                  value={phone}

              </div>


              <div className="form-group">
                  <input type="text" name="email" className="form-control" placeholder="الايميل" onChange={this.handleInputChange}/>
                  value={email}

              </div>

              <div className="form-group">
                <input type="number" name="credit" className="form-control" placeholder="الرصيد" onChange={this.handleInputChange}/>
                value={credit}
              </div>
              
              
              <button type="reset" className="btn btn-block" style ={{}} 
                onClick={this.submitEdit}><i className="fa fa-edit"></i>تعديل
              </button>
              <button className="btn btn-block btn-outline-secondary" 
                onClick={this.props.cancelEditUser}>الغاء
              </button>
            </form>
          </div>
        </div>
      </div>
    
    )
  }
}
