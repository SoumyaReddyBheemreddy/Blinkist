import Header from "../organisms/header/Header";
import BookView from "../organisms/bookView/BookView";
import Footer from "../organisms/footer/Footer";
export default function BookViewPage(props: any) {
  return (
    <div>
      <Header />
      <BookView />
      <Footer />
    </div>
  );
}
