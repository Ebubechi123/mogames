import Categories from "./components/secondary/categories/categories.component";
import FeaturedNews from "./components/secondary/featuredNews/featuredNews.component";
import Community from "./components/secondary/footer/community.component";
import Footer from "./components/secondary/footer/footer.component";
import Header from "./components/secondary/header/header.component";
import NewsLetter from "./components/secondary/newsLetter/newsLetter.component";
import WORK_WITH_US from "./components/secondary/workWithUs/work_with_us.component";
import Layout from "./infrastructure/layout";

function App() {
  return (
    <Layout>
      <Header />
      <Categories />
      <FeaturedNews />
      <WORK_WITH_US />
      <NewsLetter />
      <Community />
      <Footer />
    </Layout>
  );
}

export default App;
