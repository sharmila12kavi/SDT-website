"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Instagram, Facebook } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    schoolCollege: "",
    contactPerson: "",
    designation: "",
    location: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your enquiry! Our team will get back to you soon.")
    setFormData({
      schoolCollege: "",
      contactPerson: "",
      designation: "",
      location: "",
      email: "",
      phone: "",
      message: "",
    })
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
                Enquiry for Schools & Colleges – Robotics, AI, STEM & Placement Training
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Partner with <strong>Skill Decode Tech</strong> to bring{" "}
                <strong>Robotics, AI Mastery, STEM Education</strong> for schools and{" "}
                <strong>Practical Programming with Placement Training</strong> for colleges. 
                Fill the form below and empower your students with future-ready skills.
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
                    Enquiry Form for Schools & Colleges
                  </CardTitle>
                  <p className="text-black-700 text-lg">
                    Fill in your institution details and let’s collaborate to shape the future of education.
                  </p>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
                    {/* School/College Name */}
                    <div className="group">
                      <label className="block text-sm font-semibold mb-2">School/College Name *</label>
                      <Input
                        name="schoolCollege"
                        value={formData.schoolCollege}
                        onChange={handleChange}
                        placeholder="Enter your School or College Name"
                        required
                        className="border-teal-400 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-300 transition-all duration-300 group-hover:shadow-md"
                      />
                    </div>

                    {/* Contact Person & Designation */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-semibold mb-2">Contact Person *</label>
                        <Input
                          name="contactPerson"
                          value={formData.contactPerson}
                          onChange={handleChange}
                          placeholder="Principal / Head of Dept / Coordinator"
                          required
                          className="border-teal-400 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-300 transition-all duration-300 group-hover:shadow-md"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-sm font-semibold mb-2">Designation</label>
                        <Input
                          name="designation"
                          value={formData.designation}
                          onChange={handleChange}
                          placeholder="Eg: Principal, HOD, Professor"
                          className="border-teal-400 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-300 transition-all duration-300 group-hover:shadow-md"
                        />
                      </div>
                    </div>

                    {/* Location */}
                    <div className="group">
                      <label className="block text-sm font-semibold mb-2">Location *</label>
                      <Input
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="City, State"
                        required
                        className="border-teal-400 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-300 transition-all duration-300 group-hover:shadow-md"
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-semibold mb-2">Email *</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="institution@example.com"
                          required
                          className="border-teal-400 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-300 transition-all duration-300 group-hover:shadow-md"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-sm font-semibold mb-2">Phone *</label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Official contact number"
                          required
                          className="border-teal-400 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition-all duration-300 group-hover:shadow-md"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="group">
                      <label className="block text-sm font-semibold mb-2">Message *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements (Robotics Lab, AI training, STEM programs, placement workshops)..."
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
                      Submit Enquiry
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
              

              {/* Social Media */}
              <div className="space-y-8">
                <Card className="border-0 shadow-xl from-emerald-300 via-sky-400 to-purple-500 animate-gradient-x rounded-2xl shadow-lg transition-all duration-500 hover:scale-[1.02]">
                  <CardContent className="p-8">
                    {/* Why Choose Us (Schools & Colleges) */}
<div className="space-y-8">
  <Card className="border-0 shadow-xl">
    <CardContent className="p-8">
      <h3 className="text-xl font-semibold mb-4">Why Choose Skill Decode Tech</h3>

      <div className="rounded-2xl p-6 bg-gradient-to-r from-emerald-100 via-sky-200 to-purple-300 transition-all duration-700 hover:shadow-2xl hover:-translate-y-1">
        <p className="text-gray-800 mb-4">
          We partner with schools and colleges to deliver <strong>Robotics</strong>, <strong>AI Mastery</strong>, and
          <strong> STEM Education</strong> for schools — plus <strong>practical programming</strong> and
          <strong> placement training</strong> for colleges.
        </p>

        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start animate-fade-in-up" style={{ animationDelay: "0ms" }}>
            <span className="text-green-600 font-bold mr-2">✔</span>
            Hands-on learning with practical projects
          </li>
          <li className="flex items-start animate-fade-in-up" style={{ animationDelay: "150ms" }}>
            <span className="text-green-600 font-bold mr-2">✔</span>
            Study materials and robotics kits designed for school students
          </li>
          <li className="flex items-start animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <span className="text-green-600 font-bold mr-2">✔</span>
            Internships, interview preparation, and placement support for college students
          </li>
          <li className="flex items-start animate-fade-in-up" style={{ animationDelay: "450ms" }}>
            <span className="text-green-600 font-bold mr-2">✔</span>
            Interactive workshops and webinars for students & teachers
          </li>
          <li className="flex items-start animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            <span className="text-green-600 font-bold mr-2">✔</span>
            Annual School Tech Expo to showcase student innovations
          </li>
        </ul>
      </div>
    </CardContent>
  </Card>
</div>


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
      </main>

      <Footer />
    </div>
  )
}
