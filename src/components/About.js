import React, { useState } from "react";
import '../assets/style.css'

export default function About() {
    return (
        <div>
          <img className="my-avatar" src="assets/avataaars.svg" alt="..." />
          <h1 className="my-name">Stephen Shackleton</h1>
          <p className="my-bio">
            I was born in California but grew up in Houston, Texas before moving back here in 2002.
            I've spent over twenty years in the sign & graphic industry in graphic design, sales
            and finally as the owner of my own shop in Carlsbad.  Things got tough after the pandemic
            so I decided to seek a new career path in web development, and I love it!
            I hope to use this space to showcase my web development work,
            as well as the skills I learned in design and customer service from my previous career.</p>
        </div>
    );
}
