
class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
    <div class="container">
        <div class="wrapper">
        <footer>
            <div class="footer-top">
                <a href="#"><img class="footer-logo" src="assets/logo-white.svg" alt=""></a>
                <p class="m-0 small">Vibrantacution.com is premium website in India where you can find all types of assets, movable and
                    immovable properties which are sold through Banks and various Financial Institution Across India.
                </p>
            </div>
            <div class="footer-middle">
                <div class="footer-col">
                    <ul>
                        <li class="fw-semibold footer-link-heading">Quick Links</li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">FAQ’s</a></li>
                        <li><a href="#">Premium Subscription</a></li>
                    </ul>
                    <ul>
                        <li class="fw-semibold footer-link-heading">Company</li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <ul>
                        <li class="fw-semibold footer-link-heading">Communication</li>
                        <li><a href="#"><i class="bi bi-telephone"></i> +91 99200 45671</a></li>
                        <li><a href="#"><i class="bi bi-envelope"></i> info@vibrantauction.com</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p class="m-0 small w-100">Copyright © 2023 - Vibrant Auction - All rights reserved. Design & Developed by Web Solutions India</p>
            </div>
        </footer>
        </div>
    </div>

        `;
    }
}

customElements.define("custom-footer", CustomFooter);