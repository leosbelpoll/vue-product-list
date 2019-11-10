var app = new Vue({
    el: "#app",
    data: {
        productTitle: "",
        products: [
            {title: "TV", quantity: 1},
            {title: "Monitor", quantity: 2},
            {title: "Mouse", quantity: 0},
            {title: "Keyboard", quantity: 3}
        ]
    },
    computed: {
        totalPrice() {
            return this.products.reduce((sum, product) => sum += product.quantity, 0)
        }
    },
    methods: {
        addProduct() {
            this.products.push({
                title: this.productTitle,
                quantity: 0
            });
            this.productTitle = "";
        },
        decreaseQuantity(product) {
            if (product.quantity > 0) {
                product.quantity--;
            }
        },
        increaseQuantity(product) {
            product.quantity++;
        }
    }
});