document.addEventListener("DOMContentLoaded", () => {
    let codes = document.querySelectorAll(".code");

    // Focus on the first input field initially
    codes[0].focus();

    codes.forEach((code, index) => {
        code.addEventListener("input", () => {
            if (code.value.length == 1) {
                code.classList.remove("focused");
                if (index < codes.length - 1) {
                    codes[index + 1].focus();
                    codes[index + 1].classList.add("focused");
                }
            }
        });

        code.addEventListener("keydown", (e) => {
            if (e.key == "Backspace") {
                if (index > 0 && code.value.length == 0) {
                    codes[index - 1].focus();
                    codes[index - 1].classList.add("focused");
                }
            }
        });

        code.addEventListener("focus", () => {
            code.classList.add("focused");
        });

        code.addEventListener("blur", () => {
            code.classList.remove("focused");
        });

        // Handle paste event
        code.addEventListener("paste", (e) => {
            e.preventDefault();
            let pasteData = e.clipboardData.getData("text").slice(0, codes.length);
            pasteData.split("").forEach((char, idx) => {
                if (idx < codes.length) {
                    codes[idx].value = char;
                    if (idx < codes.length - 1) {
                        codes[idx + 1].focus();
                    }
                }
            });
        });
    });
});
