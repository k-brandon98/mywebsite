import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt
} from "react-icons/fa";

function Aside() {
  return (
    <aside className="profile-card">
      <img
        className="profile-photo"
        src="/images/brandon.jpeg"
        alt="Brandon Boit"
      />

      <div className="profile-name">Brandon Boit</div>
      <div className="profile-role">Software Engineer</div>

      <div className="profile-divider" />

      <div className="profile-location">
        <FaMapMarkerAlt />
        <span>Ithaca, NY</span>
      </div>

      <div className="social-links">
        <a
          href="mailto:brandonkipkorir98@gmail.com"
          aria-label="Email"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://www.linkedin.com/in/brandon-boit-7004891b4/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/k-brandon98"
          aria-label="GitHub"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </aside>
  );
}

export default Aside;