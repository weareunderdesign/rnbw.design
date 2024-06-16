function updatePaddingClass() {
    const elements = document.querySelectorAll('#price-card');
    const pricecards = document.querySelectorAll('#price-cards');
    const attributecard = document.querySelectorAll('#attribute-card');
    const attributecards = document.querySelectorAll('#attribute-cards');
    const tableempty = document.querySelectorAll('#table-empty');
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
    attributecard.forEach(attribute => {
        if (window.innerWidth <= 768) {
            attribute.style.top = '95%';
            attribute.style.right = '42%';
        } else {
            attribute.style.top = '85%';
            attribute.style.right = '54%';
        }
    });

    attributecards.forEach(attributecard => {
        if (window.innerWidth <= 768) {
            attributecard.style.marginTop = '4rem';
        } else {
            attributecard.style.marginTop = '3rem';
        }
    });

    tableempty.forEach(empty => {
        if (window.innerWidth <= 768) {
            empty.style.display = 'none';
        } else {
            empty.style.display = 'flex';
        }
    });
    
}

updatePaddingClass();
window.addEventListener('resize', updatePaddingClass);
