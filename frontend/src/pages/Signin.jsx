
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import axios from "axios";
const URL = "http://localhost:5555/api/auth/login";

export default function Signin() {
  const [user, setUser] = useState();

  const handleOnChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value });
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    e.preventDefault();
    try {
      const res = await axios.post(URL, user);
      console.log(res.da);
      if (res.status === 200) {
        storeAuthInLS(res.data.token, res.data.role);
        setUser(user);
        navigate(`/${res.data.role}`);
      }
    } catch (error) {
      if (error.response?.status === 401) {
        alert(error.response.data.extraDetails);
      } else {
        console.log(error);
      }
  }
}

  const { storeAuthInLS } = useAuth();
  const navigate = useNavigate();


  return (
    <>
      <div className="container-fluid my-5">
        <div className="mx-5 row">
          <div className="col-12 col-md-6 border-black">
            <h4 className="fw-bold">Customer Portal</h4>
            <h1 className="fw-bold fs-3 my-4">
              Login <br /> <span className="text-primary">Customer Portal</span>{" "}
              account
            </h1>
            <form className="row g-3" onSubmit={handleOnSubmit}>
              <div className="col-12">
                <label htmlFor="userName" className="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  name="username"
                  placeholder="username"
                  onChange={handleOnChange}
                />
              </div>
              <div className="col-12">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="password"
                  onChange={handleOnChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
              <p>
                Create a new account{" "}
                <Link to="/signup" className="link-primary">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
          <div className="col-12 col-md-6 d-flex align-items-center bg-info rounded">
            <div className="image-fluid">
              <img src="public/images/customer.jpg" className="w-100" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
