import PaymentCard from "../components/PaymentCard";
import { dummyData } from "./dummy";

export default function CustomerPayments() {
  return (
    <div className="container">
      <h2 className="my-3">Payments</h2>
      <section className="records">
        <div className="row row-cols-3 row-gap-5 w-75">
          <PaymentCard
            heading={"Total Payment Records"}
            records={"234 records"}
          />
          <PaymentCard heading={"Total Paid Records"} records={"100 records"} />
          <PaymentCard
            heading={"Total Pending Records"}
            records={"40 records"}
          />
        </div>
      </section>
      <section className="payments-history my-5">
        <div className="table-responsive">
          <table class="table table-dark table-hover">
            <thead>
              <tr>
                <th scope="col">Customer Account Number</th>
                <th scope="col">Merchant Account Number</th>
                <th scope="col">Status</th>
                <th scope="col">Description</th>
                <th scope="col">Amount</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((payment) => {
                return (
                  <tr key={payment.id}>
                    <td>{payment.customerAccountNumber}</td>
                    <td>{payment.merchantAccountNumber}</td>
                    <td>{payment.status}</td>
                    <td>{payment.description}</td>
                    <td>{payment.amount}</td>
                      <td>
                    {payment.status === "pending" && (
                        <>
                        <button className="btn mx-2 btn-primary">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                        </>
                        )}
                      </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
