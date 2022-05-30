import React, { useEffect, useState } from "react";

const AddUser = ({ createNewUser }) => {
  const [user, setUser] = useState({});
  const [addUserDone, setAddUserDone] = useState(false);
  const [showAddUser, setShowAddUser] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  const submitNewUser = async () => {
    await createNewUser(user);

    await setAddUserDone(true);
    await showAddUser(false);
  };
  useEffect(() => {}, [showAddUser]);
  if (!showAddUser) {
    return (
      <button className="btn btn-block" style={{ backgroundColor: "#FAF4EE", borderColor: "#9A4726", color: "#9A4726" }} onClick={() => setShowAddUser(!showAddUser)}>
        أضف مستخدم جديد
      </button>
    );
  } else {
    return (
      <div>
        {addUserDone && <div className="alert alert-success mt-3">تمت اضافة العرض!</div>}
        <div className="card w-100 mt-2 ">
          <div className="card-header" style={{ backgroundColor: "#FAF4EE", borderColor: "#9A4726", color: "#9A4726", textAlign: "center" }}>
            أضف مستخدم
          </div>
          <div className="card-body text-primary">
            <div>
              <div className="form-group">
                <input type="text" name="username" value={user.username} className="form-control" placeholder="اسم المستخدم" onChange={handleChange} />
              </div>
              <div className="form-group">
                <input type="phone" name="phone" value={user.phone} className="form-control" placeholder="الهاتف" onChange={handleChange} />
              </div>
              <div className="form-group">
                <input type="text" name="email" value={user.email} className="form-control" placeholder="الايميل" onChange={handleChange} />
              </div>
              <div className="form-group">
                <input type="text" name="password" value={user.password} className="form-control" placeholder="كلمة المرور" onChange={handleChange} />
              </div>

              <div className="form-group">
                <input type="number" name="credit" value={user.credit} className="form-control" placeholder="الرصيد" onChange={handleChange} />
              </div>

              <div className="form-group">
                <select className="form-control" name="usersRoleId" value={user.usersRoleId} defaultValue={0} onChange={handleChange}>
                  <option value={0} disabled>
                    دور المستخدم
                  </option>
                  <option value={1}>ادمن</option>
                  <option value={4}>مسؤول الكافيتريا</option>
                  <option value={2}>زبون</option>
                  <option value={3}>بائع</option>
                </select>
              </div>
              <div
                className="form-group"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <label
                  for="isActive"
                  style={{
                    marginRight: 10,
                  }}
                >
                  نشط
                </label>
                <input type="checkbox" name="isActive" id="isActive" value={user.isActive} onChange={handleChange} />
              </div>
              <button type="reset" className="btn btn-info btn-block" style={{ backgroundColor: "#9A4726", borderBlockColor: "#9A4726" }} onClick={submitNewUser}>
                انشاء
              </button>
              <button className="btn btn-block btn-outline-secondary" onClick={() => setShowAddUser(false)}>
                الغاء
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default AddUser;
