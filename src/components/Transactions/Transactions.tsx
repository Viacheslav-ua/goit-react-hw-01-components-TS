import React from "react";
import "./Transaction.css";

interface TransactionsList {
  id: string;
  type: string;
  amount: string;
  currency: string;
}

type TransactionsProps = {
  rows: TransactionsList[];
};

const Transactions: React.FC<TransactionsProps> = ({ rows }) => {
  return (
    <table className="Transaction">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {rows.map((item) => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Transactions;
