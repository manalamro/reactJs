import React, { Component } from 'react';
import SellerData from './components/cafe_manager/manageSeller/SellerData'
import AddSeller from './components/cafe_manager/manageSeller/AddSeller'
import EditSeller from './components/cafe_manager/manageSeller/EditSeller';
import Data from './DataSample.json';


class Manageseller extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userData: [],
      editUser: {user: null, display: false}
    }
    this.createNewUser  = this.createNewUser.bind(this);
    this.editUser       = this.editUser.bind(this);
    this.cancelEditUser = this.cancelEditUser.bind(this);
    this.updateEditUser = this.updateEditUser.bind(this);
    this.deleteUser     = this.deleteUser.bind(this)

  }

  componentWillMount() {
    // Check localStorage
    if (!localStorage.getItem('userData')) {
      localStorage.setItem('userData', JSON.stringify(Data))
    }
    let data = localStorage.getItem('userData')
    this.setState({
      userData: JSON.parse(data)
    });
  }
  

  searchUsers(event) {
    let keyword = event.target.value.toLowerCase()
    let userData = JSON.parse(localStorage.getItem('userData'))
    this.setState({
      userData: userData.filter((item) => {

        // Find user by Name or Phone
        return (item.name.toLowerCase().indexOf(keyword) >= 0 || item.phone.indexOf(keyword) >= 0)
      })
    })
  }

  createNewUser(newUser) {
    // Parse permisstion to number
    let newData = this.state.userData
    newUser.permission = parseInt(newUser.permission)
    newData.push(newUser)
    this.setState({
      userData: newData
    });

    // Save to local storage
    localStorage.setItem('userData', JSON.stringify(newData))
  }

  editUser(userId) {
    var user = this.state.userData.filter((item) => item.id === userId)[0]
    this.setState({
      editUser: {user: user, display: true}
    })
  }

  cancelEditUser() {
    this.setState({
      editUser: { ...this.state.editUser, display: false}
    })
  }

  updateEditUser(user) {
    const userIndex = this.state.userData.findIndex((item) => item.id === user.id)
    user = {...this.state.userData[userIndex], ...user} // update data user
    const newData = this.state.userData
    newData[userIndex] = {...user}; // update edited user to data
    this.setState({
      userData: newData
    })
    // Save to local storage
    localStorage.setItem('userData', JSON.stringify(newData))
    
    // Hide edit form
    this.setState({
      editUser: { ...this.state.editUser, display: false}
    })
  }

  deleteUser(userId) {
    const newData = this.state.userData.filter((item) => item.id !== userId)
    this.setState({
      userData: newData
    });
    // Save to local storage
    localStorage.setItem('userData', JSON.stringify(newData))
  }

  render() {

    return (
      <div>
        <div>
        <div className="jumbotron jumbotron-fluid" style={{backgroundColor:'#FAF4EE',height:'136px'}}>
          <div className="container">
            <h1 className="display-4 text-center" style={{fontFamily:'Poppins' ,fontsize:'17',marginTop:'-34px',color:'#9A4726'}}>ادارة حسابات البائعين</h1>
            <img src={require('./assets/logo.png')} style={{height:'100px', width:'100px', marginTop:'-114px',marginLeft:'-114px'}} alt=""/>
          </div>
        </div>
      </div>
        <div className="container">


          <div className="row">
            <div className="col-3">
              <AddSeller createNewUser={this.createNewUser}/>

              {this.state.editUser.display && (
                <EditSeller user={this.state.editUser.user}
                  cancelEditUser={this.cancelEditUser}
                  updateEditUser={this.updateEditUser}
                />
              )}
              
            </div>
            <div className="col-9">
              <SellerData
                users={this.state.userData}
                editUser={this.editUser}
                deleteUser={this.deleteUser} 
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Manageseller;
