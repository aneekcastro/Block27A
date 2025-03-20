import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import RevenueChart from "../components/RevenueChart";
import Transactions from "../components/Transactions";

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const [data, setData] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/FullstackAcademy/TheSalesDashboard.Data-JSON/main/data.json")
      .then((res) => res.json())
      .then((jsonData) => {
        setData(jsonData.revenue);
        setTransactions(jsonData.transactions);
      });
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar open={open} setOpen={setOpen} />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">The King’s Restaurant</Typography>
          </Toolbar>
        </AppBar>
        <Typography variant="h4" sx={{ mt: 2 }}>Dashboard</Typography>
        <Typography variant="subtitle1">Welcome to your dashboard</Typography>
        <RevenueChart data={data} />
        <Transactions transactions={transactions} />
      </Box>
    </Box>
  );
};

export default Dashboard;
