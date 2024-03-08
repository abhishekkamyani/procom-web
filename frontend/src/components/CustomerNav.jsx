import { NavLink } from "react-router-dom";

export default function CustomerNav() {
  return (
    <>
      <nav className="navbar py-3 px-2 navbar-expand-lg nav-clr navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Customer Portal
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/customer/payments" className="nav-link active" aria-current="page">
                  Payments
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/customer/instantpayment" className="nav-link">
                  Instant Payment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/customer/qrscan" className="nav-link">
                  QR Scan
                </NavLink>
              </li>
              </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
