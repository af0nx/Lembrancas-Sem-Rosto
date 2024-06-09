const products = [
  {
    id: 1,
    name: 'Animais',
    subname: 'Retrato Personalizado do seu Animal de Estimação',
    basePrice: 29.99,
    description: 'Descrição do Produto 1',
    image: 'https://via.placeholder.com/150',
    image2: 'https://via.placeholder.com/150/200',
    image3: 'https://via.placeholder.com/150/300',
    addOns: [
      { name: 'Frame', price: 10.00 },
      { name: 'Extra Pet', price: 15.00 },
      { name: 'Express Delivery', price: 20.00 }
    ],
    services: [
      { name: 'Basic Service', price: 5.00 },
      { name: 'Premium Service', price: 10.00 },
      { name: 'Deluxe Service', price: 20.00 }
    ]
  },
  {
    id: 2,
    name: 'Familia',
    subname: 'Retrato Personalizado da sua Família',
    basePrice: 39.99,
    description: 'Descrição do Produto 2',
    image: 'https://via.placeholder.com/150',
    image2: 'https://via.placeholder.com/150/200',
    image3: 'https://via.placeholder.com/150/300',
    addOns: [
      { name: 'Frame', price: 10.00 },
      { name: 'Express Delivery', price: 20.00 }
    ],
    services: [
      { name: 'Basic Service', price: 5.00 },
      { name: 'Premium Service', price: 10.00 },
      { name: 'Deluxe Service', price: 20.00 }
    ]
  },
  // Adicione mais produtos conforme necessário
];

export default products;
