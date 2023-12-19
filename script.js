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