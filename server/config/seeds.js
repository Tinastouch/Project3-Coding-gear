const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Hoodies' },
    { name: 'Shirts' },
    { name: 'Accessories' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Shop() HOODIE',
      description: "BLACK HOODIE, MENS SIZE MEDIUM",
      category: categories[0]._id,
      price: 25.99,
      quantity: 500
    },
    {
      name: 'MUG',
      category: categories[2]._id,
      description: "COFFEE MUGS 8-12 FL OZ",
      image: 'product3.png',
      price: 7.00,
      quantity: 20
    },
    {
      name: 'MASK',
      category: categories[2]._id,
      description: "BLACK .SHOP() MASK, ONE SIZE FITS ALL",
      image: 'product2.png',
      price: 5.00,
      quantity: 10
    }
]);

console.log('products seeded');

await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});