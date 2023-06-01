import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, onRemoveStock }) {
  const stockList = stocks.map((stock) => (
    <Stock key={stock.id} stock={stock} onStockClick={onRemoveStock} />
  ));

  return (
    <div>
      <h2>My Portfolio</h2>
      {stockList}
    </div>
  );
}

export default PortfolioContainer;












// import React from "react";
// import Transaction from "./Transaction";

// function TransactionsList() {
//   return (
//     <table className="ui celled striped padded table">
//       <tbody>
//         <tr>
//           <th>
//             <h3 className="ui center aligned header">Date</h3>
//           </th>
//           <th>
//             <h3 className="ui center aligned header">Description</h3>
//           </th>
//           <th>
//             <h3 className="ui center aligned header">Category</h3>
//           </th>
//           <th>
//             <h3 className="ui center aligned header">Amount</h3>
//           </th>
//         </tr>
//         {/* render a list of <Transaction> components here */}
//       </tbody>
//     </table>
//   );
// }

// export default TransactionsList;





// import React from 'react';
// import Transaction from './Transaction';

// function TransactionsList({ transactions, handleDeleteTransaction, handleAddForm}) {

//   const deleteTransaction = async (transId) => {
// 		console.log(transId);
// 		try {
// 			const res = await fetch("http://localhost:8001/transactions/" + transId, {
// 				method: "DELETE",
// 			});
// 			handleDeleteTransaction(transId);
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};
  
 
  
//   return (
//     <table onAddItem= {handleAddForm} className='ui celled striped padded table'>
//       <tbody>
//         <tr>
//         {/* <th>
//             <h3 className="ui center aligned header">#Ref</h3>
//           </th> */}
//           <th>
//             <h3 className='ui center aligned header'>Date</h3>
//           </th>
//           <th>
//             <h3 className='ui center aligned header'>Description</h3>
//           </th>
//           <th>
//             <h3 className='ui center aligned header'>Category</h3>
//           </th>
//           <th>
//             <h3 className='ui center aligned header'>Amount</h3>
//           </th>
//           <th><h3 className='ui center aligned header'>Delete</h3></th>
//         </tr>
//         {/* render a list of <Transaction> components here */}
//         {transactions.map((transaction, idx) => {
//           return (
//             <Transaction
//             key={transaction.id}
// 						transaction={transaction}
// 						deleteTransaction={deleteTransaction}
//             />
//           );
//         })}
//       </tbody>
//     </table>
//   );
// }

// export default TransactionsList;