import { ItemInterface } from "../interfaces/item";
import Card from "./Card";

const List = ({ products }: { products: ItemInterface[] }) => {
  return (
    <div className="layout-wrapper">
      {products.map((item) => (
        <Card key={item.id} product={item} />
      ))}
    </div>
  );
};

export default List;
