"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, ArrowRight } from "lucide-react"

interface ApplicationModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  type: "course" | "internship" | "service"
}

export default function ApplicationModal({ isOpen, onClose, title, type }: ApplicationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    experience: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert(`Thank you for your interest in ${title}! We'll contact you soon.`)
    onClose()
    setFormData({ name: "", email: "", phone: "", message: "", experience: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl">
            {type === "course" && "Enroll in Course"}
            {type === "internship" && "Apply for Internship"}
            {type === "service" && "Request Service"}
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <h3 className="font-semibold text-blue-600">{title}</h3>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name *</label>
              <Input name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number *</label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                required
              />
            </div>
            {type === "internship" && (
              <div>
                <label className="block text-sm font-medium mb-2">Experience Level</label>
                <Input
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Beginner, Intermediate, or Advanced"
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium mb-2">
                {type === "course" && "Why do you want to join this course?"}
                {type === "internship" && "Why are you interested in this internship?"}
                {type === "service" && "Tell us about your requirements"}
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows={4}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-sky-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Submit Application
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
