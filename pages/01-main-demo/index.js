import PageHead from "../Head";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Separator from "@/components/Common/Separator";
import MainDemo from "@/components/01-Main-Demo/01-Main-Demo";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";

import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import FooterThree from "@/components/Footer/Footer-Three";
import OnlineCoursePage from "../10-online-course";

const Home = () => {
  return (
    <>
      <PageHead title="Home - Online Courses & Education NEXTJS14 Template" />

      <Provider store={Store}>
        <Context>
          <MobileMenu />
          {/* <HeaderStyleTen headerSticky="rbt-sticky" headerType="" /> */}
          {/* <MainDemo /> */}
          <OnlineCoursePage />
          {/* <Cart /> */}

          <Separator />
          <FooterThree />
        </Context>
      </Provider>
    </>
  );
};

export default Home;
