import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// ---------- Icons ----------
const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.75 4a9 9 0 0110.5 0M7.75 4a9 9 0 00-3.296 5.028M7.75 4V2.5m10.5 1.5V2.5m-8.5 13.5h5.75m-5.75 0a2.5 2.5 0 01-2.5-2.5V12.5a2.5 2.5 0 012.5-2.5h5.75a2.5 2.5 0 012.5 2.5v1.25a2.5 2.5 0 01-2.5 2.5m-5.75 0a2.5 2.5 0 00-2.5 2.5v1.25a2.5 2.5 0 002.5 2.5h5.75a2.5 2.5 0 002.5-2.5V18.5a2.5 2.5 0 00-2.5-2.5m-5.75 0v-1.25" />
  </svg>
);

const MapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m-6 0l6-3m6 3l-6-3" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

// ---------- Info Item ----------
const ContactInfoItem: React.FC<{ icon: React.ReactNode; children: React.ReactNode }> = ({ icon, children }) => (
  <div className="flex items-center gap-6">
    <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-md flex items-center justify-center">{icon}</div>
    <div>{children}</div>
  </div>
);

// ---------- Notification Card ----------
const NotificationCard: React.FC<{ type: "success" | "error"; message: string }> = ({ type, message }) => (
  <div
    className={`fixed top-5 right-5 z-[9999] px-6 py-4 rounded-lg shadow-xl text-white text-lg font-semibold animate-fade-in-up
      ${type === "success" ? "bg-green-600" : "bg-red-600"}`}
  >
    {message}
  </div>
);

// ---------- Main Component ----------
const ContactSection: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        form.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setNotification({ type: "success", message: "✅ Message sent successfully! Thank you 😊" });
        form.current?.reset();
      })
      .catch(() => {
        setNotification({ type: "error", message: "❌ Failed to send message. Please try again." });
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => setNotification(null), 3000);
      });
  };

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: "#0e387a", color: "#9fafca" }}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-4">CONTACT</h2>
        <p className="text-center mb-12">GET IN TOUCH</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto animate-fade-in-up">
          {/* Left Column */}
          <div className="space-y-8">
            <ContactInfoItem icon={<GlobeIcon />}>
              <a href="mailto:maheshm.fsd@gmail.com" className="text-lg hover:underline">
                maheshm.fsd@gmail.com
              </a>
            </ContactInfoItem>
            <ContactInfoItem icon={<MapIcon />}>
              <p className="text-lg">
                2/67A , South Street <br /> Sillupanur(po), Ariyalur, Pin: 621730
              </p>
            </ContactInfoItem>
            <ContactInfoItem icon={<PhoneIcon />}>
              <a href="tel:+917397015624" className="text-lg hover:underline">
                +91 7397015624
              </a>
            </ContactInfoItem>
          </div>

          {/* Right Column: Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <input type="text" name="name" placeholder="Name" required className="w-full bg-gray-100 p-4 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition" />
            </div>
            <div>
              <input type="email" name="email" placeholder="Email" required className="w-full bg-gray-100 p-4 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition" />
            </div>
            <div>
              <input type="text" name="subject" placeholder="Subject" required className="w-full bg-gray-100 p-4 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition" />
            </div>
            <div>
              <textarea name="message" placeholder="Message" rows={5} required className="w-full bg-gray-100 p-4 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-600 transition-colors shadow-md text-lg"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* ✅ Notification Card */}
      {notification && <NotificationCard type={notification.type} message={notification.message} />}
    </section>
  );
};

export default ContactSection;
