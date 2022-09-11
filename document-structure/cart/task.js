const controlDec = document.querySelectorAll('.product__quantity-control_dec');
const controlInc = document.querySelectorAll('.product__quantity-control_inc');
const productAdd = document.querySelectorAll('.product__add');
const basket = document.getElementsByClassName('cart__products')[0];
const cartInBasket = document.getElementsByClassName('cart__product');

controlDec.forEach((item) => {
    item.addEventListener('click', (e) =>{
        e.preventDefault();
        let quantity = item.closest('.product__quantity-controls').querySelector('.product__quantity-value');
        quantity.textContent = Number(quantity.textContent) - 1;
        if (quantity.textContent < 1){
            quantity.textContent = 1;
        }
    });
});

controlInc.forEach((item) => {
    item.addEventListener('click', (e) =>{
        e.preventDefault();
        let quantity = item.closest('.product__quantity-controls').querySelector('.product__quantity-value');
        quantity.textContent = Number(quantity.textContent) + 1;
    });
});

productAdd.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        let product = item.closest('.product');
        let id = product.dataset.id;
        let imgSrc = item.closest('.product').querySelector('.product__image').src;
        let count = Number(item.closest('.product').querySelector('.product__quantity-value').textContent);
        let index = Array.from(cartInBasket).findIndex((item) => item.dataset.id === id);
        if (index !== -1){
            const foundProduct= cartInBasket[index].getElementsByClassName('cart__product-count')[0];
            foundProduct.textContent = Number(foundProduct.textContent) + count;
        } else {
            basket.insertAdjacentHTML('beforeEnd', `
        <div class="cart__product" data-id="${id}">
            <img class="cart__product-image" src="${imgSrc}">
            <div class="cart__product-count">${count}</div>
        </div>
        `)
        }
    });
});