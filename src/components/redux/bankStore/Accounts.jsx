// import React from "react";
// // import {useSelector} from 'react-redux'
// import { useSelector } from "react-redux";

// const Accounts = () => {
//   // const accountDetails = useSelector((state) => {
//   //   return state;
//   //   // console.log(state);
//   // })

//   const accountDetails = useSelector((state) => {
//     return state;
//   });

//   console.log(
//     useSelector((state) => {
//       return state;
//     })
//   );

//   console.log(accountDetails);

//   return (
//     <div>
//       <h1 className="fs-2 m-3 text-decoration-underline">
//         Account Information
//       </h1>

//       <table className="table table-bordered border-primary">
//         <thead>
//           <tr>
//             <th>Balance</th>
//             <th>Full Name</th>
//             <th>Contact no.</th>
//           </tr>
//         </thead>

//         <tbody>
//           <tr>
//             <td>0</td>
//             <td>JP</td>
//             <td>8099099099</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Accounts;


import React, { useState } from "react";
import { useSelector } from "react-redux";


const Accounts = () => {
  
  const accountDetails = useSelector((state) => {
    return state;
  });
  console.log(accountDetails);
  return (
    <div>
      <h2>Account Information</h2>
      <table className="table-primary table">
        <thead>
          <tr className="table-success">
            <th>Balance</th>
            <th>Full Name</th>
            <th>Contact Number</th>
          </tr>
        </thead>

        <tbody>
          <tr className="table-info">
            <td>0</td>
            <td>JP</td>
            <td>8099099099</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Accounts;
