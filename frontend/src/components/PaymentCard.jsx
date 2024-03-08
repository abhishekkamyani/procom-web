export default function PaymentCard({ heading, records }) {
  return (
    <div className="container">
      <div style={{backgroundColor:"var(--light-color)"}} className="border text-dark fw-medium d-flex flex-column justify-content-between p-3 rounded-2">
        <p>{heading}</p>
        <span>{records}</span>
      </div>
    </div>
  );
}
