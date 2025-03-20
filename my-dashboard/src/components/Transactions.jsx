import React from "react";
import { Card, Typography } from "@mui/material";

const Transactions = ({ transactions }) => {
  return (
    <Card sx={{ my: 2, p: 2, maxHeight: 300, overflowY: "scroll" }}>
      <Typography variant="h6">Recent Transactions</Typography>
      {transactions.map((tx, index) => (
        <Card key={index} sx={{ my: 1, p: 1, display: "flex", justifyContent: "space-between" }}>
          <Typography>{tx.name}</Typography>
          <Typography sx={{ color: "green" }}>${tx.amount}</Typography>
        </Card>
      ))}
    </Card>
  );
};

export default Transactions;
