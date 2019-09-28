var cat = require('cat-me')
var jokes = require('knock-knock-jokes')
var products = require('faker')

console.log(cat())
console.log(jokes())

console.log('')
console.log('')
console.log('==========================')
console.log('Welcome to my Shop')
console.log('==========================')

for (var i = 0; i < 10; i++) {
   // console.log(products.fake('{{commerce.productName}}, {{commerce.price}}'))
   console.log(products.commerce.productName() + " - " + "$" + products.commerce.price())
}