import React, { useState } from 'react';

const Help = () => {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    setForm({ name: '', contact: '', message: '' });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-8 mb-10">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">Help & FAQ</h1>

        <div className="space-y-6 text-gray-800">
          <div>
            <p className="font-semibold mb-1">📌 How do I register?</p>
            <p>Click on the Register link at the top and fill in your details.</p>
          </div>

          <div>
            <p className="font-semibold mb-1">📌 How do I view tasks?</p>
            <p>After logging in, go to the Home page or Tasks section to view and manage your tasks.</p>
          </div>

          <div>
            <p className="font-semibold mb-1">📌 Can I upload course summaries?</p>
            <p>Yes, go to the Summaries page and use the upload section. You can also choose a template for better formatting.</p>
          </div>

          <div>
            <p className="font-semibold mb-1">📌 Is my data saved?</p>
            <p>Your tasks and uploads are saved in your browser using localStorage. Make sure not to clear site data.</p>
          </div>

          <div>
            <p className="font-semibold mb-1">📌 I need more help. What can I do?</p>
            <p>You can fill in the form below to contact support or leave feedback.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Leave a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="contact"
            placeholder="Email or Phone"
            value={form.contact}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your message..."
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Help;