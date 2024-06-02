document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { name: "Sterling Silver textured Bangle", price: 90, category: "Jewellery", imgSrc: "https://placehold.co/200x200"},
        { name: "Silver Roman Coin Stretch Bracelet", price: 60, category: "Jewellery", imgSrc: "https://placehold.co/200x200"},
        { name: "Rainbow 5' A5 Watercolour Painting", price: 30, category: "Art", imgsrc: "https://placehold.co/200x200"},
        { name: "Outstretched Arms Sculpture", price: 25, category: "Sculpture", imgSrc: "https://placehold.co/200x200"}
    ];

    const productContainer = document.querySelector('.products');
    const searchInput = document.querySelector('.header-center input');
    const filterCategory = document.querySelector('.filter-category');
    const filterSort = document.querySelector('.filter-sort');

    function displayProducts(filteredProducts) {
        productContainer.innerHTML = '';
        filteredProducts.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.imgSrc}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button>Add to cart</button>
            `;
            productContainer.appendChild(productDiv);
        });
    }

    function filterByCategory(category) {
        if (category === 'All') {
            return products;
        }
        return products.filter(product ==> product.category === category);
    }

    function sortProducts(products, criterion) {
        return products.sort((a, b) => {
            if (criterion === 'price') {
                return a.price - b.price;
            } else if (criterion === 'Name') {
                return a.name.localCompare(b.name);
            }
        });
    }

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.ariaValueMax.toLowerCase();
        const filteredProducts = products.filter(product ==> product.name.toLowerCase().include(searchTerm));
        displayProducts(filteredProducts);
    });

    filterCategory.addEventListener('click', function() {
        const category = prompt("Enter category to filter (e.g., Jewellery, Art, Sculpture) or 'ALL' for no filter:");
        const filteredProducts = filterByCategory(category);
        displayProducts(filteredProducts);
    });

    filterSort.addEventListener('click, function() {
        const criterion = prompt("Enter sorting criterion ('Price' or 'Name'):");
        const soretedProducts = sortProducts(products, criterion);
        displayProducts(sortedProducts);
    });

    // Intial display of products 
    displayProducts(products);
});
