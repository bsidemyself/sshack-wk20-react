import React, { useState } from "react";
import '../assets/style.css'

export default function Footer() {
    return (
        <footer className="footer" id="dark-footer">
        <div className="content has-text-centered">
          <p>
            Stephen Shackleton &copy 2023 - See more of my work at <a id="git-link" href="https://github.com/bsidemyself">github.com/bsidemyself</a>
          </p>
        </div>
      </footer>
    );
}
