const productData = {
    getProductData() {
        return fetch("http://localhost:8088/product")
        .then(response => response.json())
    }
}

export default productData