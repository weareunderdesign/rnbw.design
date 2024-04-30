// document.addEventListener('DOMContentLoaded', function () {
//     let container = document.getElementById('id-list');
//     if (!container) {
//         container = document.createElement('div');
//         container.id = 'id-list';
//         document.body.appendChild(container);
//     }
//     container.innerHTML = ''; // Clear existing content

//     const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
//     let minLevel = 6;
//     headings.forEach(heading => {
//         const level = parseInt(heading.tagName.substring(1));
//         if (level < minLevel) {
//             minLevel = level;
//         }
//     });

//     document.querySelectorAll('[id]:not(#id-list)').forEach(function (element) {
//         const id = element.id;
//         const link = document.createElement('a');
//         link.href = '#' + id;
//         const span = document.createElement('span');
//         span.className = 'text-m'; // Add class
//         const headingInside = element.querySelector('h1, h2, h3, h4, h5, h6');
//         span.textContent = headingInside ? headingInside.textContent : id;
//         if (headingInside) {
//             const headingLevel = parseInt(headingInside.tagName.substring(1));
//             // Adjusting margin calculation: apply margin only if heading level is greater than minLevel
//             if (headingLevel > minLevel) {
//                 const marginLeft = (headingLevel - minLevel) * 12;
//                 span.style.marginLeft = `${marginLeft}px`;
//             }
//         }
//         link.appendChild(span);
//         container.appendChild(link);
//     });

//     function styleActiveLink() {
//         const currentHash = window.location.hash;
//         document.querySelectorAll('#id-list a').forEach(a => {
//             const span = a.querySelector('span');
//             if (a.href === window.location.href) {
//                 span.innerHTML = `<u>${span.textContent}</u>`;
//             } else {
//                 span.innerHTML = span.textContent;
//             }
//         });
//     }

//     function updateURLAndView() {
//         const sections = document.querySelectorAll('[id]:not(#id-list)');
//         let found = false;
//         sections.forEach(section => {
//             const rect = section.getBoundingClientRect();
//             if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
//                 history.replaceState(null, null, '#' + section.id);
//                 found = true;
//             }
//         });

//         if (found) {
//             styleActiveLink();
//         }
//     }

//     window.addEventListener('scroll', updateURLAndView);
//     window.addEventListener('hashchange', styleActiveLink);
//     styleActiveLink();
// });



document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll("aside a");

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function highlightMenuLink() {
        let previousActiveLink = null;
        menuLinks.forEach(link => {
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement && isElementInViewport(targetElement)) {
                link.classList.add("active");
                if (previousActiveLink && previousActiveLink !== link) {
                    previousActiveLink.classList.remove("active");
                }
                previousActiveLink = link;
            } else {
                link.classList.remove("active");
            }
        });
    }

    window.addEventListener("scroll", highlightMenuLink);
});

