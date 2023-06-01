import React from "react";

function Header() {
  return (
    <header>
      <h1 className="text-center">Flatiron Stock Exchange</h1>
    </header>
  );
}

export default Header;


















// import React from "react";

// function AddTransactionForm() {
//   return (
//     <div className="ui segment">
//       <form className="ui form">
//         <div className="inline fields">
//           <input type="date" name="date" />
//           <input type="text" name="description" placeholder="Description" />
//           <input type="text" name="category" placeholder="Category" />
//           <input type="number" name="amount" placeholder="Amount" step="0.01" />
//         </div>
//         <button className="ui button" type="submit">
//           Add Transaction
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddTransactionForm;

// import React, {useState} from "react";

// function AddTransactionForm({ onAddItem}) {
//   const [date, setDate] = useState("")
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [amount, setAmount] = useState();
//   // const [addFormData, newFormData] = useState({
//   //   date: "",
//   //   description: "",
//   //   category: "",
//   //   amount: 0,
//   // })
// // Add function to handle submissions

// function handleSubmit(/*e*/) {
//   // e.preventDefault();
//   const addFormData = {
//     date: date,
//     description: description,
//     category: category,
//     amount: amount,
//   };
  
//   fetch("http://localhost:8001/transactions", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(addFormData),
//   })
//   .then((res) => res.json())
//   .then((newForm) => onAddItem(newForm))
//   .catch((err) => console.log(err))
//   alert("Transaction added");
//   // e.target.reset();
// }
  
//   return (
//     <div className='ui segment'>
//       <form className='ui form' onSubmit={handleSubmit}>
//         <div className='inline fields'>
//           <input value={date} type='date' name='date' onChange={(e) => setDate(e.target.value)} />
//           <input value={description} type='text' name='description' placeholder='Description' onChange={(e) => setDescription(e.target.value)} />
//           <input value={category} type='text' name='category' placeholder='Category' onChange={(e) => setCategory(e.target.value)} />
//           <input value={amount} type='number' name='amount' placeholder='Amount' step='0.01' onChange={(e) => setAmount(e.target.value)} />
//         </div>
//         <button className='ui button' type='submit'>
//           Add Transaction
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddTransactionForm;
