let Cart = JSON.parse(localStorage.getItem("Cart")) || []

const Products = [
    {
        id: 1,
        name: "Vino Chardonany",
        year: 2019,
        price: 90,
        stock: 500, 
        description: "Un elegante vino Chardonnay, perfecto para ocasiones especiales. Su sabor suave y afrutado combina notas de manzana verde, pera y un toque de vainilla. Ideal para maridar con mariscos, aves y quesos suaves. Presentado en una botella de diseño sofisticado con detalles dorados, es la elección perfecta para los amantes del buen vino.",
        image: "images/wine-chardonnay.jpg"
    },
    {
        id: 2,
        name: "Vino Renski Rizling",
        year: 2017,
        price: 50,
        stock: 600,
        description: "Un vino blanco elegante y fresco, con una acidez vibrante y notas de frutas cítricas y flores blancas. Su aroma suave y afrutado se complementa con un toque mineral, que lo convierte en una opción ideal para acompañar pescados, mariscos y platos ligeros. Su sabor refrescante y su equilibrio lo hacen perfecto para disfrutar en cualquier ocasión especial.",
        image: "images/wine-renski-rizling.jpg"
    },
    {
        id: 3,
        name: "Vino Sauvignon",
        year: 2020,
        price: 30,
        stock: 800,
        description: "Este vino blanco de carácter fresco y vibrante destaca por su acidez refrescante y sus intensos aromas de frutas tropicales como la maracuyá y el mango, junto con notas herbáceas que evocan la hierba fresca y el pimiento verde. En boca, es ligero y crujiente, con una excelente frescura y un final persistente. Ideal para acompañar mariscos, ensaladas, pescados o platos de cocina asiática.",
        image: "images/wine-sauvignon.jpg"
    },
]

// START CART DETAIL
const cartProducts = document.getElementById("cart-body")
const cartTotal = document.getElementById("cart-total")

const cartUpdate = () => {
    cartProducts.innerHTML = ""
    Cart.forEach(product => {
        cartProducts.innerHTML +=
        `<div class="card">
            <div class="row">
                <div class="col-md-8">
                    <div class="cart-card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="product-price-amount"><span class="product-price">${product.price}</span> € x <span class="product-amount">${product.amount}</span></p>
                    </div>
                </div>
                <div class="col-md-4">
                    <button class="btn-delete" style="border: none; background: none; padding: 0;">
                    <img src="images/basura.png" class="img-fluid rounded-start" alt="...">
                    </button>
                </div>
            </div>
        </div>`
    })

    // START DELETE BUTTONS
    const deleteButtons = document.getElementsByClassName("btn-delete")
    const arrayDeleteButtons = Array.from(deleteButtons)

    arrayDeleteButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const card = event.target.closest(".card");
            let index = Cart.findIndex(product => product.name == card.querySelector(".cart-card-body .card-title").innerText)
            let cartProductToDelete = Cart[index]

            if (cartProductToDelete.amount == 1) {
                Cart.splice(index, 1)
                if (Cart.length === 0) {
                    cartProducts.innerHTML = `<p>Your cart is empty.</p>`
                }
            } else {
                cartProductToDelete.amount -= 1
            }
            cartUpdate()
        })
    })
    // END DELETE BUTTONS

    // START CART TOTAL
    cartTotal.innerHTML = "Total: " + Cart.reduce((accumulator, product) => { 
        return accumulator + product.price * product.amount
    }, 0) + "€"
    // END CART TOTAL


    // START LOCAL STORAGE
    localStorage.setItem("Cart",JSON.stringify(Cart))
    // END LOCAL STORAGE
}
// END CART DETAIL



// START PRODUCTS CARDS
const productItem = document.getElementById("wine-group")

Products.forEach(product => {
    productItem.innerHTML += 
    `<div class="wine-item">
        <img src="${product.image}" class="wine-image" alt="">
        <div class="wine-description">
            <h5 class="wine-title">${product.name}</h5>
            <p class="wine-year"><small class="wine-year-secondary">${product.year}</small></p>
            <p class="wine-price">Precio <span>${product.price}</span> €</p>
            <p class="wine-description">${product.description}</p>
            <a href="#" class="btn-buy">Comprar</a>
        </div>
        <div>
        <button class="btn-add">+</button>
        <input type="number" name="" id="card-counter">
        <button class="btn-reduce">-</button>
        </div>
    </div>` 
});
// END PRODUCTS CARDS


// COUNTER

const counter = document.getElementById("card-counter")
const arrayCounter = Array.from(counter)

arrayCounter.addEventListener("input", () => {
    
})








// START BUY BUTTONS
const buyButtoms = document.getElementsByClassName("btn-buy")
const arrayBuyButtoms = Array.from(buyButtoms)

arrayBuyButtoms.forEach(buttom => {
    buttom.addEventListener("click", (event) => {

        // Cart Amount Update
        let cartProduct = Cart.find(product => product.name == event.target.parentElement.children[0].innerText)
        
        // Cart Amount Update
        if (cartProduct) {
            cartProduct.amount += 1
        } else {
            // Cart update with click
            Cart.push({
                name: event.target.parentElement.children[0].innerText,
                amount: 1,
                price: Number(event.target.parentElement.children[2].children[0].innerText)
            })
        }

        // Cart update function execution
        cartUpdate()
        console.log(Cart)
    })
});
// END BUY BUTTONS


document.addEventListener("DOMContentLoaded", ()=>{
    cartUpdate()
})




// console.log(Cart)

// RETO AGREGAR UN INPUT PARA QUE EL USER PONGA LA INFO QUE QUIERA
