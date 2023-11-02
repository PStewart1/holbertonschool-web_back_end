const express = require('express');
const redis = require('redis');
const { promisify } = require('util');

const app = express();
const client = redis.createClient();

const listProducts = [
  {
    itemId: 1, itemName: 'Suitcase 250', price: 50, initialAvailableQuantity: 4,
  },
  {
    itemId: 2, itemName: 'Suitcase 450', price: 100, initialAvailableQuantity: 10,
  },
  {
    itemId: 3, itemName: 'Suitcase 650', price: 350, initialAvailableQuantity: 2,
  },
  {
    itemId: 4, itemName: 'Suitcase 1050', price: 550, initialAvailableQuantity: 5,
  },
];

function getItemById(id) {
  return listProducts.find((product) => product.itemId === id);
}

app.get('/list_products', (req, res) => {
  res.json(listProducts);
});

const reserveStockById = promisify(client.set).bind(client);

const getCurrentReservedStockById = promisify(client.get).bind(client);

app.get('/list_products/:itemId', async (req, res) => {
  const itemId = parseInt(req.params.itemId);
  const product = getItemById(itemId);

  if (product) {
    const currentQuantity = await getCurrentReservedStockById(`item.${itemId}`);
    res.json({ ...product, currentQuantity: parseInt(currentQuantity) });
  } else {
    res.json({ status: 'Product not found' });
  }
});

app.get('/reserve_product/:itemId', async (req, res) => {
  const itemId = parseInt(req.params.itemId);
  const product = getItemById(itemId);

  if (product) {
    const currentQuantity = await getCurrentReservedStockById(`item.${itemId}`);

    if (parseInt(currentQuantity) > 0) {
      res.json({ status: 'Not enough stock available', itemId });
    } else {
      await reserveStockById(`item.${itemId}`, 1);
      res.json({ status: 'Reservation confirmed', itemId });
    }
  } else {
    res.json({ status: 'Product not found' });
  }
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});
