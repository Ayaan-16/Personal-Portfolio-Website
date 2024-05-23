import React, { useState } from "react";
import githubWhite from '../Images/github-white.png'
import githubBlack from "../Images/github-black.png";
import facebookWhite from "../Images/facebook-white.png";
import facebookBlack from "../Images/facebook-black.png";
import whatsappWhite from "../Images/whatsapp-white.png";
import whatsappBlack from "../Images/whatsapp-black.png";
import instagramWhite from "../Images/instagram-white.png";
import instagramBlack from "../Images/instagram-black.png";
import "./SocialMedia.scss";

const SocialMedia = () => {
  const [isGithubHovered, setIsGithubHovered] = useState(false);
  const [isFacebookHovered, setIsFacebookHovered] = useState(false);
  const [isWhatsappHovered, setIsWhatsappHovered] = useState(false);
  const [isInstagramHovered, setIsInstagramHovered] = useState(false);

  const handleImageClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="image-list">
      <div>
        <img
          src={isGithubHovered ? githubBlack : githubWhite}
          alt="GitHub"
          className="github-image"
          onMouseEnter={() => setIsGithubHovered(true)}
          onMouseLeave={() => setIsGithubHovered(false)}
          onClick={() => handleImageClick("https://github.com/Ayaan-16")}
        />
      </div>
      <div>
        <img
          src={isFacebookHovered ? facebookBlack : facebookWhite}
          alt="Facebook"
          className="facebook-image"
          onMouseEnter={() => setIsFacebookHovered(true)}
          onMouseLeave={() => setIsFacebookHovered(false)}
          onClick={() =>
            handleImageClick(
              "https://www.facebook.com/profile.php?id=100049759626914&mibextid=ZbWKwL"
            )
          }
        />
      </div>
      <div>
        <img
          src={isWhatsappHovered ? whatsappBlack : whatsappWhite}
          alt="WhatsApp"
          className="whatsapp-image"
          onMouseEnter={() => setIsWhatsappHovered(true)}
          onMouseLeave={() => setIsWhatsappHovered(false)}
          onClick={() => handleImageClick("https://wa.me/qr/SE26S5TYPMBQN1")}
        />
      </div>
      <div>
        <img
          src={isInstagramHovered ? instagramBlack : instagramWhite}
          alt="Instagram"
          className="instagram-image"
          onMouseEnter={() => setIsInstagramHovered(true)}
          onMouseLeave={() => setIsInstagramHovered(false)}
          onClick={() =>
            handleImageClick(
              "https://www.instagram.com/ayaan_ahmed13?igsh=MXNsdXZmZzMwaTU4cA=="
            )
          }
        />
      </div>
    </div>
  );
};

export default SocialMedia;
