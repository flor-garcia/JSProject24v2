const Products = [
    {
        id:1,
        name: "Vino Chardonany",
        year:2019,
        price:90,
        stock:500, 
        description: "Un elegante vino Chardonnay, perfecto para ocasiones especiales. Su sabor suave y afrutado combina notas de manzana verde, pera y un toque de vainilla. Ideal para maridar con mariscos, aves y quesos suaves. Presentado en una botella de diseño sofisticado con detalles dorados, es la elección perfecta para los amantes del buen vino. ",
        image: "images/wine-chardonnay.jpg"
    },
    {
        id:2,
        name: "Vino Renski Rizling",
        year:2017,
        price:50,
        stock:600,
        description: "Un vino blanco elegante y fresco, con una acidez vibrante y notas de frutas cítricas y flores blancas. Su aroma suave y afrutado se complementa con un toque mineral, que lo convierte en una opción ideal para acompañar pescados, mariscos y platos ligeros. Su sabor refrescante y su equilibrio lo hacen perfecto para disfrutar en cualquier ocasión especial.",
        image: "images/wine-renski-rizling.jpg"
    },
    {
        id:3,
        name: "Vino Sauvignon",
        year:2020,
        price:30,
        stock:800,
        description: "Este vino blanco de carácter fresco y vibrante destaca por su acidez refrescante y sus intensos aromas de frutas tropicales como la maracuyá y el mango, junto con notas herbáceas que evocan la hierba fresca y el pimiento verde. En boca, es ligero y crujiente, con una excelente frescura y un final persistente. Ideal para acompañar mariscos, ensaladas, pescados o platos de cocina asiática.Este vino blanco de carácter fresco y vibrante destaca por su acidez refrescante y sus intensos aromas de frutas tropicales como la maracuyá y el mango, junto con notas herbáceas que evocan la hierba fresca y el pimiento verde. En boca, es ligero y crujiente, con una excelente frescura y un final persistente. Ideal para acompañar mariscos, ensaladas, pescados o platos de cocina asiática.",
        image: "images/wine-sauvignon.jpg"
    },
]


// START PRODUCTS CARDS
const productItem = document.getElementById("wine-group")

Products.forEach(product => {
    productItem.innerHTML += 
    `<div class="wine-item">
    <img src="${product.image}" class="wine-image" alt="">
    <div class="wine-description">
        <h5 class="wine-title">${product.name}</h5>
        <p class="wine-year"><small class="text-body-secondary">${product.year}</small></p>
        <p class="wine-price">Price ${product.price}€</p>
        <p class="wine-description">${product.description}</p>
        <a href="#" class="btn-buy">Comprar</a>
    </div>
    </div>` 
});
// END PRODUCTS CARDS


// START BOTTOMS
const buyButtoms = document.getElementsByClassName("btn-buy")
const ArrayBuyButtoms = Array.from(buyButtoms)

ArrayBuyButtoms.forEach(buttom => {
    buttom.addEventListener("click", ()=>{
        alert("Hola Funco")
    })
    
});

console.log(buyButtoms)
console.log(ArrayBuyButtoms)


