// Get category from URL
const urlParams = new URLSearchParams(window.location.search);
const selectedCategory = urlParams.get("category");

// Product data
const products = [
    // VEGETABLES
    { name: "Carrot", category: "Vegetables", price: 30, img: "carrot.jpg" },
    { name: "Tomato", category: "Vegetables", price: 20, img: "tomato.jpg" },
    { name: "Potato", category: "Vegetables", price: 25, img: "potato.jpg" },
    { name: "Cabbage", category: "Vegetables", price: 35, img: "cabbage.jpg" },

    // FRUITS
    { name: "Apple", category: "Fruits", price: 120, img: "apple.jpg" },
    { name: "Banana", category: "Fruits", price: 40, img: "banana.jpg" },
    { name: "Orange", category: "Fruits", price: 60, img: "orange.jpg" },

    // DAIRY
    { name: "Milk", category: "Dairy", price: 60, img: "milk.jpg" },
    { name: "Curd", category: "Dairy", price: 50, img: "curd.jpg" },
    { name: "Cheese", category: "Dairy", price: 150, img: "cheese.jpg" },
];

// Filter
const filteredProducts = selectedCategory
    ? products.filter(item => item.category === selectedCategory)
    : products;

// Display
const container = document.getElementById("product-list");

filteredProducts.forEach(item => {
    container.innerHTML += `
        <div class="col-md-3 mb-4">
            <div class="card p-3 shadow-sm">
                <img src="${item.img}" class="card-img-top" alt="">
                <h5 class="mt-3">${item.name}</h5>
                <p class="fw-bold">₹${item.price}</p>
                <button class="btn btn-success w-100">Add to Cart</button>
            </div>
        </div>
    `;
});
