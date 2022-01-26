
import Header from "../organisms/header/Header";

import Footer from "../organisms/footer/Footer";
export default function MyLibraryPage(props:any) {
  return (
    <div>
      
        <Header />
        {props.children}
       
     
      <Footer />
    </div>
  );
}
