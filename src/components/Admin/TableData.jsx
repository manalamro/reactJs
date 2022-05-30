import React, { Component } from "react";
import TableDataRow from "./TableDataRow";

const TableData = ({ users, editUser, deleteUser }) => {
  return (
    <div className="table-user">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th style={{ paddingLeft: "6px" }} scope="col">
              رقم 
            </th>
            <th style={{ paddingLeft: "6px" }} scope="col">
              اسم المستخدم
            </th>
            <th style={{ paddingLeft: "85px" }} scope="col">
              ايميل
            </th>
            <th scope="col">رقم الهاتف</th>
            <th scope="col">دور المستخدم</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, key) => {
            return <TableDataRow user={user} key={key} order={key} editUser={editUser} deleteUser={deleteUser} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
