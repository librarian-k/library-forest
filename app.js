// ===========================
// Library Forest v0.2
// ===========================

window.addEventListener("load", () => {
    console.log("🌳 Library Forest 시작!");

    const button = document.querySelector(".touch-button");

    if (button) {

        button.addEventListener("click", () => {

            button.style.transform = "scale(0.95)";

            setTimeout(() => {
                button.style.transform = "";
            },150);

            alert("🌳 Library Forest에 오신 것을 환영합니다!");
        });

    }

});
