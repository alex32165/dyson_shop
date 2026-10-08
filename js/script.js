document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".nav-item");
    const pages = document.querySelectorAll(".page");
    const globalFooter = document.getElementById("global-footer");

    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();

            navItems.forEach(nav => nav.classList.remove("active"));
            item.classList.add("active");

            const targetPageId = item.getAttribute("data-target");
            pages.forEach(page => {
                page.classList.remove("active");
                if (page.id === targetPageId) {
                    page.classList.add("active");
                }
            });

            if (targetPageId === "page-about") {
                globalFooter.style.display = "none";
            } else {
                globalFooter.style.display = "block";
            }

            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });
});
