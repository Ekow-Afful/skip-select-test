import { SlLocationPin } from "react-icons/sl";
import { RiDeleteBin5Line, RiSecurePaymentFill } from "react-icons/ri";
import { FaTruckFront, FaMoneyCheck } from "react-icons/fa6";
import { BsFillCalendarDateFill } from "react-icons/bs";

export const FormTracker = [
  {
    id: 1,
    title: "Postcode",
    Icon: SlLocationPin,
    stepEnum: "",
  },
  {
    id: 2,
    title: "Waste Type",
    Icon: RiDeleteBin5Line,
    stepEnum: "",
  },
  {
    id: 3,
    title: "Select Skip",
    Icon: FaTruckFront,
    stepEnum: "SELECT",
  },
  {
    id: 4,
    title: "Permit",
    Icon: RiSecurePaymentFill,
    stepEnum: "PERMIT",
  },
  {
    id: 5,
    title: "Choose Date",
    Icon: BsFillCalendarDateFill,
    stepEnum: "",
  },
  {
    id: 6,
    title: "Payment",
    Icon: FaMoneyCheck,
    stepEnum: "",
  },
];
