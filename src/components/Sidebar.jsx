import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const selCat = "New";
const Sidebar = ({ selCat, setSelCat }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setSelCat(category.name)}
          style={{
            background: category.name === selCat && "#FC1503",
            color: "white",
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selCat ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span style={{ opacity: category.name === selCat ? "1" : "0.8" }}>
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
