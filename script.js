const codes = document.querySelectorAll('.code');

        codes.forEach((code, idx) => {
            code.addEventListener('input', () => {
                if (code.value.length === 1 && idx < codes.length - 1) {
                    codes[idx + 1].focus();
                }
            });

            code.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && code.value.length === 0 && idx > 0) {
                    codes[idx - 1].focus();
                }
            });
        });