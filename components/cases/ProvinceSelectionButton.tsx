import { motion } from "framer-motion";
import React from "react";
type ButtonProps = {
  province: string;
  setProvince: (province: string) => void;
  name: string;
};

const ProvinceSelectionButton = ({
  province,
  setProvince,
  name,
}: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className={
        province == name
          ? `rounded-full bg-white w-full p-2 shadow-md px-6
          font-bold text-sm ring-2 ring-red-500 text-red-500`
          : `rounded-full bg-white p-2 w-full px-6 text-sm shadow-sm`
      }
    >
      <button
        onClick={() => {
          setProvince(name);
        }}
      >
        {name}
      </button>
    </motion.button>
  );
};

export default ProvinceSelectionButton;
