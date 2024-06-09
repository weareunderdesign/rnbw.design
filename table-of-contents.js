document.addEventListener("DOMContentLoaded", function () {


    const menu = document.querySelector("aside");
    let lastScrollTop = 0;

    function createMenuLinks() {
        const articles = document.querySelectorAll("div.row > div.view > div"); // A temporary fix to prevent text from breaking the layout by extending above the sidebar
        // const articles = document.querySelectorAll("div");

        const headerCounts = {}; // object for tracking header repetitions
    
        articles.forEach(article => {
            const headers = article.querySelectorAll("h1, h2, h3, h4, h5, h6");
    
            headers.forEach(header => {
                const text = header.textContent.trim();
                let id = "@" + text.toLowerCase().replace(/\s+/g, "-");
    
                // Check if this header has already existed
                if (headerCounts[id] === undefined) {
                    headerCounts[id] = 0;
                } else {
                    headerCounts[id]++;
                    id += `-${headerCounts[id] + 1}`; // add a number starting from 2
                }
    
                const link = document.createElement("a");
                link.href = `#${id}`;
                link.style.display = "block";
                link.textContent = text;
    
                const menuItem = document.createElement("div");
                menuItem.classList.add("menu-item");
                menuItem.appendChild(link);
                menu.appendChild(menuItem);
                header.id = id;
            });
        });
    
        applyMenuOffsets();
    }
    
    createMenuLinks();


    // Apply menu offsets to the links based on header levels
    function applyMenuOffsets() {
        const menuLinks = document.querySelectorAll("aside .menu-item a");

        const headerLevels = {};
        let minLevel = Infinity;

        // Calculate header levels and minimum level
        menuLinks.forEach(link => {
            const targetId = link.getAttribute("href").substring(1);
            const headerLevel = getHeaderLevel(targetId);
            if (headerLevel > 0) {
                if (!headerLevels.hasOwnProperty(headerLevel)) {
                    headerLevels[headerLevel] = 0;
                }
                headerLevels[headerLevel]++;
                minLevel = Math.min(minLevel, headerLevel);
            }
        });

        let offset = 0;
        for (let i = minLevel; i <= 6; i++) {
            if (headerLevels[i] !== undefined) {
                menuLinks.forEach(link => {
                    const targetId = link.getAttribute("href").substring(1);
                    const headerLevel = getHeaderLevel(targetId);
                    if (headerLevel === i) {
                        link.style.marginLeft = offset + "px";
                    }
                });
                offset += 20;
            }
        }
    }

    // Get the header level of an element
    function getHeaderLevel(headerId) {
        const header = document.getElementById(headerId);
        if (header) {
            const tagName = header.tagName.toLowerCase();
            return parseInt(tagName.charAt(1));
        }
        return -1;
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        const documentHeight = document.documentElement.scrollHeight;

        if (rect.bottom + window.scrollY <= documentHeight / 2) {
            return (
                (rect.top <= windowHeight / 4) &&
                rect.left >= 0 &&
                rect.bottom + window.scrollY <= documentHeight &&
                rect.right <= windowWidth
            );
        } else {
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= windowHeight &&
                rect.right <= windowWidth
            );
        }
    }
    
    let scrollTimer;
    let headerVisibleFlag = false;

    // Function to highlight the active menu link based on scroll
    function highlightMenuLink() {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(function () {
            const menuLinks = document.querySelectorAll("aside .menu-item a");

            // Get the current scroll position
            let st = window.scrollY || document.documentElement.scrollTop;
            if (st > lastScrollTop) {
                // If scrolling down
                headerVisibleFlag = false;
                let newActiveLink = null;

                // Check which section is currently in the viewport
                menuLinks.forEach(link => {
                    const targetId = link.getAttribute("href").substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement && isElementInViewport(targetElement)) {
                        newActiveLink = link;
                        headerVisibleFlag = false;
                    }
                });

                // Set active class for the visible link
                if (newActiveLink) {
                    if (!newActiveLink.classList.contains("active")) {
                        menuLinks.forEach(link => {
                            link.classList.remove("active");
                            link.style.textDecoration = "";
                            link.style.textDecorationThickness = "";
                        });
                        newActiveLink.classList.add("active");
                        newActiveLink.style.textDecoration = "underline";
                        newActiveLink.style.textDecorationThickness = "1.5px";
                        const hash = newActiveLink.getAttribute("href").substring(1);
                        history.replaceState(null, null, `#${hash}`);
                    }
                }
            }
            else if (st < lastScrollTop) {
                // If scrolling up
                let newActiveIndex = null;
                menuLinks.forEach((link, index) => {
                    const targetId = link.getAttribute("href").substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement && isElementInViewport(targetElement)) {
                        newActiveIndex = index;
                        headerVisibleFlag = true;
                    }
                });

                menuLinks.forEach(link => {
                    link.classList.remove("active");
                    link.style.textDecoration = "";
                    link.style.textDecorationThickness = "";
                });

                // Set active class based on the current scroll position and flag status
                if (newActiveIndex !== null) {
                    menuLinks[newActiveIndex].classList.add("active");
                    menuLinks[newActiveIndex].style.textDecoration = "underline";
                    menuLinks[newActiveIndex].style.textDecorationThickness = "1.5px";
                    lastActiveIndex = newActiveIndex;
                    const hash = menuLinks[newActiveIndex].getAttribute("href").substring(1);
                    history.replaceState(null, null, `#${hash}`);
                } else {
                    if (headerVisibleFlag && lastActiveIndex > 0) {
                        menuLinks[lastActiveIndex - 1].classList.add("active");
                        menuLinks[lastActiveIndex - 1].style.textDecoration = "underline";
                        menuLinks[lastActiveIndex - 1].style.textDecorationThickness = "1.5px";
                        const hash = menuLinks[lastActiveIndex - 1].getAttribute("href").substring(1);
                        history.replaceState(null, null, `#${hash}`);
                    }
                    else if (!headerVisibleFlag && lastActiveIndex > 0) {
                        menuLinks[lastActiveIndex].classList.add("active");
                        menuLinks[lastActiveIndex].style.textDecoration = "underline";
                        menuLinks[lastActiveIndex].style.textDecorationThickness = "1.5px";
                        const hash = menuLinks[lastActiveIndex].getAttribute("href").substring(1);
                        history.replaceState(null, null, `#${hash}`);
                    }
                }

            }

            // Update last scroll position
            lastScrollTop = st <= 0 ? 0 : st;
        }, 5);
    }

    // Function to activate menu links on hover
    function activateOnHover() {
        const menuLinks = document.querySelectorAll("aside .menu-item a");

        // Add event listeners for mouseenter, mouseleave, and click
        menuLinks.forEach(link => {
            link.addEventListener("mouseenter", function () {
                this.classList.add("active");
                this.style.textDecoration = "underline";
                this.style.textDecorationThickness = "1.5px";

            });
            link.addEventListener("mouseleave", function () {
                const hash = window.location.hash.substring(1);
                if (hash !== this.getAttribute("href").substring(1)) {
                    this.classList.remove("active");
                    this.style.textDecoration = "";
                    this.style.textDecorationThickness = "";
                }
            });

            link.addEventListener("click", function (event) {
                event.preventDefault();
                menuLinks.forEach(otherLink => {
                    if (otherLink !== link) {
                        otherLink.classList.remove("active");
                        otherLink.style.textDecoration = "";
                        otherLink.style.textDecorationThickness = "";
                    }
                });
                link.classList.add("active");
                link.style.textDecoration = "underline";
                link.style.textDecorationThickness = "1.5px";
            
                const targetId = link.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const offsetPercent = 40; 
                    const offsetVH = (window.innerHeight * offsetPercent) / 100;
            
                    const targetPosition = targetElement.offsetTop - offsetVH;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth"
                    });
                    history.pushState(null, null, `#${targetId}`);
                }
            });
        });
    }

    activateOnHover();
    window.addEventListener("scroll", highlightMenuLink);
    window.addEventListener("hashchange", function () {
        const hash = window.location.hash.substring(1);
        const targetLink = document.querySelector(`aside .menu-item a[href="#${hash}"]`);
        if (targetLink) {
            document.querySelectorAll("aside .menu-item a").forEach(link => {
                link.classList.remove("active");
            });
            targetLink.classList.add("active");
        }
    });
});


