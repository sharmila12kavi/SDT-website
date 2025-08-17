"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, ArrowRight, Instagram, Facebook } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
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
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                Get In Touch
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ready to start your tech journey? We're here to help you every step of the way.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-10 shadow-2xl rounded-3xl bg-teal/280 backdrop-blur-lg transform transition-all duration-500 hover:scale-[1.01]">
  <CardHeader className="text-center space-y-2 animate-fade-in-down">
    <CardTitle className="text-3xl font-extrabold bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">
      Send us a Message
    </CardTitle>
    <p className="text-black-700 text-lg">
      We’d love to hear from you! Fill out the form and we’ll get back to you soon.
    </p>
  </CardHeader>

  <CardContent>
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
      {/* Name & Email */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="group">
          <label className="block text-sm font-semibold mb-2">Name *</label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
            className="border-teal-400 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-300 transition-all duration-300 group-hover:shadow-md"
          />
        </div>
        <div className="group">
          <label className="block text-sm font-semibold mb-2">Email *</label>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
            className="border-teal-400 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-300 transition-all duration-300 group-hover:shadow-md"
          />
        </div>
      </div>

      {/* Phone */}
      <div className="group">
        <label className="block text-sm font-semibold mb-2">Phone</label>
        <Input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your phone number"
          className="border-teal-400 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-300 transition-all duration-300 group-hover:shadow-md"
        />
      </div>

      {/* Subject */}
      <div className="group">
        <label className="block text-sm font-semibold mb-2">Subject</label>
        <Input
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="What is this regarding?"
          className="border-teal-400 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-300 transition-all duration-300 group-hover:shadow-md"
        />
      </div>

      {/* Message */}
      <div className="group">
        <label className="block text-sm font-semibold mb-2">Message *</label>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your requirements or questions..."
          rows={5}
          required
          className="border-teal-400 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition-all duration-300 group-hover:shadow-md"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-emerald-500 via-sky-500 to-purple-500 hover:from-purple-500 hover:to-emerald-500 text-white font-bold py-4 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse"
      >
        Send Message
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </form>
  </CardContent>
</Card>



              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-3xl font-bold mb-6 relative inline-block">
  <span className="bg-gradient-to-r from-emerald-500 via-sky-500 to-purple-500 bg-clip-text text-transparent animate-gradient-text">
    Contact Information
  </span>
  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-sky-500 to-purple-500 rounded-full animate-pulse"></span>
</h3>

                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <Phone className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-lg">Phone</p>
                          <p className="text-gray-600">9884954247</p>
                          <p className="text-gray-600">6380607261</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <Mail className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-lg">Email</p>
                          <p className="text-gray-600 break-all">skilldecodetech@gmail.com</p>
                          <p className="text-gray-600 break-all">info@skilldecodetech.in</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <MapPin className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-lg">Address</p>
                          <p className="text-gray-600 leading-relaxed">
                            No:60/33, Pillayar Kovil Street,
                            <br />
                            Zamin Royapettah, Chromepet,
                            <br />
                            Chennai – 600044
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <Clock className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-lg">Office Hours</p>
                          <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                          <p className="text-gray-600">Sunday: 10:00 AM - 5:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Map Placeholder */}
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-0">
                   <div className="h-64 rounded-lg overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7776.642154765128!2d80.14340138031443!3d12.95129475455418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spillayar%20koil%20street%20%2CRadha%20Nagar%20Extension!5e0!3m2!1sen!2sin!4v1755089187863!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.instagram.com/skill_decode_tech?igsh=MXNzdmU2dWJwZDc0dQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                      >
                        <Instagram className="h-6 w-6" />
                      </a>
                      <a
                        href="https://www.facebook.com/share/1AJ5dXL1xr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                      >
                        <Facebook className="h-6 w-6" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Quick answers to common questions about our courses and services
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">What age groups do you cater to?</h3>
                  <p className="text-gray-600">
                    We offer courses for students from Grade 2 to college level, with age-appropriate curriculum and
                    teaching methods for each group.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Do you provide certificates?</h3>
                  <p className="text-gray-600">
                    Yes, we provide industry-recognized certificates upon successful completion of our courses, which
                    can boost your resume and career prospects.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Are there any prerequisites?</h3>
                  <p className="text-gray-600">
                    Most of our beginner courses have no prerequisites. For advanced courses, we'll assess your current
                    skill level and recommend the best starting point.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Do you offer placement assistance?</h3>
                  <p className="text-gray-600">
                    Yes, we provide comprehensive placement assistance including resume building, interview preparation,
                    and connections with our industry partners.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
