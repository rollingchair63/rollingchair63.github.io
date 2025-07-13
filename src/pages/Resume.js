import React from 'react';

export default function Resume() {
  return (
    <div className="resume-wrapper">
      <h1 className="section-title">My Resume</h1>

      {/* Preview (clickable) */}
      <a
        href="/assets/Elodie_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-preview-link"
      >
        <iframe
          src="/assets/Elodie_Resume.pdf"
          title="Resume Preview"
          className="resume-preview"
        />
      </a>

      {/* Download button */}
      <a
        href="/assets/Elodie_Resume.pdf"
        download
        className="resume-download-btn"
      >
        ⬇️ Download PDF
      </a>
    </div>
  );
}