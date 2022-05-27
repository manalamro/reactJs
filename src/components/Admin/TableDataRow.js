import React, { Component } from 'react'

export default class TableDataRow extends Component {
  constructor(props, context) {
    super(props, context);
    this.onClickEditUser = this.onClickEditUser.bind(this);
    this.onClickDeleteUser = this.onClickDeleteUser.bind(this);
  }
  
  
  roleName(role) {
    if (role === 1) return 'ادمن'
    if (role === 2) return 'مسؤول الكافيتريا'
    if (role === 3) return 'زبون'
    if (role === 4) return 'بائع'

  }

  onClickEditUser() {
    this.props.editUser(this.props.user.id)
  }
  onClickDeleteUser() {
    this.props.deleteUser(this.props.user.id)
  }

  render() {
    const { user, order } = this.props

    return (
      <tr>
        <th scope="row">{order + 1}</th>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>  
        <td>{this.roleName(user.role)}</td>                
        <td>
          <button className="btn btn-info" onClick={this.onClickEditUser}><i className="fa fa-edit" /> تعديل</button>
          <button className="btn btn-danger" onClick={this.onClickDeleteUser}><i className="fa fa-trash-o" /> حذف</button>
        </td>
      </tr>

    )
  }
}
