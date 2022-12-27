(() => {
    const startTime = Date.now();
    window.addEventListener("load", () => {
        const loadTimeSeconds = (Date.now() - startTime) / 1000;
        document.querySelector(".load-time").textContent = `Page load time is ${loadTimeSeconds} seconds`
    })
})();