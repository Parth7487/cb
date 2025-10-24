import { useState } from "react";
import { Mail, User, MessageSquare, Phone } from "lucide-react";

interface ContactFormProps {
  onSubmit?: (formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2"
          >
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-2.5 sm:top-3 w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-xs sm:text-sm"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2"
          >
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-2.5 sm:top-3 w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-xs sm:text-sm"
            />
          </div>
        </div>
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2"
        >
          Phone Number
        </label>
        <div className="relative">
          <Phone className="absolute left-3 top-2.5 sm:top-3 w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 (000) 000-0000"
            className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-xs sm:text-sm"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2"
        >
          Message *
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-2.5 sm:top-3 w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Tell us about your inquiry..."
            rows={4}
            className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white resize-none text-xs sm:text-sm"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200 text-xs sm:text-sm"
      >
        Send Message
      </button>

      {/* Success Message */}
      {isSubmitted && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm text-center">
          Thank you! Your message has been sent successfully. We&apos;ll be in
          touch soon.
        </div>
      )}
    </form>
  );
}
