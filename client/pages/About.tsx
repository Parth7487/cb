import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-muted py-8 sm:py-12 px-3 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 font-display">
            About CB GLOBLE INDIA
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Leading the way in technological innovation and business excellence
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4 font-display">
                  Our Mission
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  At CB GLOBLE INDIA, we are committed to transforming businesses through innovative technology solutions. Our mission is to empower organizations to achieve their goals with cutting-edge products and services that deliver measurable results and sustainable growth.
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 font-display">
                  Core Values
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    "Innovation - Constantly pushing boundaries and embracing new technologies",
                    "Excellence - Delivering quality in everything we do",
                    "Integrity - Building trust through transparency and accountability",
                    "Growth - Fostering mutual success for our clients and partners",
                  ].map((value, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg sm:text-xl flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="text-sm sm:text-base text-muted-foreground">
                        {value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg h-64 sm:h-80 lg:h-96">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="CB GLOBLE INDIA team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Company History */}
          <div className="bg-muted rounded-lg p-6 sm:p-8 lg:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6 font-display">
              Our Story
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Founded with a vision to revolutionize the industry, CB GLOBLE INDIA has grown to become a trusted partner for businesses seeking technological excellence. With over 15 years of experience, we have helped hundreds of companies transform their operations and achieve unprecedented growth.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Our commitment to innovation, quality, and customer satisfaction has made us a leader in the industry. We continue to invest in cutting-edge technologies and talented professionals to deliver solutions that exceed expectations.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 sm:mt-20">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "500+", label: "Happy Clients" },
              { number: "100+", label: "Projects Delivered" },
              { number: "50+", label: "Team Members" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 bg-muted rounded-lg hover:shadow-lg transition-shadow"
              >
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 font-display">
                  {stat.number}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
