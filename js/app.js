document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingBar = document.getElementById('loading-bar');

    setTimeout(() => {
        loadingBar.style.width = '100%';

        loadingBar.addEventListener('transitionend', () => {
            loadingScreen.style.transition = 'opacity 1s ease-in-out';
            loadingScreen.style.opacity = '0';

            setTimeout(() => {
                loadingScreen.parentNode.removeChild(loadingScreen);

                const homeScreen = document.createElement('div');
                homeScreen.id = 'home-screen';
                homeScreen.classList.add('center-screen', 'fade-in', 'show');
                homeScreen.innerHTML = `
                   <div class="home center-screen">
                        <div class="qr-code center-screen">
                            <img src="assets/qr.svg" alt="QR Code">
                        </div>
                        <div class="btn-group center-screen">
                            <button id="scan-button" class="button">Scanner</button>
                            <button id="login-button" class="button">Se connecter</button>
                        </div>
                   </div>
                `;

                document.body.appendChild(homeScreen);

                const scanButton = document.getElementById('scan-button');
                const loginButton = document.getElementById('login-button');

                scanButton.addEventListener('click', function () {
                    window.location.href = './scan.html';
                });

                loginButton.addEventListener('click', function () {
                    window.location.href = './login.html';
                });
            }, 00);
        });
    }, 500);
});

