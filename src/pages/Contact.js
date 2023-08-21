import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [messageIsSent, setMessageIsSent] = useState(false)
  const [failedMessage, setFailedMessage] = useState(false)

  useEffect(() => {
    if (!messageIsSent) { return; }

    if (failedMessage) {setFailedMessage(true)}

    const timer = window.setTimeout(() => {setMessageIsSent(false)}, 3000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [messageIsSent, failedMessage]);

  return (
    <div className='animate-fade divide-y-2 divide-gray-100'>
      <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
        <h1 className='text-3xl ml-4 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
          Contact
        </h1>
      </div>
      <div>
        <div className='m-4'>
          <p className='leading-8 tracking-tight'>Feel free to contact me at mcucina@colostate.edu</p>
          <ContactUs messageIsSent={messageIsSent} setMessageIsSent={setMessageIsSent} setFailedMessage={setFailedMessage}/>
          { messageIsSent &&
          <p className={`animate-fadeMessage p-4 fixed top-4 left-[15%] z-10 w-[70%] rounded-md text-center text-white 
          ${failedMessage ? 'bg-[#ea8a8a]' : 'bg-[#04c648]'}`}>{failedMessage ? 'Something went wrong. Please try again.' : 'Message has been sent. Thank You!'}</p>
          }
        </div>
      </div>
    </div>
  )
}

const ContactUs = ({messageIsSent, setMessageIsSent, setFailedMessage}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
       'service_ouz1q1i',
       'template_nc802hp',
        form.current,
        'MzLqsueh2Q7SC9MCN'
        )
      .then((result) => {
          e.target.reset()
          setMessageIsSent(true)
          setFailedMessage(false)
      }, (error) => {
          console.log(error.text);
          setFailedMessage(true)
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full text-base'>
      <label className='mt-2 font-semibold'>Name</label>
      <input type="text" name="user_name" className='w-80 h-9 p-2 outline-none rounded-md border border-solid border-cyan-700'/>
      <label className='mt-4 font-semibold'>Email</label>
      <input type="email" name="user_email" className='w-80 h-9 p-2 outline-none rounded-md border border-solid border-cyan-700'/>
      <label className='mt-4 font-semibold'>Message</label>
      <textarea name="message" className='w-full h-40 p-2 outline-none border border-solid border-cyan-700'/>
      <div className='md:flex justify-center'>
        <button type="submit" value="Send" className='md:w-96 w-full mt-8 p-2 rounded-md bg-cyan-700 hover:bg-cyan-800 transition-colors duration-200 text-white'>Submit</button>
      </div>
    </form>
  );
};

export default Contact