if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
        if (!user) {
            window.netlifyIdentity.on("login", () => {
                document.location.href = "/admin/";
            });
        }
    });
}

/* document.addEventListener(
    "click",
    function (event) {
        // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
        if (
            event.target.matches(".button-close-modal") ||
            !event.target.closest("#my-modal")
        ) {
            closeModal()
        }
    },
    false
)

function closeModal() {
    document.querySelector("#my-modal").style.display = "none"
} */