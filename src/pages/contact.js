import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default () => {
  function submitForm() {
    fetch('https://functions.colegeerts.com/?function=email&key=213409', { method: 'POST' })
      .then((resp) => resp.text())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div className="cl-wrapper">
      <div className="cl-page">
        <Header mainTitle="Cole Geerts" />
        <div className="cl-page-content page-contact">
          <div className="contact-section contact-primary">
            <div className="contact-cta">
              <div className="contact-cta-text">
                <h2>Let's Get in Touch!</h2>
                <p>I'd love to talk about your newest project or favourite tech. Reach out and let's get started!</p>
              </div>
            </div>
          </div>
          <div className="contact-section contact-secondary">
            <div className="contact-form">
              <form action="" className='cl-form'>
                <label htmlFor="name" className="cl-label">Name</label>
                <input className="cl-input" type="text" name="name" id="name" />
                <label htmlFor="email" className="cl-label">Email</label>
                <input className="cl-input" type="text" name="email" id="email" />
                <label htmlFor="message" className="cl-label">Enter a Message</label>
                <textarea className="cl-textarea" name="" id="" cols="30" rows="10" name="message" id="message"></textarea>
                <button onClick={submitForm} className="cl-btn-primary">Submit</button>
                <a href="mailto:cjgeerts@gmail.com?subject=From colegeerts.com">Use Email Instead</a>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
