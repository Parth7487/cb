import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);

  const handleContactFormSubmit = (formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => {
    console.log("Form submitted:", formData);
    setContactFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-muted py-8 sm:py-12 px-3 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 font-display">
            Get In Touch
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Have questions? We&apos;re here to help. Send us a message.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex-1 py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-lg p-6 sm:p-8 shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 font-display">
                Send us a Message
              </h2>
              <ContactForm onSubmit={handleContactFormSubmit} />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Email */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-muted rounded-lg p-3 flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                      Email
                    </h4>
                    <a
                      href="mailto:Sale@cbgloble.in"
                      className="text-primary hover:text-primary-dark transition-colors text-xs sm:text-sm break-all"
                    >
                      Sale@cbgloble.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-muted rounded-lg p-3 flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                      Phone
                    </h4>
                    <a
                      href="tel:+91000000000"
                      className="text-primary hover:text-primary-dark transition-colors text-xs sm:text-sm"
                    >
                      +91 (000) 000-0000
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-muted rounded-lg p-3 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                      Address
                    </h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-muted rounded-lg p-3 flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-3 text-sm sm:text-base">
                      Business Hours
                    </h4>
                    <div className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                      <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p>Sat: 10:00 AM - 4:00 PM</p>
                      <p>Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919999999999?text=Hello%20CB%20GLOBLE%20INDIA"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-center text-sm sm:text-base"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
