import React, { Component } from 'react'
import SellerDataRow from './SellerDataRow';

export default class SellerData extends Component {
  render() {
    const { users } = this.props
    return (
      <div className="table-user">
        <table className="table table-striped table-hover" >
          <thead>
            <tr >
            <th  style={{paddingLeft:'6px'}} scope="col">رقم البائع</th>
              <th style={{paddingLeft:'6px'}} scope="col">اسم المستخدم</th>
              <th style={{paddingLeft:'75px'}}scope="col">ايميل</th>
              <th scope="col">رقم الهاتف</th>
              <th scope="col">الرصيد</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => {
              return (
                <SellerDataRow 
                
                user={user}
                  key={key}
                  order={key}
                  editUser={this.props.editUser}
                  deleteUser={this.props.deleteUser}
                />
              )
            })}
          </tbody>
        </table>
      </div>

    )
  }
}