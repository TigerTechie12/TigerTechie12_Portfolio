import { MdArrowOutward, MdCopyright, MdEmail } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — ShreyashSrivastava
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech, Indian Institute Of Technology Roorkee —
              2022–2027
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/TigerTechie12"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/shreyash-srivastava-195597267?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:shreyashiitr22@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdEmail />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Shreyash Srivastava</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
