import { Box, Container } from "@mui/material";
import Navbar from "./Navbar/Index";
import Hero from "./Hero/Index";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker/';
import Root from "../Root";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Root />
      <ToastContainer />
    </LocalizationProvider>
  );
}

export default App;
