import React, { useEffect, useState } from "react";
import "./login.css";
import { useAppDispatch, useAppSelector } from "../../store";
import { authActions } from "../../store/actions";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(authActions.login(username, password));
  };

  useEffect(() => {
    if (isAuthenticated) {
      if (user.usersRoleId === 1) {
        window.location.href = "/admin";
      } else if (user.usersRoleId === 4) {
        window.location.href = "/manager";
      }
    }
  }, [isAuthenticated, user.usersRoleId]);
  return (
    <div className="body">
      <div className="content panel">
        <h5> تسجيل الدخول </h5>
        <div className="form">
          <h6> ايميل المستخدم </h6>
          <label>
            <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <h6> كلمة السر </h6>
          <label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="submit" onClick={handleSubmit}>
            تسجيل الدخول
          </button>
        </div>
      </div>
      <div>
        <div className="sidebar panel">
          <img src={require("../../assets/ooii.png")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
