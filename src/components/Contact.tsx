import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "dltfxz@gmail.com",
      href: "#",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+62 878 5793 5765",
      href: "https/wa.me/6287857935765",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Lombok NTB, Indonesia",
      href: null,
    },
  ];

  return (
    <section id="contact">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title gradient-text"
        >
          Get In Touch
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gray-800/30 border border-gray-800 rounded-xl p-4 flex items-center gap-4"
              >
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <info.icon className="text-primary text-lg" />
                </div>
                <div className="min-w-0">
                  <p className="text-gray-400 text-xs">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-white text-sm hover:text-primary transition-colors truncate block"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white text-sm truncate">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form Cards */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Name Card */}
              <div className="bg-gray-800/30 border border-gray-800 focus-within:border-primary/50 rounded-xl p-4 transition-all">
                <label
                  htmlFor="name"
                  className="flex items-center gap-2 text-gray-400 text-sm mb-2"
                >
                  <FiUser size={16} />
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-transparent text-white placeholder-gray-600 focus:outline-none text-sm"
                  required
                />
              </div>

              {/* Email Card */}
              <div className="bg-gray-800/30 border border-gray-800 focus-within:border-primary/50 rounded-xl p-4 transition-all">
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 text-gray-400 text-sm mb-2"
                >
                  <FiMail size={16} />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-transparent text-white placeholder-gray-600 focus:outline-none text-sm"
                  required
                />
              </div>
            </div>

            {/* Message Card */}
            <div className="bg-gray-800/30 border border-gray-800 focus-within:border-primary/50 rounded-xl p-4 transition-all">
              <label
                htmlFor="message"
                className="flex items-center gap-2 text-gray-400 text-sm mb-2"
              >
                <FiSend size={16} />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-transparent text-white placeholder-gray-600 focus:outline-none text-sm resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
            onClick={() => {alert(`Chat aja lek lewat Whatsapp`)}}
              type="submit"
              className="w-full bg-gradient-to-r bg-primary hover:bg-secondary text-white py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-primary/25 font-medium"
            >
              <FiSend />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
