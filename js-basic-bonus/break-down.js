const products = [
    {name: 'Iphone 14', price: 70000},
    {name: 'samsun galaxy 14', price: 60000},
    {name: 'dell laptop', price: 50000},
    {name: 'lenevo yoga', price: 45000},
    {name: 'Asus laptop', price: 20000},
    {name: 'samart watch samsung', price: 7000},
    {name: 'apple watch', price: 3000},
    {name: 'plus one phone 4', price: 4000}
]

// for (const product of products) {
//     if (product.price < 5000) {
//         break;
//     }
//     console.log(product);
// }
// console.log("After the loop");


for (const product of products) {
    if (product.price < 10000) {
        continue;
        // skip all products where price is less than 10,000 TK;
    }
    console.log(product);
}
