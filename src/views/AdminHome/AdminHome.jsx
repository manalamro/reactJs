import React, { useState, useEffect } from "react";
import TableData from "../../components/Admin/TableData";
import AddUser from "../../components/Admin/AddUser";
import EditUser from "../../components/Admin/EditUser";
import { authActions, usersActions } from "../../store/actions";
import { useAppDispatch, useAppSelector } from "../../store";

const AdminHome = () => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.users);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    dispatch(usersActions.getUsers());
  }, []);

  const createNewUser = (newUser) => {
    dispatch(usersActions.createUser(newUser));
  };

  const editUser = (userData) => {
    dispatch(
      usersActions.updateUser({
        id: userData.id,
        username: userData.username,
        phone: userData.phone,
        email: userData.email,
        usersRoleId: userData.usersRoleId,
        isActive: userData.isActive === "true" ? true : false,
      })
    );
  };
  const logout = () => {
    dispatch(authActions.logout());
  };
  const deleteUser = (userId) => {
    if (userId === 1) {
      alert("لا يمكن حذف المدير العام");
    } else {
      window.confirm("هل أنت متأكد من حذف هذا المستخدم؟") && dispatch(usersActions.deleteUser(userId));
      // window.location.reload(false);
    }
  };
  return (
    <div>
      <div>
        <div className="jumbotron jumbotron-fluid" style={{ backgroundColor: "#FAF4EE", height: "136px" }}>
          <p onClick={logout}>تسجيل خروج</p>
          <div className="container">
            <div></div>
            <h1 className="display-4 text-center" style={{ fontFamily: "Poppins", fontsize: "17", marginTop: "-34px", color: "#9A4726" }}>
              ادارة حسابات المستخدمين
            </h1>
            <img src={require("../../assets/logo.png")} style={{ height: "100px", width: "100px", marginTop: "-114px", marginLeft: "-114px" }} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <AddUser createNewUser={createNewUser} />

            {showEditModal && (
              <EditUser
                user={selectedUser}
                cancelEditUser={() => {
                  setShowEditModal(false);
                  setSelectedUser({});
                }}
                updateEditUser={editUser}
              />
            )}
          </div>
          <div className="col-9">
            {users && (
              <TableData
                users={users}
                editUser={(id) => {
                  if (id === 1) {
                    alert("لا يمكنك تعديل حساب المدير");
                  } else {
                    setShowEditModal(!showEditModal);
                    setSelectedUser(users.find((user) => user.id === id));
                  }
                }}
                deleteUser={deleteUser}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
