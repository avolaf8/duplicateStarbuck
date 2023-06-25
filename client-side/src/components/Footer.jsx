import '../assets/style/footer.scss'
export default function Footer() {
  return (
    <>
    <section className="footer">
      <div className="bottom">
        <ul className="social__icons">
          <li style={{ marginLeft: "0px" }}>
            <a href="">
              <i className="fa-brands fa-spotify"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-pinterest-p"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
        </ul>
        <ul className="condition">
          <li>
            <a href="" style={{ paddingLeft: "5px" }}>
              Privacy Notice
            </a>
          </li>
          <li>
            <a href="">Terms of Use</a>
          </li>
          <li>
            <a href="">Do Not Share My Personal Information</a>
          </li>
          <li>
            <a href="">CA Supply Chain Act</a>
          </li>
          <li className="lastItem">
            <a href="">Cookie Preferences</a>
          </li>
        </ul>
        <div className="copyrightMessage">
          <p>© 2027 Starbucks Coffee Company. All rights reserved.</p>
        </div>
      </div>
    </section>
    </>
  );
}
