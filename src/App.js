import { useEffect } from "react";
import React, { useState, Suspense } from "react";
import Categories from "./components/secondary/categories/categories.component";
import FeaturedNews from "./components/secondary/featuredNews/featuredNews.component";
import Community from "./components/secondary/footer/community.component";
import Footer from "./components/secondary/footer/footer.component";
import NewsLetter from "./components/secondary/newsLetter/newsLetter.component";
import Preloader from "./components/secondary/preloader/preloader.component";
import WORK_WITH_US from "./components/secondary/workWithUs/work_with_us.component";
import Layout from "./infrastructure/layout";
import BACK_TO_TOP from "./components/secondary/backToTop/backtoTop.component";

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const Header = React.lazy(() =>
    import("./components/secondary/header/header.component")
  );
  useEffect(() => {
    setTimeout(() => {
      setShowPreloader(false);
    }, 11000);
  }, []);

  return (
    <>
      <Layout>
        <Suspense>
          {showPreloader ? (
            <Preloader />
          ) : (
            <>
              <Header />
              <Categories />
              <FeaturedNews />
              <WORK_WITH_US />
              <NewsLetter />
              <Community />
              <BACK_TO_TOP/>
              <Footer />
            </>
          )}
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
