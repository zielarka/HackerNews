"use client";

import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";


export default function ContactUsPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      const formData = new FormData(event.currentTarget); // Use event.currentTarget to get the form element
  
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          window.alert('Thank you for your feedback! We will get back to you soon.');
          setName("");
          setEmail("");
          setFeedback("");

        } else {
          window.alert('Something went wrong. Please try again later.');
        }
      } 
      catch (error) {
        window.alert('Something went wrong. Please try again later.');
      }
    };

  return (
    <div className="flex w-full flex-col justify-center">
      <div className="bg-black py-28 text-white">
        <h1 className="mb-7 text-center font-raleway text-4xl font-bold md:text-7xl 2xl:text-8xl">
          Contact us
        </h1>
        <div className="flex justify-center font-inter text-lg">
          <a href="/">Home</a>
          <span className="px-2 font-bold">/ </span>
          <span className="font-bold text-blue-700">Contact Us</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-24 max-w-xl px-3 text-center lg:mb-24 lg:flex lg:max-w-4xl lg:flex-row lg:text-left xl:max-w-6xl">
          <div className="mr-[65px] text-left lg:w-10/12">
            <h2 className="font-raleway text-7xl font-bold sm:text-5xl lg:text-6xl">
              Contact our support team
            </h2>
            <p className="mt-5 font-inter text-xl">
              Book an appointment with our team now! 
            </p>

            <div className="mt-8 flex flex-row">
              <div className="font-inter">
                <span className="text-2xl font-semibold">Office Location:</span>
                <p className="pt-3 text-lg">4132 Thornridge City, New York.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-row">
              <div className="font-inter">
                <p className="text-2xl font-semibold">Social Media:</p>

                <ul className="flex flex-row items-center">
                  <li>
                    <a href="https://www.facebook.com/">
                      <FaFacebookF className="mr-2 rounded-full border border-black p-1 text-4xl hover:border-none hover:bg-blue-700 hover:text-white" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/">
                      <FaTwitter className="mr-2 rounded-full border border-black p-1.5 text-4xl hover:border-none hover:bg-blue-700 hover:text-white" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/">
                      <FaLinkedin className="mr-2 rounded-full border border-black p-1.5 text-4xl hover:border-none hover:bg-blue-700 hover:text-white" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.github.com/">
                      <FaGithub className="mr-2 rounded-full border border-black p-1.5 text-4xl hover:border-none hover:bg-blue-700 hover:text-white" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-10 mt-10 lg:mt-0 lg:w-full lg:items-center">
            <div className="rounded-lg border border-black bg-fafa p-8">
              <h3 className="mb-6 text-3xl font-semibold">
                Write your feedback
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="-mx-4 flex flex-wrap">
                  <div className="mb-4 w-full px-4 lg:w-1/2">
                    <input
                      name="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name*"
                      required
                      className="h-[60px] w-full rounded border px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="mb-4 w-full px-4 lg:w-1/2">
                    <input
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Email Address*"
                      className="h-[60px] w-full rounded border px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500 lg:w-[80%]"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <textarea
                    name="feedback"
                    placeholder="Write us your feedback*"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    required
                    className="h-[200px] w-full rounded border px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  id="zubuz-submit-btn"
                  type="submit"
                  className="w-full rounded bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
