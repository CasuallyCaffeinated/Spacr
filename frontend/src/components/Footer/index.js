import "./footer.css"

function Footer() {

    return (
        <footer id="footer">
            <div className="footer-main-div">
                    <ul>
                        <li className="dev">Developer — Christian Cozma</li>
                        <li className="footer-dash">——</li>
                        <li>
                            <a href="https://github.com/Christian-Cozma" target="blank"><i class="fab fa-github"></i>  GitHub</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/christian-cozma-9847431ba/" target="blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://twitter.com/cozma_christian" target="blank"><i class="fab fa-twitter"></i> Twitter</a>
                        </li>
                    </ul>
            </div>
    </footer>
    )
}

export default Footer;
