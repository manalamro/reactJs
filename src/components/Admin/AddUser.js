import React, { Component } from 'react'
const uuidv1 = require('uuid/v1');

export default class AddUser extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showAddUser: false,
      addUserDone: false
    }
    this.isInputChange = this.isInputChange.bind(this)
    this.submitNewUser = this.submitNewUser.bind(this)
  }

  isInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  submitNewUser() {
    const newUser = {
      id: uuidv1(),
      username:this.state.username,
      phone:this.state.phone,
      email:this.state.email,
      role:this.state.role,
    }

    this.props.createNewUser(newUser)

    this.setState({
      addUserDone: !this.state.addUserDone
    });
  }

  showAddUser() {
    this.setState({
      showAddUser: !this.state.showAddUser
    })
  }

  render() {
    if (!this.state.showAddUser) {
      return (
        <button className="btn btn-block" style={{backgroundColor:'#FAF4EE' ,borderColor:'#9A4726',color:"#9A4726"}} onClick={() => this.showAddUser()}>أضف عرض جديد</button>
      )
    } else {
      return (
        <div>
          {this.state.addUserDone && (
            <div className="alert alert-success mt-3">
          تمت اضافة العرض!
            </div>
          )}
          <div className="card w-100 mt-2 ">
            <div className="card-header" style={{backgroundColor:'#FAF4EE' ,borderColor:'#9A4726',color:"#9A4726",textAlign:'center'}}>أضف عرض</div>
            <div className="card-body text-primary" >
              <form>
                
              <div className="form-group">
                  <input type="text" name="username" className="form-control" placeholder="اسم المستخدم" onChange={this.isInputChange}/>
                </div>
                <div className="form-group">
                  <input type="phone" name="phone" className="form-control" placeholder="الهاتف" onChange={this.isInputChange}/>
                </div>   
                <div className="form-group">
                  <input type="text" name="email" className="form-control" placeholder="الايميل" onChange={this.isInputChange}/>
                </div>    
                
                <div className="form-group">
                  <input type="number" name="credit" className="form-control" placeholder="الرصيد" onChange={this.isInputChange}/>
                </div>  

                <div className="form-group">
                  <select className="form-control" name="role" defaultValue={0} onChange={this.isInputChange}>
                    <option value={0} disabled>دور المستخدم</option>
                    <option value={1}>ادمن</option>
                    <option value={2}>مسؤول الكافيتريا</option>
                    <option value={3}>زبون</option>
                    <option value={4}>بائع</option>

       
                  </select>  
                </div> 

                
                <button type="reset" className="btn btn-info btn-block" style={{backgroundColor:'#9A4726' ,borderBlockColor:'#9A4726'}} 
                  onClick={this.submitNewUser}>انشاء
                </button>
                <button className="btn btn-block btn-outline-secondary" 
                  onClick={() => this.showAddUser()}>الغاء
                </button>
              </form>
            </div>
          </div>
        </div>
  
      )
    }
  }
}
