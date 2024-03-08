const {Customer}  = require("../models/customer-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const privateKey = fs.readFileSync(
  path.resolve(__dirname, "../keys/private.key"),
  "utf-8"
);
const publicKey = fs.readFileSync(
  path.resolve(__dirname, "../keys/public.key"),
  "utf-8"
);


 
exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    // Check if the user is a customer
    const customer = await Customer.findOne({ username: username });
    if (customer) {
      const isAuth = await bcrypt.compare(password, customer.password);
      if (isAuth) {
        const token = jwt.sign(
          { username: customer.username, role: "customer" },
          privateKey,
          { algorithm: "RS256" }
        );
        return res.status(200).json({ token: token, role: "customer" });
      }
    }

    // Check if the user is a merchant
    // const merchant = await merchant.findOne({ email });
    // if (merchant) {
    //   const isAuth = await bcrypt.compare(password, merchant.password);
    //   if (isAuth) {
    //     const token = await jwt.sign(
    //       { email: merchant.email, role: merchant.role },
    //       privateKey,
    //       { algorithm: "RS256" }
    //     );
    //     return res.status(200).json({ token: token, role: merchant.role });
    //   }
    // }

    // If neither customer nor merchant, return authentication error
    return next({
      status: 401,
      message: "Fill the fields properly",
      extraDetails: "Fill the fields properly",
    });
  } catch (error) {
    next({});
  }
};

exports.registercustomer = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const role = "customer";
    const doc = new Customer(req.body);

    const token = jwt.sign(
      { username, role },
      privateKey,
      { algorithm: "RS256" }
    );
    const bcryptPassword = bcrypt.hashSync(password, 10);

    doc.password = bcryptPassword;
    const customer = await doc.save();
    res.status(201).json({ token: token });
  } catch (err) {
    if (err.code === 11000) {
      const error = {
        status: 409,
        message: "Fill the input properly",
        extraDetails: "Account already exists",
      };
      next(error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
};



const unAuthorized = {
  status: 404,
  message: "You are not allowed to access this page.",
  extraDetails: "You do not have privileges.",
};

exports.identity = async (req, res, next) => {
  try {
      let token = req.headers.authorization;
      if (!token) {
        return next(unAuthorized); // move to error-middleware
      }
  
      token = token.split("Bearer ")[1];
      console.log(token);
      const auth = jwt.verify(token, publicKey);
      console.log(auth);
      if (auth.role === "merchant") {
        const merchant = await Merchant.findOne({email: auth.email}, {password: 0});
        return res.status(200).json(merchant); 
      }
      else if (auth.role === "customer") {
          const customer = await Customer.findOne({username: auth.username}, {password: 0, history: 0});
          return res.status(200).json(customer); 
      }
  
      return next(unAuthorized);
    } catch (error) {
      console.log(error); 
      next(unAuthorized); // move to error-middleware
    }
}