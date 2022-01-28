import Header from "../components/organisms/header/Header";
import ExploreBooks from "../components/organisms/exploreBooks/ExploreBooks";
import Banner from "../components/molecule/bannner/Banner";
import SearchInput from "../components/organisms/searchInput/SearchInput";
import Footer from "../components/organisms/footer/Footer";
export default function EnterpreneurshipPage() {
  return (
    <div>
      <Header />
      <Banner />
      <SearchInput />
      <ExploreBooks />
      <Footer />
    </div>
  );
}
