const km = document.getElementById('km')
const age = document.getElementById('age')
const generate = document.getElementById('generate')

generate.addEventListener('click', function(){


    console.log(km.value)
    console.log(age.value)
    
    const price = (km.value * 0.21)
console.log(price)

let discountPercent

if( parseInt(age.value) < 18) {
    discountPercent = 20
} else if (parseInt(age.value) > 65) {
   discountPercent = 40
} else {
    discountPercent= 0
}
console.log("Percentuale sconto:", discountPercent)

const discount = (Math.floor(price * discountPercent / 100))
console.log("sconto", discount)

const finalPrice = price - discount
console.log("prezzo", finalPrice.toFixed(2))

})
