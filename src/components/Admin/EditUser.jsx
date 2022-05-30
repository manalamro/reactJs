import React, { useState } from "react";

const EditUser = ({ user, updateEditUser, cancelEditUser }) => {
  const [userInfo, setUser] = useState(user);

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.tagName === "SELECT" ? parseInt(target.value) : target.value;
    setUser({ ...user, [name]: value });
  };
  const submitEdit = () => {
    updateEditUser(userInfo);
  };
  const { id, username, phone, email, usersRoleId } = userInfo;
  return (
    <div className="card w-100 mt-2">
      <div className="card-header " style={{ background: "#9A4726", color: "white" }}>
        تعديل العرض رقم : <small>{id}</small>
      </div>
      <div className="card-body">
        <div className="form-group">
          <input type="text" name="username" value={username} className="form-control" placeholder="اسم المستخدم" onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <input type="number" name="phone" value={phone} className="form-control" placeholder="الهاتف" onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <input type="text" name="email" value={email} className="form-control" placeholder="الايميل" onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <select className="form-control" name="usersRoleId" value={usersRoleId} onChange={handleInputChange}>
            <option value={0} disabled>
              دور المستخدم
            </option>
            <option value={4}>مسؤول الكافيتريا</option>
            <option value={2}>زبون</option>
            <option value={3}>بائع</option>
          </select>
        </div>

        <button type="reset" className="btn btn-block" style={{ backgroundColor: "#9A4726", color: "white" }} onClick={submitEdit}>
          <i className="fa fa-edit"></i>تعديل
        </button>
        <button className="btn btn-block" style={{ backgroundColor: "#FAF4EE", borderColor: "#9A4726" }} onClick={cancelEditUser}>
          الغاء
        </button>
      </div>
    </div>
  );
};
export default EditUser;
