document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the "lazy-load" class
    const lazyLoadElements = document.querySelectorAll(".lazy-load");

    // Configuration for the Intersection Observer
    const observerConfig = {
        root: null, // Use the viewport as the root
        rootMargin: "0px", // No margin around the viewport
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    // Intersection Observer callback function
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Replace data-src with src to trigger the image load
                entry.target.src = entry.target.dataset.src;

                // Unobserve the element after loading
                observer.unobserve(entry.target);
            }
        });
    };

    // Create the Intersection Observer
    const imageObserver = new IntersectionObserver(observerCallback, observerConfig);

    // Observe each lazy-load element
    lazyLoadElements.forEach(element => {
        imageObserver.observe(element);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
          });
        }
      });
    });
  });



  document.addEventListener("DOMContentLoaded", function () {
    // English (UK) button
    const languageDropdownButton = document.getElementById("languageDropdownButton");
    const languageDropdownMenu = document.getElementById("language-dropdown-menu");
  
    if (languageDropdownButton) {
      languageDropdownButton.addEventListener("click", function () {
        languageDropdownMenu.classList.toggle("hidden");
      });
    }
  
    // Japanese button
    const japaneseButton = document.getElementById("japaneseButton");
    const japaneseContent = document.getElementById("japaneseContent");
  
    if (japaneseButton) {
      japaneseButton.addEventListener("click", function () {
        // Toggle visibility or perform any specific action for Japanese content
        japaneseContent.classList.toggle("hidden");
      });
    }
  });
// contact form

// const form = document.querySelector('form');




