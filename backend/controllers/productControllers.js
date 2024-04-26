import Product from "../models/product.js";

// new product url api/products
export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ products });
};

// new product url api/admin/products
export const newProduct = async (req, res) => {
  const product = await Product.create(req.body);

  res.status(200).json({ product });
};

// get product url api/products/:id
export const getProductDetails = async (req, res) => {
  const product = await Product.findById(req?.params?.id);

  if (!product) {
    return res.status(404).json({ error: "Product does not exist" });
  }

  res.status(200).json({ product });
};

// update product url api/admin/products/:id
export const updateProductDetails = async (req, res) => {
  let product = await Product.findById(req?.params?.id);

  if (!product) {
    return res.status(404).json({ error: "Product does not exist" });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({ product });
};

export const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  await product.deleteOne();

  res.status(200).json({ message: "Product deleted" });
};
