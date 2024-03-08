import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import { Routes, Route, useNavigate } from "react-router-dom";
import CustomerNav from "./components/CustomerNav";
import CustomerPayments from "./pages/CustomerPayments";
import CustomerInstantPayment from "./pages/CustomerInstantPayment";
import { useAuth } from "./contexts/auth";
import { useEffect } from "react";

function App() {
  // let auth = {role: "customer"};
  const {auth} = useAuth();
  const navigate = useNavigate();
  console.log(auth.role);

  let userRouter = "";
  if (auth?.role === "merchant") {
    userRouter = (
      <Route
        path="/merchant/*"
        element={
          <>
          </>
        }
      />
    );
  } else if (auth?.role === "customer") {
    userRouter = (
      <Route
        path="/customer/*"
        element={
          <>
            <CustomerNav />
            <Routes>
              <Route path="/payments" element={<CustomerPayments />} />
              <Route path="/instantpayment" element={<CustomerInstantPayment />} />
            </Routes>
          </>
        }
      />
    );
  } 
  else {
    userRouter = <>
    <Route path="/" element={<Signin />} />
    <Route path="/signup" element={<Signup />} />
    </>;
  }


  useEffect(() => {
    if (auth.role === 'merchant') {
      navigate("/merchant");
    }
    else if (auth.role === 'customer') {
      navigate("/customer/payments");
    }
  }, [auth.role])

  return (
    <>
      <div className="min-vh-100 min-vw-100">
      <Routes>
        {userRouter}
        {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
      </div>
    </>
  );
}

export default App;
