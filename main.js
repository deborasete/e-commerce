let productCounts = [];
let totalCartCount = 0;

document.querySelectorAll('.container-produtos button').forEach((button, index) => {

    productCounts[index] = 0;

    button.addEventListener('click', () => {

        productCounts[index]++;
        totalCartCount++;
console.log(productCounts[index])
console.log(totalCartCount);
console.log(productCounts)
        const cartCountElement = document.querySelectorAll('.cart-count')[index];
        const headerCartCount = document.getElementById('cart-count-header');
        
        cartCountElement.style.color = '#c26a45';
        cartCountElement.style.fontSize = '0.7em';
        cartCountElement.style.fontWeight = 'bold';
        cartCountElement.textContent = `${productCounts[index]} adicionado ao carrinho`;

        headerCartCount.textContent = totalCartCount;
        
        alert('Produto adicionado ao carrinho!');
    });
});