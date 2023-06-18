import * as React from "react";
import { Container } from "@mui/material";

export default function PageWrapper(props) {
  return (
    <Container maxWidth={"md"} sx={{ bgcolor: "#f5f5f5", mb: 5 }}>
      {props.children}
    </Container>
  );
}
