// Custom JavaScript goes here

document.addEventListener('DOMContentLoaded', () => {
    const productListDiv = document.getElementById('product-list');

    if (productListDiv) {
        const products = [
            { id: 1, name: 'Resistance Bands Set', price: 29.99, image: 'https://via.placeholder.com/300x200?text=Resistance+Bands' },
            { id: 2, name: 'Adjustable Dumbbells', price: 199.99, image: 'https://via.placeholder.com/300x200?text=Dumbbells' },
            { id: 3, name: 'Yoga Mat Pro', price: 39.99, image: 'https://via.placeholder.com/300x200?text=Yoga+Mat' },
            { id: 4, name: 'Protein Powder', price: 49.99, image: 'https://via.placeholder.com/300x200?text=Protein+Powder' },
            { id: 5, name: 'Fitness Tracker Watch', price: 129.99, image: 'https://via.placeholder.com/300x200?text=Fitness+Tracker' },
            { id: 6, name: 'Gym Gloves', price: 19.99, image: 'https://via.placeholder.com/300x200?text=Gym+Gloves' },
        ];

        productListDiv.innerHTML = ''; // Clear existing static content

        products.forEach(product => {
            const productCard = `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">$${product.price.toFixed(2)}</p>
                            <a href="product-detail.html?id=${product.id}" class="btn btn-primary">View Details</a>
                        </div>
                    </div>
                </div>
            `;
            productListDiv.innerHTML += productCard;
        });
    }
});
