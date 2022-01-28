import Header from "../organisms/header/Header";
import ExploreBooks from "../organisms/exploreBooks/ExploreBooks";
import Banner from "../molecule/bannner/Banner";
import SearchInput from "../organisms/searchInput/SearchInput";
import Footer from "../organisms/footer/Footer";
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
