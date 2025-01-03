import ProductList from "@/components/shared/header/products/product-list";
import { Button } from "@/components/ui/button";
import sampleData from "@/db/sample-data";
// export const metadata = { title: "Home" };
const HomePage = () => {
  return (
    <>
      <ProductList data={sampleData.products} title="Newest Arrivals" limit={4}/>{" "}
    </>
  );
};

export default HomePage;