//  Год в футере
const currentYear = new Date().getFullYear();
document.querySelector('.date').textContent = currentYear;
//  Год в футере

// Цена в фильтре
document.getElementById('priceButton').addEventListener('click', function() {

    this.style.display = 'none';
    document.querySelector('.price_input').style.display = 'flex';
});

document.addEventListener("DOMContentLoaded", function() {
    const profileBtn = document.querySelector(".profile-btn");
    const modal = document.querySelector(".lk_modal");

    profileBtn.addEventListener("click", function() {
        modal.classList.toggle("active");
    });
});