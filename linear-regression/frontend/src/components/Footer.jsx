import React from "react";

function Footer() {

  const currentYear = new Date().getFullYear();
  const companyName = window._env_?.VITE_COMPANY_NAME ?? "Your Company";
  const backendUrl = window._env_?.VITE_BACKEND_URL ?? "No Backend Url set";
  const imageTag = import.meta.env.VITE_IMAGE_TAG ?? "local non docker";

  return (
    <footer>
      <p>Copyright © {currentYear} {companyName}. All rights reserved.</p>
      <p>
        <small style={{ fontSize: "0.8rem"}}>
        Backend: {backendUrl}, Image: {imageTag}
        </small>
      </p>
  </footer>
  );
}

export default Footer;
