import React from "react";

function Stock({ stock, onStockClick }) {
  function handleClick() {
    onStockClick(stock);
  }

  return (
    <div onClick={handleClick}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;










// import React from "react";

// function Transaction() {
//   return (
//     <tr>
//       <td>{"your code here..."}</td>
//       <td>{"your code here..."}</td>
//       <td>{"your code here..."}</td>
//       <td>{"your code here..."}</td>
//     </tr>
//   );
// }

// export default Transaction;
import React from "react";

// function Transaction({
//   transaction: { id, date, description, category, amount},
//   deleteTransaction,
// }) {
//   return (
//     <tr>
//       <td>{date}</td>
//       <td>{description}</td>
//       <td>{category}</td>
//       <td>{amount}</td>
//       <td>
//       <button className="ui segment violet inverted" onClick= {() => deleteTransaction(id)}>Delete</button>
//       </td>
//     </tr>
//   );
// }

// export default Transaction;