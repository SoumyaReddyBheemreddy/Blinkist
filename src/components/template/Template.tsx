import { Container } from "@mui/material";
import Header from "../organisms/header/Header";

import Footer from "../organisms/footer/Footer";
export default function Template(props:any) {
  return (
    <div>
      <Container fixed>
        <Header />
        {props.children}
       
      </Container>
      <Footer />
    </div>
  );
}
