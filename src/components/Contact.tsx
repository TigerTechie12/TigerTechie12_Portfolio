import { MdArrowOutward, MdCopyright, MdEmail } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            
            <h4>Education</h4>
            <div className="contact-education">
              <a
                href="https://iitr.ac.in/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/2/2d/Indian_Institute_of_Technology_Roorkee_Logo.svg"
                  alt="IIT Roorkee"
                  className="contact-edu-logo"
                />
              </a>
              <p>
                Undergrad, Indian Institute Of Technology Roorkee —
                2022–2027
              </p>
            </div>
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
              href="https://www.linkedin.com/in/shreyash-srivastava-195597267/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=shreyashiitr22@gmail.com"
              target="_blank"
              rel="noreferrer"
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
