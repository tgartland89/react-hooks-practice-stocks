import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onAddStock }) {
  const stockList = stocks.map((stock) => (
    <Stock key={stock.id} stock={stock} onStockClick={onAddStock} />
  ));

  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}














// import React from "react";
// import TransactionsList from "./TransactionsList";
// import Search from "./Search";
// import AddTransactionForm from "./AddTransactionForm";

// function AccountContainer() {
//   return (
//     <div>
//       <Search />
//       <AddTransactionForm />
//       <TransactionsList />
//     </div>
//   );
// }

// export default AccountContainer;


// import React, { useState, useEffect } from "react";
// import TransactionsList from "./TransactionsList";
// import Search from "./Search";
// import AddTransactionForm from "./AddTransactionForm";

// function AccountContainer({handleDeleteTransaction}) {
// 	 //fetch data
//   //GET request
//   const [transactions, listTransactions] = useState([]);
//   useEffect(() => {
//     fetch('http://localhost:8001/transactions')
//       .then((response) => response.json())
//       .then((transacs) => listTransactions(transacs))
//       .catch((err) => console.log(err));
//   }, []);

//   function handleAddForm(newForm) {
//     listTransactions([...transactions, newForm]);
//   }

  

//   function handleSearch(e) {
//     listTransactions((transactions) => {
//       return transactions.filter((transaction) => {
//         return transaction.description.toLowerCase().includes(e.target.value.toLowerCase());
//       });
//     });
//   }
// 	return (
// 		<div>
// 			<Search handleSearch={handleSearch} />
// 			<AddTransactionForm
// 				handleAddTransaction={handleAddForm}
// 				transactions={transactions}
// 			/>
// 			<TransactionsList
// 				transactions={transactions}
				
// 			/>
// 		</div>
// 	);
// }

// export default AccountContainer;