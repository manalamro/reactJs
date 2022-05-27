import React, { Component } from 'react'

export default class EditUser extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      id: this.props.user.id,
      username: this.props.user.username,
      phone: this.props.user.phone,
      email: this.props.user.email,
      role: this.props.user.role,

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
    const {id, username, phone, email,role} = this.state 
    return (
      <div>
        <div className="card w-100 mt-2 ">
          <div className="card-header " style={{background:'#9A4726',color:'white'}}>تعديل العرض رقم : <small>{id}</small></div>
          <div className="card-body">
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
                <select className="form-control" name="role" value={role} onChange={this.handleInputChange}
                >
                    <option value={0} disabled>دور المستخدم</option>
                    <option value={1}>ادمن</option>
                    <option value={2}>مسؤول الكافيتريا</option>
                    <option value={3}>زبون</option>
                    <option value={4}>بائع</option>
                </select>  
              </div>
              
              <button type="reset" className="btn btn-block" style ={{backgroundColor:'#9A4726', color:'white'}} 
                onClick={this.submitEdit}><i className="fa fa-edit"></i>تعديل
              </button>
              <button className="btn btn-block" style ={{backgroundColor:'#FAF4EE', borderColor:'#9A4726'}}
                onClick={this.props.cancelEditUser}>الغاء
              </button>
            </form>
          </div>
        </div>
      </div>
    
    )
  }
}
