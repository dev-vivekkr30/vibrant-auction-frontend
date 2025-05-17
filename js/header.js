class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
            <!-- navbar -->
    <nav class="navbar navbar-expand-lg bg-body-transparent">
        <div class="container">
            <a class="navbar-brand" href="#"><img src="assets/logo.svg" alt=""></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <img src="assets/menu-icon.png" alt="">
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Search</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Premium Subscription</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
                <div class="nav-cta-btn d-flex align-items-center gap-3">
                    <a href="#" class="red-btn">Register</a>
                    <a href="#" class="nav-link">Login</a>
                </div>
            </div>
        </div>
    </nav>
    <!-- navbar ends -->

        `;
    }
}

customElements.define("custom-header", CustomHeader);
