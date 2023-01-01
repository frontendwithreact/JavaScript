const products = [
    {name: 'Iphone 14', price: 70000},
    {name: 'samsun galaxy 14', price: 60000},
    {name: 'dell laptop', price: 50000},
    {name: 'lenevo yoga', price: 55000},
    {name: 'Asus laptop', price: 35000},
    {name: 'samart watch samsung', price: 7000},
    {name: 'apple watch', price: 20000},
    {name: 'plus one phone 4', price: 27000}
]


function searchProducts(products, searchText) {
    const result = [];
    for (const product of products) {
        if (product.name.includes(searchText)) {
            //  console.log(product.name);
            result.push(product); // add product in result array.
        }
       
    }
    return result;
}

const matched = searchProducts(products, 'watch');
console.log(matched);