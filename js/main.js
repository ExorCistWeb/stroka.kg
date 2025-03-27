//  Год в футере
const currentYear = new Date().getFullYear();
document.querySelector('.date').textContent = currentYear;
//  Год в футере

// Цена в фильтре
document.getElementById('priceButton').addEventListener('click', function() {

    this.style.display = 'none';
    document.querySelector('.price_input').style.display = 'flex';
});