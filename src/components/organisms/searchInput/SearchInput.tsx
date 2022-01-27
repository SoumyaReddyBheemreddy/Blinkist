import React from "react";
import TextField from "@mui/material/TextField";
import { Container, IconButton } from "@mui/material";
import { FiSearch } from "react-icons/fi";
export default function SearchInput() {
  return (
    <Container fixed>
      <TextField
        sx={{marginTop:"50px"}}
        id="standard-basic"
        variant="standard"
        placeholder="Search by title or author"
        InputProps={{
          style: {
            color: "#6D787E",
            fontSize: "24px",
            fontWeight: 700,
            fontFamily: "Cera Pro",
          },
          startAdornment: (
            <IconButton sx={{ marginRight: "25.7px" }}>
              <FiSearch
                style={{ color: "#3A4649", width: "23.7px", height: "23.7px" }}
              />
            </IconButton>
          ),
        }}
      />
    </Container>
  );
}
