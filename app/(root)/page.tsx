import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
import { Product } from "@/types";
// export const metadata = { title: "Home" };
const HomePage = async () => {
  const latestProduct = await getLatestProducts();
  return (
    <>
      <ProductList data={latestProduct as unknown as Product[]} title="Newest Arrivals" />{" "}
    </>
  );
};

export default HomePage;
