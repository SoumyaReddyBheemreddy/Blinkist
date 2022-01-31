import Header from "../../components/organisms/header/Header";
import MyLibrary from "../../components/organisms/MyLibrary/MyLibrary";
import Footer from "../../components/organisms/footer/Footer";
export default function MyLibraryPage(props: any) {
  return (
    <div data-testid="my library page">
      <Header />
      <MyLibrary />
      <Footer />
    </div>
  );
}
