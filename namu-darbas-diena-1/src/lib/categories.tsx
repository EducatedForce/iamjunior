import {
  FaTruckMoving,
  FaScrewdriverWrench,
  FaBroom,
  FaBrush,
  FaBoltLightning
} from "react-icons/fa6";
import {PiPipeFill} from "react-icons/pi";

export const CATEGORIES: CategoryCardProps[] = [
  {
    icon: <FaBroom/>,
    label: "Cleaning",
    color: "#b12fde"
  },
  {
    icon: <FaScrewdriverWrench/>,
    label: "Repair",
    color: "#ecbb3b"
  },
  {
    icon: <FaBrush/>,
    label: "Painting",
    color: "#059e96"
  },
  {
    icon: <FaTruckMoving/>,
    label: "Shifting",
    color: "#e23e40"
  },
  {
    icon: <PiPipeFill/>,
    label: "Plumbing",
    color: "#ea9319"
  },
  {
    icon: <FaBoltLightning/>,
    label: "Electric",
    color: "#2072c5"
  }
];
