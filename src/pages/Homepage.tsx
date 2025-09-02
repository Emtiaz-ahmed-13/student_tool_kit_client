import { Footer } from "@/components/common/Footer";
import { Navbar } from "@/components/common/Navbar";
import GlassButton from "@/components/ui/liquid-glass";
import { SUBJECTS } from "@/constants";
import { cn } from "@/utils";
import React from "react";

// Hero Section Component
const HeroSection: React.FC<{ onAuthClick: () => void }> = ({
  onAuthClick,
}) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16 animate-fade-in"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Your Ultimate
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse-slow">
              {" "}
              Student{" "}
            </span>
            Companion
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-100">
            Master Physics, Mathematics, Computer Science, and Chess with our
            comprehensive learning platform designed for academic excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-200">
            <GlassButton
              onClick={onAuthClick}
              size="lg"
              className="w-full sm:w-auto hover-scale"
            >
              🚀 Start Learning Free
            </GlassButton>
            <GlassButton
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto hover-scale"
            >
              📖 View Demo
            </GlassButton>
          </div>
          <div className="mt-12 text-sm text-gray-400 animate-fade-in-up delay-300">
            Join 10,000+ students already excelling with Student Toolkit
          </div>
        </div>
      </div>
    </section>
  );
};

// Features Section Component
const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: "🎯",
      title: "Personalized Learning",
      description:
        "AI-powered recommendations tailored to your learning style and progress.",
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description:
        "Comprehensive analytics to monitor your academic journey and achievements.",
    },
    {
      icon: "🔬",
      title: "Interactive Tools",
      description:
        "Hands-on calculators, simulators, and visualization tools for deep understanding.",
    },
    {
      icon: "👥",
      title: "Community Support",
      description:
        "Connect with fellow students and educators in our vibrant learning community.",
    },
    {
      icon: "⚡",
      title: "Real-time Collaboration",
      description:
        "Work together on projects and assignments with real-time collaboration features.",
    },
    {
      icon: "🏆",
      title: "Achievement System",
      description:
        "Earn badges and certificates as you master different subjects and skills.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful Features for Academic Success
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to excel in your studies, from interactive
            learning tools to comprehensive progress tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Subjects Section Component
const SubjectsSection: React.FC = () => {
  return (
    <section id="subjects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Master Your Favorite Subjects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore comprehensive learning modules designed for each subject
            area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.values(SUBJECTS).map((subject, index) => (
            <div
              key={subject.id}
              className="bg-gray-900 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 hover-lift border-l-4 animate-fade-in-up hover-scale"
              style={{
                borderLeftColor: subject.color,
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="text-5xl mb-4">{subject.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {subject.name}
              </h3>
              <p className="text-gray-300 mb-6">
                {subject.id === "physics" &&
                  "Explore the fundamental laws of nature and the universe."}
                {subject.id === "mathematics" &&
                  "Master the language of numbers and logical reasoning."}
                {subject.id === "computer-science" &&
                  "Learn algorithms, programming, and computational thinking."}
                {subject.id === "chess" &&
                  "Develop strategic thinking and tactical skills."}
              </p>
              <GlassButton size="sm" className="w-full">
                Explore {subject.name}
              </GlassButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats Section Component
const StatsSection: React.FC = () => {
  const stats = [
    { number: "10,000+", label: "Active Students" },
    { number: "500+", label: "Learning Modules" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Students Worldwide
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Join thousands of students who have already transformed their
            learning experience.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up hover-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 animate-pulse-slow">
                {stat.number}
              </div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Built by Students, for Students
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Student Toolkit was created by EMTIAZ, a passionate educator and
              developer who understands the challenges students face in their
              academic journey. Our mission is to provide comprehensive,
              accessible, and engaging learning tools that help students excel
              in their studies.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              From physics simulations to chess strategy, from mathematical
              calculators to programming tutorials, we've built everything you
              need to succeed in your academic pursuits.
            </p>
            <GlassButton size="lg" className="hover-scale">
              Learn Our Story
            </GlassButton>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-center animate-fade-in-right hover-lift">
            <div className="text-6xl mb-4">👨‍🎓</div>
            <h3 className="text-2xl font-bold text-white mb-2">EMTIAZ</h3>
            <p className="text-gray-400 mb-4">Founder & Lead Developer</p>
            <p className="text-gray-300">
              "Education should be accessible, engaging, and effective. That's
              why I created Student Toolkit."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Pricing Section Component
const PricingSection: React.FC = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: [
        "Basic calculators",
        "Limited practice problems",
        "Community access",
        "Progress tracking",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Student",
      price: "$9",
      period: "per month",
      features: [
        "All calculators & tools",
        "Unlimited practice problems",
        "Priority support",
        "Advanced analytics",
        "Offline access",
        "Custom study plans",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Institution",
      price: "$49",
      period: "per month",
      features: [
        "Everything in Student",
        "Classroom management",
        "Bulk user accounts",
        "Custom branding",
        "API access",
        "Dedicated support",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your Learning Plan
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Start free and upgrade as you grow. All plans include access to our
            core learning tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "bg-gray-900 rounded-xl p-8 relative hover-lift animate-fade-in-up",
                plan.popular
                  ? "ring-2 ring-blue-500 shadow-xl"
                  : "shadow-lg hover:shadow-xl transition-shadow duration-300",
                `delay-${index * 100}`
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-white mb-1">
                  {plan.price}
                  <span className="text-base font-normal text-gray-400">
                    /{plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center animate-fade-in-left"
                  >
                    <svg
                      className="h-5 w-5 text-green-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <GlassButton
                size="lg"
                className="w-full hover-scale"
                variant={plan.popular ? "default" : "subtle"}
              >
                {plan.cta}
              </GlassButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-center animate-fade-in-up">
                <div className="text-2xl mr-4">📧</div>
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <div className="text-gray-400">
                    support@studenttoolkit.com
                  </div>
                </div>
              </div>
              <div className="flex items-center animate-fade-in-up delay-100">
                <div className="text-2xl mr-4">💬</div>
                <div>
                  <div className="font-semibold text-white">Discord</div>
                  <div className="text-gray-400">Join our community server</div>
                </div>
              </div>
              <div className="flex items-center animate-fade-in-up delay-200">
                <div className="text-2xl mr-4">🐦</div>
                <div>
                  <div className="font-semibold text-white">Twitter</div>
                  <div className="text-gray-400">@StudentToolkit</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 animate-fade-in-right">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              <GlassButton size="lg" className="w-full hover-scale">
                Send Message
              </GlassButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Homepage Component
export const Homepage: React.FC<{ onAuthClick?: () => void }> = ({
  onAuthClick,
}) => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar onAuthClick={onAuthClick} />
      <HeroSection onAuthClick={onAuthClick || (() => {})} />
      <FeaturesSection />
      <SubjectsSection />
      <StatsSection />
      <AboutSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Homepage;
