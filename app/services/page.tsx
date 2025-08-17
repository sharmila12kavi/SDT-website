"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Cpu,
  Smartphone,
  Zap,
  Globe,
  Users,
  Award,
  Monitor,
  Palette,
  Search,
  ArrowRight,
  Briefcase,
  Target,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ApplicationModal from "@/components/application-modal"
import AnimatedBackground from "@/components/animated-background"

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("courses")
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState("")

  const courseServices = [
    {
      icon: Globe,
      title: "Web Development Training",
      description:
        "Comprehensive web development courses covering HTML, CSS, JavaScript, React, and backend technologies",
      features: ["Frontend Development", "Backend Development", "Database Management", "Deployment"],
      duration: "4-6 months",
      price: "Not Mentioned",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Learn to create mobile applications for iOS and Android using Flutter and React Native",
      features: ["Flutter Development", "React Native", "UI/UX Design", "App Store Deployment"],
      duration: "3-5 months",
      price: "Not Mentioned",
    },
    {
      icon: Cpu,
      title: "Robotics & IoT Training",
      description: "Hands-on training in robotics, Arduino programming, and Internet of Things development",
      features: ["Arduino Programming", "Sensor Integration", "IoT Protocols", "Hardware Design"],
      duration: "2-4 months",
      price: "Not Mentioned",
    },
    {
      icon: Code,
      title: "Programming Languages",
      description: "Master popular programming languages like Python, Java, C++, and JavaScript",
      features: ["Python", "Java", "C++", "JavaScript", "Data Structures"],
      duration: "3-4 months",
      price: "Not Mentioned",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Learn user interface and user experience design with industry-standard tools",
      features: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      duration: "3-4 months",
      price: "Not Mentioned",
    },
    {
      icon: Award,
      title: "Certification Programs",
      description: "Industry-recognized certification programs to boost your career prospects",
      features: ["Industry Certificates", "Project Portfolio", "Career Guidance", "Interview Prep"],
      duration: "1-2 months",
      price: "Not Mentioned",
    },
  ]

  const itServices = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Custom website development for businesses, from simple landing pages to complex web applications",
      features: ["Responsive Design", "E-commerce", "CMS Integration", "SEO Optimization"],
      duration: "1-8 weeks",
      price: "₹3,000 - ₹50,000",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Professional mobile app development services for startups and enterprises",
      features: ["Native Apps", "Cross-platform", "Backend Integration", "App Store Publishing"],
      duration: "4-16 weeks",
      price: "₹50,000 - ₹5,00,000",
    },
    {
      icon: Zap,
      title: "IoT Solutions",
      description: "Complete IoT solutions for smart homes, offices, and industrial applications",
      features: ["Hardware Design", "Firmware Development", "Cloud Integration", "Mobile Apps"],
      duration: "6-20 weeks",
      price: "₹75,000 - ₹10,00,000",
    },
    {
      icon: Monitor,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs and requirements",
      features: ["Desktop Applications", "Web Applications", "Database Design", "API Development"],
      duration: "4-24 weeks",
      price: "₹40,000 - ₹8,00,000",
    },
    {
      icon: Users,
      title: "IT Consulting",
      description: "Expert IT consulting services to help businesses leverage technology effectively",
      features: ["Technology Assessment", "Digital Transformation", "System Integration", "Training"],
      duration: "1-12 weeks",
      price: "₹20,000 - ₹2,00,000",
    },
    {
      icon: Award,
      title: "Maintenance & Support",
      description: "Ongoing maintenance and support services for your digital products and systems",
      features: ["Bug Fixes", "Updates", "Performance Optimization", "24/7 Support"],
      duration: "Ongoing",
      price: "₹5,00 - ₹50,000/month",
    },
  ]

  const digitalMarketingServices = [
    {
      icon: Search,
      title: "Search Engine Optimization",
      description: "Improve your website's visibility on search engines and drive organic traffic",
      features: ["Keyword Research", "On-page SEO", "Link Building", "Analytics"],
      duration: "3-6 months",
      price: "Not Mentioned",
    },
    {
      icon: Monitor,
      title: "Social Media Marketing",
      description: "Build your brand presence on social media platforms and engage with your audience",
      features: ["Content Creation", "Social Media Management", "Paid Advertising", "Analytics"],
      duration: "Ongoing",
      price: "₹10,000 - ₹40,000/month",
    },
    {
      icon: Target,
      title: "Google Ads Management",
      description: "Professional Google Ads campaign management to maximize your ROI",
      features: ["Campaign Setup", "Keyword Research", "Ad Creation", "Performance Optimization"],
      duration: "Ongoing",
      price: "₹5,000 - ₹30,000/month",
    },
    {
      icon: Palette,
      title: "Content Marketing",
      description: "Create engaging content that attracts and converts your target audience",
      features: ["Blog Writing", "Video Content", "Infographics", "Content Strategy"],
      duration: "Ongoing",
      price: "₹2,000 - ₹35,000/month",
    },
    {
      icon: Globe,
      title: "Website Analytics",
      description: "Track and analyze your website performance to make data-driven decisions",
      features: ["Google Analytics Setup", "Conversion Tracking", "Custom Reports", "Insights"],
      duration: "1-2 weeks setup",
      price: "₹5,000 - ₹20,000",
    },
    {
      icon: Briefcase,
      title: "Digital Strategy Consulting",
      description: "Comprehensive digital marketing strategy development for your business",
      features: ["Market Analysis", "Competitor Research", "Strategy Development", "Implementation Plan"],
      duration: "2-4 weeks",
      price: "₹25,000 - ₹75,000",
    },
  ]

  const getCurrentServices = () => {
    switch (activeTab) {
      case "courses":
        return courseServices
      case "it":
        return itServices
      case "marketing":
        return digitalMarketingServices
      default:
        return courseServices
    }
  }

  const getTabIcon = (tabId: string) => {
    switch (tabId) {
      case "courses":
        return "🎓"
      case "it":
        return "💻"
      case "marketing":
        return "📢"
      default:
        return "🎓"
    }
  }

  const handleRequestService = (serviceTitle: string) => {
    setSelectedService(serviceTitle)
    setModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <AnimatedBackground />
      <Navbar />

      <main className="pt-20">
        {/* Header Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent drop-shadow-lg transition-transform duration-300 hover:scale-105">
                Our Services
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions for individuals, schools, and businesses
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-full p-2 shadow-lg border">
                <div className="flex space-x-2">
                  {[
                    { id: "courses", label: "Courses" },
                    { id: "it", label: "IT Services" },
                    { id: "marketing", label: "Digital Marketing" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                        activeTab === tab.id
                          ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg"
                          : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      <span className="mr-2">{getTabIcon(tab.id)}</span>
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getCurrentServices().map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 overflow-hidden bg-white animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium text-gray-700">Duration:</span>
                        <Badge variant="secondary">{service.duration}</Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium text-gray-700">Price:</span>
                        <Badge className="bg-green-100 text-green-800">{service.price}</Badge>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-medium text-gray-700 mb-2">Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.features.map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button
                      onClick={() => handleRequestService(service.title)}
                      className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-sky-600 text-white transition-all duration-300 group-hover:shadow-lg rounded-full"
                    >
                      Request Service
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Contact us today to discuss your requirements and get a customized solution for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-full transition-all duration-300 bg-transparent shadow-lg hover:shadow-xl"
                >
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ApplicationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={selectedService} type="service" />
    </div>
  )
}
