import React, { useState } from "react";
import '../assets/style.css'

export default function Resume() {
    return (
        <section class="hero is-black is-fullheight bg-photo">
        <div class="title">My resume is available below. Thank you for your interest!</div>
        <div class="resume-area">
          <a class="button is-large is-dark" href="../../public/img/Stephen-Shackleton-Resume.pdf">RESUME PDF</a>
        </div>
      </section>
    );
}