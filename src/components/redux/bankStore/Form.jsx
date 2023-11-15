import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Form = () => {
  const [amount, setAmount] = useState("");

  const dispatcher = useDispatch();

  const handleDeposit = () => {
    console.log(amount);
    return dispatcher({ type: "credit", payload: amount });

  };

  return (
    <div>
      <h1 className="fs-2 text-decoration-underline">Enter Details</h1>

      <div>
        <input
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
        />
        <button onClick={handleDeposit} className="btn btn-primary m-2">
          Deposit
        </button>
        <button className="btn btn-danger m-2">Withdraw</button>
      </div>

      <div>
        <input className="form-control" type="text" name="" id="" />
        <button className="btn btn-info text-white m-2">Update Name</button>
      </div>

      <div>
        <input className="form-control" type="number" name="" id="" />
        <button className="btn btn-info text-white m-2">Update Contact</button>
      </div>
    </div>
  );
};

export default Form;
