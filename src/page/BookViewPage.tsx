import Header from "../components/organisms/header/Header";
import BookView from "../components/organisms/bookView/BookView";
import Footer from "../components/organisms/footer/Footer";
export default function BookViewPage(props: any) {
  return (
    <div>
      <Header />
      <BookView />
      <Footer />
    </div>
  );
}
