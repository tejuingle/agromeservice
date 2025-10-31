// product.js

import { products } from './data.js';

// Function to get product by ID from URL
const getProductIdFromURL = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id'); // 'id' is expected in the URL, like product.html?id=product-IX2900I074
};

// Function to render product details
const renderProductDetails = (product) => {
    const productDetailsContainer = document.getElementById('product-details');
    
    // Create product elements
    const productTitle = document.createElement('h2');
    productTitle.classList.add('product-title');
    productTitle.textContent = product.name;

    const productImage = document.createElement('img');
    productImage.classList.add('product-image');
    productImage.src = product.imageSrc;
    productImage.alt = product.name;

    const productPrice = document.createElement('p');
    productPrice.classList.add('product-price');
    const discountedPrice = product.originalPrice * (1 - product.discountPercentage / 100);
    productPrice.innerHTML = `₹${discountedPrice.toFixed(2)} <span class="original-price">₹${product.originalPrice}</span>`;

    const productDescription = document.createElement('p');
    productDescription.classList.add('product-description');
    productDescription.textContent = `Description: ${product.description || 'No description available.'}`;

    const productBrand = document.createElement('p');
    productBrand.classList.add('product-brand');
    productBrand.textContent = `Brand: ${product.brandName}`;  // Brand displayed here

    const productCategory = document.createElement('p');
    productCategory.classList.add('product-category');
    productCategory.textContent = `Category: ${product.category}`;

    const addToCartBtn = document.createElement('button');
    addToCartBtn.classList.add('add-to-cart');
    addToCartBtn.textContent = 'Add to Cart';
    
    // Append elements to the container
    productDetailsContainer.appendChild(productTitle);
    productDetailsContainer.appendChild(productImage);
    productDetailsContainer.appendChild(productPrice);
    productDetailsContainer.appendChild(productDescription);
    productDetailsContainer.appendChild(productBrand);  // Appending brand
    productDetailsContainer.appendChild(productCategory);
    productDetailsContainer.appendChild(addToCartBtn);
};

// Get product ID from URL and find the corresponding product
const loadProductDetails = () => {
    const productId = getProductIdFromURL();
    const product = products.find(p => p.id === productId);

    if (product) {
        renderProductDetails(product);
    } else {
        console.error('Product not found');
    }
};

// Call loadProductDetails to display product on page load
loadProductDetails();
