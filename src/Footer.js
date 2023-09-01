import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="social-links">
            <a
              href="https://github.com/MettaTan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab github">
                <FontAwesomeIcon
                  icon={icon({ name: "github", style: "brands" })}
                />
              </i>
            </a>
            <a
              href="https://www.linkedin.com/in/metta-tan-houyik/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab linkedin">
                <FontAwesomeIcon
                  icon={icon({ name: "linkedin", style: "brands" })}
                />
              </i>
            </a>
            <a
              href="https://www.youtube.com/@saerinxo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab youtube">
                {" "}
                <FontAwesomeIcon
                  icon={icon({ name: "youtube", style: "brands" })}
                />
              </i>
            </a>
            <a
              href="https://www.instagram.com/_mettatan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab instagram">
                <FontAwesomeIcon
                  icon={icon({ name: "instagram", style: "brands" })}
                />
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
