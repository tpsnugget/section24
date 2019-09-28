// var cat = require('cat-me')
// var jokes = require('knock-knock-jokes')
var products = require('faker')

// console.log(cat())
// console.log(jokes())

for (var i = 0; i < 10; i++) {
   console.log(faker.fake('{{product.productName}}, {{product.productPrice}}'))
}