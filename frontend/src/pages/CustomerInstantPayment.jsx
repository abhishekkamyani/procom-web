export default function CustomerInstantPayment() {
  return (
    <form className="row container px-4 mx-auto my-3 g-3">
      <div className="col-md-6">
        <label htmlFor="userName" className="form-label">
          Username *
        </label>
        <input type="text" className="form-control" id="userName" name="userName" placeholder="David" required />
      </div>
      <div className="col-md-6">
        <label htmlFor="emailAddress" className="form-label">
          Email Address (Optional)
        </label>
        <input type="email" className="form-control" id="emailAddress" name="emailAddress" />
      </div>
      <div className="col-12">
        <label htmlFor="customerAccount" className="form-label">
          Customer Account Number *
        </label>
        <input
          type="text"
          className="form-control"
          id="customerAccount" name="customerAccount" placeholder="123456" required
        />
      </div>
      <div className="col-12">
        <label htmlFor="merchantAccount" className="form-label">
          Merchant Account Number *
        </label>
        <input
          type="text"
          className="form-control"
          id="merchantAccount" name="merchantAccount" placeholder="654321" required
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="bank" className="form-label">
          Select Bank Name *
        </label>
        <select id="bank" name="bank" required className="form-select">
          <option value="" selected>Choose...</option>
          <option value="hbl">Habib Bank Limited (HBL)</option>
          <option value="ubl">United Bank Limited (UBL)</option>
          <option value="mcb">MCB Bank Limited</option>
          <option value="askari">Askari Bank Limited</option>
          <option value="abl">Allied Bank Limited (ABL)</option>
        </select>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </div>
    </form>
  );
}
