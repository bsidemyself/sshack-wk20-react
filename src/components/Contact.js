import React, { useState } from "react";
import '../assets/style.css'

export default function Contact() {
    return (
    <div>
        <div>
            <h1 className="title contact-welcome">Please feel free to reach out below!</h1>
        </div>
        <div className="field">
            <label className="label form-label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input"></input>
            </div>
          </div>
          
          <div className="field">
            <label className="label form-label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-danger" type="email" placeholder="Email input" value="hello@"></input>
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p className="help is-danger">This email is invalid</p>
          </div>
          
          <div className="field">
            <label className="label form-label">Message</label>
            <div className="control">
              <textarea className="textarea" placeholder="Textarea"></textarea>
            </div>
          </div>
          
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-dark">Submit</button>
            </div>
            <div className="control">
              <button className="button is-link is-light">Cancel</button>
            </div>
        </div>
    </div>
    );
}
