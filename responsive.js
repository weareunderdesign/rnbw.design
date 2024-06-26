function updatePaddingClass() {
    const elements = document.querySelectorAll('#price-card');
    const pricecards = document.querySelectorAll('#price-cards');
    const attributecard = document.querySelectorAll('#attribute-card');
    const attributecards = document.querySelectorAll('#attribute-cards');
    const tableempty = document.querySelectorAll('#table-empty');
    const tablenotempty = document.querySelectorAll('#table-notempty1');
    const tablenotempty2 = document.querySelectorAll('#table-notempty2');
    const tablenotempty3 = document.querySelectorAll('#table-notempty3');
    const tablename = document.querySelectorAll('#table-name');
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

    tablenotempty.forEach(notempty => {
        if (window.innerWidth <= 768) {
            notempty.style.width = '100%';
            notempty.classList.add('border-bottom');
        } else {
            notempty.style.width = '50%';
            notempty.classList.remove('border-bottom');
        }
    });

    tablenotempty2.forEach(notempty => {
        if (window.innerWidth <= 768) {
            notempty.classList.add('border-bottom');
        } else {
            notempty.classList.remove('border-bottom');
        }
    });

    tablename.forEach(notempty => {
        if (window.innerWidth <= 768) {
            notempty.style.width = '100%';
            notempty.classList.remove('text-m');
            notempty.classList.add('background-secondary');
        } else {
            notempty.style.width = '20%';
            notempty.classList.add('text-m');
            notempty.classList.remove('background-secondary');
        }
    });

    tablenotempty3.forEach(notempty => {
        if (window.innerWidth <= 768) {
            notempty.style.width = '100%';
        } else {
            notempty.style.width = '50%';
        }
    });
    
}

updatePaddingClass();
window.addEventListener('resize', updatePaddingClass);
