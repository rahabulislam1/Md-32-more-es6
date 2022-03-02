const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

const fLenght = friends.map(friend => friend.length);
// console.log(fLenght);
// console.log(friends);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
]

const productNames = products.map(product => product.name);
const productPrice = products.map(product => product.price);
// console.log(productNames);
// console.log(productPrice);

// products.map(product => console.log(product));

products.forEach(product => console.log(product));