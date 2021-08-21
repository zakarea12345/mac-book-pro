// function for price
function getExtraPrices(outPutId, extraPricesInput) {
    const extraPrices = document.getElementById(outPutId).innerText;
    let extraPricesNumber = parseInt(extraPrices);
    extraPricesNumber = extraPricesInput;
    return extraPricesNumber;
}

// function for previous price
function getDefaultPrice() {
    const getExtraAmountNumber = totalPrice();
    const defualtPrice = document.getElementById('best-price').innerText;
    let defualtPriceNumber = parseInt(defualtPrice);
    const totalBestPrice = getExtraAmountNumber + defualtPriceNumber;
    defualtPriceNumber = totalBestPrice;
    return totalBestPrice;
}

// function for extra configaration  Total Price
function totalPrice() {
    //  Memory - cost
    const memoryTotal = document.getElementById('memory-cost').innerText;
    const memoryTotalNumber = parseInt(memoryTotal);
    //  Storage - cost
    const storageTotal = document.getElementById('storage-cost').innerText;
    const storageTotalNumber = parseInt(storageTotal);
    // Delivery
    const deliveryTotal = document.getElementById('delivery-charge').innerText;
    const deliveryTotalNumber = parseInt(deliveryTotal);
    const totalExtraPrice = memoryTotalNumber + storageTotalNumber + deliveryTotalNumber;
    return totalExtraPrice;
}

// function for promo code
function addPromo() {
    const promoInputField = document.getElementById('promo-code');
    const promoInputValue = promoInputField.value;
    const errorMSG = document.getElementById('errorMSG');
    let getTotalAfterPromo = getDefaultPrice();
    // condition for Matching promo
    if (promoInputValue == 'stevekaku') {
        getTotalAfterPromo = getTotalAfterPromo / 100 * 20;
        errorMSG.innerText = 'Coupon Success';
        errorMSG.style.color = 'green';
    } else {
        getTotalAfterPromo = getTotalAfterPromo - getDefaultPrice();
        errorMSG.innerText = 'Invalid Coupon';
        errorMSG.style.color = 'red';
    }
    // Clear the  Input 
    promoInputField.value = '';
    return getTotalAfterPromo;
}

// Promo Code Event Handler 
document.getElementById('coupon-btn').addEventListener('click', function () {
    const restTotal = document.getElementById('rest-total');
    const mainTotalPrice = getDefaultPrice();
    const promoCoupon = addPromo();
    // Update Total Price
    const restTotalAmount = mainTotalPrice - promoCoupon;
    restTotal.innerText = restTotalAmount;
});


// Memory 
document.getElementById('memory-8').addEventListener('click', function () {
    // memory-cost
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = getExtraPrices('memory-cost', 0);
    // Getting previous Total Prcie
    const previousBestTotal = document.getElementById('total-price');
    previousBestTotal.innerText = getDefaultPrice();
    // Getting Total Price
    const finalTotal = document.getElementById('rest-total');
    finalTotal.innerText = getDefaultPrice();
});

// Memory Event Handler 2
document.getElementById('memory-16').addEventListener('click', function () {
    // memory-cost
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = getExtraPrices('memory-cost', 180);
    // Getting Default Total Prcie
    const previousBestTotal = document.getElementById('total-price');
    previousBestTotal.innerText = getDefaultPrice();
    // Getting Bottom Total Price
    const finalTotal = document.getElementById('rest-total');
    finalTotal.innerText = getDefaultPrice();

});

// Storage
document.getElementById('storage-256').addEventListener('click', function () {
    // Storage Price
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = getExtraPrices('storage-cost', 0);
    // Getting Default Total Prcie
    const previousBestTotal = document.getElementById('total-price');
    previousBestTotal.innerText = getDefaultPrice();
    // Getting Bottom Total Price
    const finalTotal = document.getElementById('rest-total');
    finalTotal.innerText = getDefaultPrice();
});

// Storage Event Handler 2
document.getElementById('storage-512').addEventListener('click', function () {
    // Getting Extra Storage Price
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = getExtraPrices('storage-cost', 100);
    // Getting Default Total Prcie
    const previousBestTotal = document.getElementById('total-price');
    previousBestTotal.innerText = getDefaultPrice();
    // Getting  Total Price
    const finalTotal = document.getElementById('rest-total');
    finalTotal.innerText = getDefaultPrice();
});

// Storage Event Handler 3
document.getElementById('storage-1tb').addEventListener('click', function () {
    // Getting Extra Storage Price
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = getExtraPrices('storage-cost', 180);
    // Getting Default Total Prcie
    const previousTotal = document.getElementById('total-price');
    previousTotal.innerText = getDefaultPrice();
    // Getting Total Price
    const finalTotal = document.getElementById('rest-total');
    finalTotal.innerText = getDefaultPrice();
});

// Delivery Option Event Handler 1
document.getElementById('free-delivery').addEventListener('click', function () {
    // Getting Free Delivery Price
    const freeDeliveryCost = document.getElementById('delivery-charge');
    freeDeliveryCost.innerText = getExtraPrices('delivery-charge', 0);
    // Getting Default Total Prcie
    const previousBestTotal = document.getElementById('total-price');
    previousBestTotal.innerText = getDefaultPrice();
    // Getting Total Price
    const finalTotal = document.getElementById('rest-total');
    finalTotal.innerText = getDefaultPrice();
});

// Delivery Option Event Handler 2
document.getElementById('charged-delivery').addEventListener('click', function () {
    // Getting Charged Delivery Price
    const paidDeliveryCost = document.getElementById('delivery-charge');
    paidDeliveryCost.innerText = getExtraPrices('delivery-charge', 20);
    // Getting Default Total Prcie
    const previousBestTotal = document.getElementById('total-price');
    previousBestTotal.innerText = getDefaultPrice();
    // Getting  Total Price
    const finalTotal = document.getElementById('rest-total');
    finalTotal.innerText = getDefaultPrice();
});
