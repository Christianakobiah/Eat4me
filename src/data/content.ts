import type { Chef } from "../types";
import ChefImg from "../assets/Images/Chef1.png";
import BankuImg from "../assets/Images/banku.jpg";
import WaakyeImg from "../assets/Images/Waakye.jpg";

export const CHEFS: Chef[] = Array.from({ length: 5 }).map((_, i) => ({
  id: `chef-${i}`,
  name: "Chef Kwame",
  experience: "12",
  rating: "4.9",
  image: ChefImg,
  specialties: [
    {
      name: "Banku & Tilapia",
      image: BankuImg,
      description: "Traditional Ghanaian delicacy",
    },
    {
      name: "Waakye",
      image: WaakyeImg,
      description: "Rice & beans with sides",
    },
  ],
}));
