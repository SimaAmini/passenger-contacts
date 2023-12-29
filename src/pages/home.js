import { Header } from "../components/header";
import { SearchBox } from "../components/search-box";
import { ContactList } from "../contacts/contact-list";

export const Home = () => {
  return (
    <>
      {/* layout */}
      <Header />
      {/* layout */}
      <SearchBox />
      <ContactList />
    </>
  );
};
