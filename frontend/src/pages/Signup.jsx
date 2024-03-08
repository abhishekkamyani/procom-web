import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";
const URL = "http://localhost:5555/api/auth/signup";

export default function Signup() {

  const [user, setUser] = useState({});
  const { postDataToAPI } = useAuth();


  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await postDataToAPI(URL, user);
    
      if (res?.status === 201) {
        alert("Registration successfully");
      }
    } catch (error) {
      console.log(error);
    }    
  };

  return (
    <>
      <div className="container-fluid">
        <div className="mx-5 row py-5">
          <div className="col-12 col-md-6 border-black">
            <h4 className="fw-bold">Customer Portal</h4>
            <h1 className="fw-bold fs-3 my-4">
              Create <br />{" "}
              <span className="text-primary">Customer Portal</span> account
            </h1>
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="email"
                  required
                  onChange={handleChange}
                />
              </div>

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
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="col-12">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="username"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label htmlFor="accountNumber" className="form-label">
                  Account Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="accountNumber"
                  name="accountNumber"
                  placeholder="Enter Account Number"
                  required
                  onChange={handleChange}
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
                  required
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
              <p>Already have an account? <Link to="/" className="link-primary">Sign in</Link></p>
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
