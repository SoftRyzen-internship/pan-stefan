interface IProduct {
  key: number;
  product: {
    id: number;
    category: string;
    productDescription: string;
    src: string;
  };
}

export default IProduct;
