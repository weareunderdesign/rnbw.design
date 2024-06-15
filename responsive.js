// function updateTablet() {
//     const pricecard = document.querySelectorAll('#price-card');
//     pricecard.forEach(card => {
//         if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
//             card.classList.remove('padding-xl');
//             card.classList.add('padding-m');
//         } else {
//             card.classList.remove('padding-m');
//             card.classList.add('padding-xl');
//         }
//     });
// }

// updateTablet();
// window.addEventListener('resize', updateTablet);


// function updateMobile() {
//     const pricecard = document.querySelectorAll('#price-card');
//     const pricecards = document.querySelectorAll('#price-cards');
//     pricecard.forEach(card => {
//         if (window.innerWidth <= 768) {
//             card.style.width = '100%';
//             card.classList.remove('padding-xl');
//             card.classList.add('padding-m');
//         } else {
//             card.classList.remove('padding-m');
//             card.classList.add('padding-xl');
//         }
//     });

//     pricecards.forEach(cards => { 
//         if (window.innerWidth <= 768) {
//             cards.classList.remove('direction-row');
//             cards.classList.add('direction-column');
//         } else {
//             cards.classList.add('direction-row');
//             cards.classList.remove('direction-column');
//         }
//     });
// }

// updateMobile();
// window.addEventListener('resize', updateMobile);

function updatePaddingClass() {
    const elements = document.querySelectorAll('#price-card');
    const pricecards = document.querySelectorAll('#price-cards');
    elements.forEach(element => {
        if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
            element.classList.remove('padding-xl');
            element.classList.add('padding-m');
        } 
        else if (window.innerWidth <= 768) {
            element.classList.remove('padding-xl');
            element.classList.add('padding-m');
            element.style.width = '100%';
        } 
        else {
            element.classList.remove('padding-m');
            element.classList.add('padding-xl');
        }
    });
    pricecards.forEach(card => {
        if (window.innerWidth <= 768) {
            card.classList.remove('direction-row');
            card.classList.add('direction-column');
        } else {
            card.classList.remove('direction-column');
            card.classList.add('direction-row');
        }
    });
    
}

updatePaddingClass();
window.addEventListener('resize', updatePaddingClass);
