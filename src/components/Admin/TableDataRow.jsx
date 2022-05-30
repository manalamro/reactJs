import React from "react";

const TableDataRow = ({ user, editUser, deleteUser, order }) => {
  const roleName = (role) => {
    if (role === 1) return "ادمن";
    if (role === 4) return "مسؤول الكافيتريا";
    if (role === 2) return "زبون";
    if (role === 3) return "بائع";
  };

  const onClickEditUser = () => {
    editUser(user.id);
  };
  const onClickDeleteUser = () => {
    deleteUser(user.id);
  };

  return (
    <tr>
      <th scope="row">{order + 1}</th>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{roleName(user.usersRoleId)}</td>
      <td>
        <button className="btn btn-info" onClick={onClickEditUser}>
          <i className="fa fa-edit" /> تعديل
        </button>
        <button className="btn btn-danger" onClick={onClickDeleteUser}>
          <i className="fa fa-trash-o" /> حذف
        </button>
      </td>
    </tr>
  );
};

export default TableDataRow;
