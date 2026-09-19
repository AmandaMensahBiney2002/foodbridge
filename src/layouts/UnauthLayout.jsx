import Wrapper from "./Wrapper";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function UnauthLayout({ children }) {
  return (
    <Wrapper>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Wrapper>
  );
}

export default UnauthLayout;