interface IProduct {
  key: number;
  product: {
    id: number;
    category: string;
    productDescription: string;
    imageSrc: string;
  };
}

export default IProduct;
