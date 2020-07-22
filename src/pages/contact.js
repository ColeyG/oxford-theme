import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [formLoadingState, setFormLoadingState] = useState(false);
  const [formFinishedState, setFormFinishedState] = useState(false);

  const [errors, setErrors] = useState(false);

  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [messageErr, setMessageErr] = useState(false);

  function setFailureState(data) {
    setFormLoadingState(false);

    setErrors(true);

    data.error.forEach((error) => {
      if (error === 'name') {
        setNameErr(true);
      }
      if (error === 'email') {
        setEmailErr(true);
      }
      if (error === 'message') {
        setMessageErr(true);
      }
    });
  }

  function setSuccessState(data) {
    setFormLoadingState(false);
    setFormFinishedState(true);
  }

  function submitForm(e) {
    e.preventDefault();

    setFormLoadingState(true);

    fetch(`https://functions.colegeerts.com/?function=email&name=${name}&email=${email}&message=${message}`, { method: 'POST' })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) {
          setFailureState(data);
        } else {
          setSuccessState(data);
        }
      });
  }

  function formInitialState(e) {
    e.preventDefault();

    setName('');
    setEmail('');
    setMessage('');

    setNameErr(false);
    setEmailErr(false);
    setMessageErr(false);

    setFormLoadingState(false);
    setFormFinishedState(false);
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
            <div className={`contact-form-overlay ${formFinishedState ? 'cl-shown' : 'cl-hidden'}`}>
              <div>
                <h3>Message Sent Successfully!</h3>
                <p>I'll reach out to you as soon as possible!</p>
                <a href="#" onClick={formInitialState}>Send Another Message</a>
              </div>
            </div>
            <div className={`contact-form-overlay ${formLoadingState ? 'cl-shown' : 'cl-hidden'}`}>
              <div className="form-loader"></div>
            </div>
            <div className="contact-form">
              <form action="" className='cl-form'>
                <label htmlFor="name" className="cl-label">Name</label>
                <input onChange={(e) => setName(e.target.value)} value={name} className={`cl-input ${nameErr ? 'form-error-input' : ''}`} type="text" name="name" id="name" />
                <label htmlFor="email" className="cl-label">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} value={email} className={`cl-input ${emailErr ? 'form-error-input' : ''}`} type="text" name="email" id="email" />
                <label htmlFor="message" className="cl-label">Enter a Message</label>
                <textarea onChange={(e) => setMessage(e.target.value)} value={message} className={`cl-textarea ${messageErr ? 'form-error-input' : ''}`} name="" id="" cols="30" rows="10" name="message" id="message"></textarea>
                <button onClick={submitForm} className="cl-btn-primary">Submit</button>
                <a href="mailto:cjgeerts@gmail.com?subject=From colegeerts.com">Use Email Instead</a>
                <p className={`form-error ${errors ? 'cl-shown' : 'cl-hidden'}`}>Some fields need your attention</p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
