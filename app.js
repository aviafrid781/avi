// memory section

// 8GB memory button
document.getElementById('memory-8gb').addEventListener('click', function () {
    // best-price-button
    const bestPrice = document.getElementById('best-price');
    const bestPriceText = bestPrice.innerText;
    bestPrice.innerText = '1299';
    const bestPriceAmout = bestPrice.innerText;

    // Extra memory cost button
    const extraMemory = document.getElementById('extra-memory-cost');
    const extraMemoryText = extraMemory.innerText;
    extraMemory.innerText = '0';
    const extraMemoryAmount = extraMemory.innerText;

    // // Extra storage cost
    const extraStorage = document.getElementById('extra-storage-cost');
    const extraStorageAmount = extraStorage.innerText;

    // delevery charge

    const deleveryCharge = document.getElementById('delevery-charge');
    const deleveryChargeAmount = deleveryCharge.innerText;


    // total price calculate
    const totalPrice = document.getElementById('total-price');
    const totalAmount = totalPrice.innerText;
    const preTotalPrice = parseFloat(totalAmount);
    const totalSum = parseFloat(bestPriceAmout) + parseFloat(extraMemoryAmount) + parseFloat(extraStorageAmount) + parseFloat(deleveryChargeAmount);

    totalPrice.innerText = totalSum;

});

// 16GB memory button

document.getElementById('memory-16gb').addEventListener('click', function () {

    // best-price-button
    const bestPrice = document.getElementById('best-price');
    const bestPriceText = bestPrice.innerText;
    bestPrice.innerText = '1299';
    const bestPriceAmout = bestPrice.innerText;




    // Extra memory cost button
    const extraMemory = document.getElementById('extra-memory-cost');
    const extraMemoryText = extraMemory.innerText;
    extraMemory.innerText = '180';
    const extraMemoryAmount = extraMemory.innerText;


    // // Extra storage cost
    const extraStorage = document.getElementById('extra-storage-cost');
    const extraStorageAmount = extraStorage.innerText;

    // delevery charge
    const deleveryCharge = document.getElementById('delevery-charge');
    const deleveryChargeAmount = deleveryCharge.innerText;


    // total price calculate
    const totalPrice = document.getElementById('total-price');
    const totalAmount = totalPrice.innerText;
    const preTotalPrice = parseFloat(totalAmount);
    const totalSum = parseFloat(bestPriceAmout) + parseFloat(extraMemoryAmount) + parseFloat(extraStorageAmount) + parseFloat(deleveryChargeAmount);

    totalPrice.innerText = totalSum;

});

// storage section



// 256gb ssd storage

document.getElementById('storage-256gb').addEventListener('click', function () {


    // best-price-button
    const bestPrice = document.getElementById('best-price');
    const bestPriceText = bestPrice.innerText;
    bestPrice.innerText = '1299';
    const bestPriceAmout = bestPrice.innerText;

    // Extra memory cost button
    const extraMemory = document.getElementById('extra-memory-cost');
    const extraMemoryAmount = extraMemory.innerText;

    // // Extra storage cost

    const extraStorage = document.getElementById('extra-storage-cost');
    const extraStorageText = extraStorage.innerText;
    extraStorage.innerText = '0';
    const extraStorageAmount = extraStorage.innerText;

    // delevery charge
    const deleveryCharge = document.getElementById('delevery-charge');
    const deleveryChargeAmount = deleveryCharge.innerText;

    // total price calculate
    const totalPrice = document.getElementById('total-price');
    const totalAmount = totalPrice.innerText;
    const preTotalPrice = parseFloat(totalAmount);
    const totalSum = parseFloat(bestPriceAmout) + parseFloat(extraMemoryAmount) + parseFloat(extraStorageAmount) + parseFloat(deleveryChargeAmount);

    totalPrice.innerText = totalSum;

});

// 512gb ssd storage
document.getElementById('storage-512gb').addEventListener('click', function () {


    // best-price-button
    const bestPrice = document.getElementById('best-price');
    const bestPriceText = bestPrice.innerText;
    bestPrice.innerText = '1299';
    const bestPriceAmout = bestPrice.innerText;

    // Extra memory cost button
    const extraMemory = document.getElementById('extra-memory-cost');
    const extraMemoryAmount = extraMemory.innerText;

    // // Extra storage cost

    const extraStorage = document.getElementById('extra-storage-cost');
    const extraStorageText = extraStorage.innerText;
    extraStorage.innerText = '100';
    const extraStorageAmount = extraStorage.innerText;

    // delevery charge
    const deleveryCharge = document.getElementById('delevery-charge');
    const deleveryChargeAmount = deleveryCharge.innerText;

    // total price calculate
    const totalPrice = document.getElementById('total-price');
    const totalAmount = totalPrice.innerText;
    const preTotalPrice = parseFloat(totalAmount);
    const totalSum = parseFloat(bestPriceAmout) + parseFloat(extraMemoryAmount) + parseFloat(extraStorageAmount) + parseFloat(deleveryChargeAmount);

    totalPrice.innerText = totalSum;

});

// 1TB storage
document.getElementById('storage-1tb').addEventListener('click', function () {

    // best-price-button
    const bestPrice = document.getElementById('best-price');
    const bestPriceText = bestPrice.innerText;
    bestPrice.innerText = '1299';
    const bestPriceAmout = bestPrice.innerText;

    // Extra memory cost button
    const extraMemory = document.getElementById('extra-memory-cost');
    const extraMemoryAmount = extraMemory.innerText;

    // // Extra storage cost

    const extraStorage = document.getElementById('extra-storage-cost');
    const extraStorageText = extraStorage.innerText;
    extraStorage.innerText = '180';
    const extraStorageAmount = extraStorage.innerText;

    // delevery charge
    const deleveryCharge = document.getElementById('delevery-charge');
    const deleveryChargeAmount = deleveryCharge.innerText;

    // total price calculate
    const totalPrice = document.getElementById('total-price');
    const totalAmount = totalPrice.innerText;
    const preTotalPrice = parseFloat(totalAmount);
    const totalSum = parseFloat(bestPriceAmout) + parseFloat(extraMemoryAmount) + parseFloat(extraStorageAmount) + parseFloat(deleveryChargeAmount);

    totalPrice.innerText = totalSum;

});


// Delevery section
// free delevery
document.getElementById('free-delevery').addEventListener('click', function () {
    // best-price-button
    const bestPrice = document.getElementById('best-price');
    const bestPriceAmout = bestPrice.innerText;

    // Extra memory cost button
    const extraMemory = document.getElementById('extra-memory-cost');
    const extraMemoryAmount = extraMemory.innerText;

    // Extra storage cost 
    const extraStorage = document.getElementById('extra-storage-cost');
    const extraStorageAmount = extraStorage.innerText;

    // delevery charge
    const deleveryCharge = document.getElementById('delevery-charge');
    const deleveryCostText = deleveryCharge.innerText;
    deleveryCharge.innerText = '0';
    const deleveryChargeAmount = deleveryCharge.innerText;

    // total price calculate
    const totalPrice = document.getElementById('total-price');
    const totalAmount = totalPrice.innerText;
    const preTotalPrice = parseFloat(totalAmount);
    const totalSum = parseFloat(bestPriceAmout) + parseFloat(extraMemoryAmount) + parseFloat(extraStorageAmount) + parseFloat(deleveryChargeAmount);

    totalPrice.innerText = totalSum;

});


//with 20 dolar charge delevery
document.getElementById('charge-delevery').addEventListener('click', function () {

    // best-price-button
    const bestPrice = document.getElementById('best-price');
    const bestPriceAmout = bestPrice.innerText;




    // Extra memory cost button
    const extraMemory = document.getElementById('extra-memory-cost');
    const extraMemoryAmount = extraMemory.innerText;


    // // Extra storage cost

    const extraStorage = document.getElementById('extra-storage-cost');
    const extraStorageAmount = extraStorage.innerText;


    // delevery charge

    const deleveryCharge = document.getElementById('delevery-charge');
    const deleveryCostText = deleveryCharge.innerText;
    deleveryCharge.innerText = '20';
    const deleveryChargeAmount = deleveryCharge.innerText;


    // total price calculate
    const totalPrice = document.getElementById('total-price');
    const totalAmount = totalPrice.innerText;
    const preTotalPrice = parseFloat(totalAmount);
    const totalSum = parseFloat(bestPriceAmout) + parseFloat(extraMemoryAmount) + parseFloat(extraStorageAmount) + parseFloat(deleveryChargeAmount);

    totalPrice.innerText = totalSum;

});














