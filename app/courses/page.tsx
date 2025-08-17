"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowRight, Globe, Smartphone, Cpu, Bot, Zap, Printer, Palette, Monitor } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ApplicationModal from "@/components/application-modal"
import AnimatedBackground from "@/components/animated-background"

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState("schools")
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState("")

  const schoolCourses = [
    {
      id: 1,
      title: "Scratch Programming",
      description: "Creative coding for children with interactive stories and games",
      duration: "1 month",
      level: "Beginner",
      image: "/images/scratch.jpg",
      
      color: "from-pink-500 to-rose-500",
      skills: ["Visual Programming", "Logic Building", "Creativity", "Problem Solving"],
      ageGroup: "Grade 2-8",
    },
    {
      id: 2,
      title: "mBlock Programming",
      description: "Visual programming for kids using drag-and-drop blocks",
      duration: "1 month",
      level: "Beginner",
      image: "/images/mblock1.jpg",
      icon: Bot,
      color: "from-green-500 to-teal-500",
      skills: ["Block Programming", "Robotics Basics", "Arduino", "Sensors"],
      ageGroup: "Grade 5-10",
    },
    {
      id: 3,
      title: "Robotics & Arduino",
      description: "Build intelligent robots and IoT devices with hands-on hardware programming",
      duration: "2 months",
      level: "Beginner",
      image: "/images/robotics.jpg",
      icon: Cpu,
      color: "from-orange-500 to-red-500",
      skills: ["Arduino", "Sensors", "C++", "Circuit Design"],
      ageGroup: "Grade 8-12",
    },
    {
      id: 4,
      title: "3D Printing & Design",
      description: "Design and print 3D models, learn CAD software and prototyping",
      duration: "2 months",
      level: "Beginner",
      image: "/images/3dprinting.jpg",
      icon: Printer,
      color: "from-indigo-500 to-purple-500",
      skills: ["CAD Design", "3D Modeling", "Printing", "Prototyping"],
      ageGroup: "Grade 3-12",
    },
    {
      id: 5,
      title: "Mobile App Development",
      description: "Learn creative problem-solving through coding, robotics, and hands-on STEM activities",
      duration: "1 months",
      level: "Beginner",
      image: "/images/mit1.jpg",
      icon: Printer,
      color: "from-indigo-500 to-purple-500",
      skills: ["Scratch Programming", "STEM Projects", "Robotics Basics", "Creative Problem-Solving"
],
      ageGroup: "Grade 3-12",
    },
    {
      id: 6,
      title: "MS Office",
      description: "Master Word, Excel, PowerPoint, and essential productivity tools for school and workplace success.",
      duration: "2 months",
      level: "Beginner",
      image: "/images/msoffice.jpg",
      icon: Printer,
      color: "from-indigo-500 to-purple-500",
      skills: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Office Productivity"
],
      ageGroup: "Grade 7-12",
    },
    {
      id: 7,
      title: "Abacus",
      description: "Develop lightning-fast mental math skills and boost concentration through fun abacus techniques",
      duration: "2 months",
      level: "Beginner",
      image: "/images/abacus.jpg",
      icon: Printer,
      color: "from-indigo-500 to-purple-500",
      skills: ["Basic Arithmetic", "Mental Math", "Concentration Skills", "Speed Calculation"
],
      ageGroup: "Grade 1-3",
    },
    {
      id: 8,
      title: "Internet of Things",
      description: "Build smart devices, connect sensors, and explore real-world IoT applications using modern tech",
      duration: "2 months",
      level: "Beginner",
      image: "/images/iot.jpg",
      icon: Printer,
      color: "from-indigo-500 to-purple-500",
      skills: ["Embedded Systems", "Sensor Integration", "IoT Protocols", "Cloud Connectivity"
],
      ageGroup: "Grade 6-12",
    },
  ]

  const collegeCourses = [
    {
      id: 5,
      title: "Web Development",
      description: "Master HTML, CSS, JavaScript, React, and Node.js to build modern web applications",
      duration: "4-6 months",
      level: "Beginner to Advanced",
       image: "/images/web.jpg",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      skills: ["HTML/CSS", "JavaScript", "React", "Node.js"],
      ageGroup: "College Students",
    },
    {
      id: 6,
      title: "Mobile App Development",
      description: "Create stunning mobile apps for iOS and Android using Flutter and React Native",
      duration: "3-5 months",
      level: "Intermediate",
     
      image: "/images/app.jpg",
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
      skills: ["Flutter", "React Native", "Dart", "Firebase"],
      ageGroup: "College Students",
    },
    {
      id: 7,
      title: "Artificial Intelligence",
      description: "Explore machine learning, deep learning, and AI applications with Python",
      duration: "5-7 months",
      level: "Advanced",
      image: "/images/ai.jpg",
      icon: Bot,
      color: "from-green-500 to-teal-500",
      skills: ["Python", "TensorFlow", "Machine Learning", "Data Science"],
      ageGroup: "College Students",
    },
    {
      id: 8,
      title: "IoT Development",
      description: "Connect devices and create smart solutions using Internet of Things",
      duration: "3-4 months",
      level: "Intermediate",
      image: "/images/iot.jpg",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      skills: ["ESP32", "Sensors", "Cloud Integration", "MQTT"],
      ageGroup: "College Students",
    },
  ]

  const onlineCourses = [
    {
      id: 9,
      title: "Full Stack Web Development",
      description: "Complete web development bootcamp with MERN stack",
      duration: "6 months",
      level: "Beginner to Advanced",
      image: "/images/web1.jpg",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      skills: ["MongoDB", "Express", "React", "Node.js"],
      ageGroup: "All Ages",
    },
    {
      id: 10,
      title: "Digital Marketing",
      description: "Learn SEO, social media marketing, and digital advertising strategies",
      duration: "2-3 months",
      level: "Beginner",
      image: "/images/dm.jpg",
      icon: Monitor,
      color: "from-cyan-500 to-blue-500",
      skills: ["SEO", "Social Media", "Google Ads", "Analytics"],
      ageGroup: "All Ages",
    },
    {
      id: 11,
      title: "UI/UX Design",
      description: "Create beautiful and user-friendly interfaces with modern design principles",
      duration: "3-4 months",
      level: "Beginner to Intermediate",
      image: "/images/ui.jpg",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      ageGroup: "All Ages",
    },
    {
      id: 12,
      title: "Python Programming",
      description: "Learn Python from basics to advanced concepts with hands-on projects",
      duration: "3 months",
      level: "Beginner to Advanced",
      image: "/images/on1.jpg",
      icon: Bot,
      color: "from-green-500 to-teal-500",
      skills: ["Python Basics", "Data Structures", "Web Scraping", "APIs"],
      ageGroup: "All Ages",
    },
    

  ]

  const getCurrentCourses = () => {
    switch (activeTab) {
      case "schools":
        return schoolCourses
      case "colleges":
        return collegeCourses
      case "online":
        return onlineCourses
      default:
        return schoolCourses
    }
  }

  const getTabBackground = () => {
    switch (activeTab) {
      case "schools":
        return "bg-gradient-to-br from-pink-50 to-purple-50"
      case "colleges":
        return "bg-gradient-to-br from-blue-50 to-cyan-50"
      case "online":
        return "bg-gradient-to-br from-green-50 to-teal-50"
      default:
        return "bg-gradient-to-br from-pink-50 to-purple-50"
    }
  }

  const handleEnrollClick = (courseTitle: string) => {
    setSelectedCourse(courseTitle)
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
  Our Courses
</h1>

              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology courses designed for different skill levels and age groups
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-full p-2 shadow-lg border">
                <div className="flex space-x-2">
                  {[
                    { id: "schools", label: "Schools", icon: "🎒" },
                    { id: "colleges", label: "Colleges", icon: "🎓" },
                    { id: "online", label: "Online Courses", icon: "💻" },
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
                      <span className="mr-2">{tab.icon}</span>
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className={`py-20 ${getTabBackground()}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {getCurrentCourses().map((course, index) => (
                <Card
                  key={course.id}
                  className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 overflow-hidden bg-white animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-transparent"></div>
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    <Badge className="absolute top-3 right-3 bg-white/90 text-gray-800 font-medium">
                      {course.level}
                    </Badge>
                    <Badge className="absolute top-3 left-3 bg-blue-600 text-white">{course.ageGroup}</Badge>
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{course.description}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {course.skills.slice(0, 3).map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {course.skills.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{course.skills.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <Button
                      onClick={() => handleEnrollClick(course.title)}
                      className="w-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-emerald-600 text-white transition-all duration-300 group-hover:shadow-lg rounded-full"
                    >
                      Enroll Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
       <div className="flex justify-center mt-8 mb-4">
  <a
    href="tel:+916380607261"
    className="bg-teal-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-blue-700 animate-bounce"
  >
    Call Us for More Courses
  </a>
</div>




      </main>

      <Footer />

      <ApplicationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={selectedCourse} type="course" />
    </div>
  )
}
