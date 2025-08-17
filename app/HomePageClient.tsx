"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, Smartphone, Globe, MapPin, Phone, Mail, Target, Eye, ArrowRight, Clock, Star, Bot } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import AnimatedBackground from "@/components/animated-background"

export default function HomePageClient() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const courses = [
    {
      id: 1,
      title: "Web Development",
      description: "Master HTML, CSS, JavaScript, React, and Node.js to build modern web applications",
      duration: "4-6 months",
      level: "Beginner to Advanced",
      video: "/videos/web Development Video.mp4",
      //image: "/placeholder.svg?height=250&width=400",
     // icon: Globe,
      color: "from-blue-500 to-cyan-500",
      skills: ["HTML/CSS", "JavaScript", "React", "Node.js"],
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Create stunning mobile apps for iOS and Android using Flutter and React Native",
      duration: "3-5 months",
      level: "Intermediate",
      //image: "/placeholder.svg?height=250&width=400",
      video: "/videos/mobile app Video.mp4",
      //icon: Smartphone,
      color: "from-blue-500 to-cyan-500",
      skills: ["Flutter", "React Native", "Dart", "Firebase"],
    },
    {
      id: 3,
      title: "Robotics & Arduino",
      description: "Build intelligent robots and IoT devices with hands-on hardware programming",
      duration: "2-4 months",
      level: "Beginner",
      //image: "/placeholder.svg?height=250&width=400",
      video: "/videos/robotics.mp4",
      //icon: Cpu,
      color: "from-blue-500 to-cyan-500",
      skills: ["Arduino", "Sensors", "C++", "Circuit Design"],
    },
    {
    id: 4,
    title: "Artificial Intelligence",
    description: "Explore machine learning, deep learning, and AI applications with Python",
    duration: "5-7 months",
    level: "Advanced",
    //image: "/images/ai.jpg", // optional fallback background image
    // icon removed, use video instead:
    video: "/videos/ai-preview.mp4",
    color: "from-blue-500 to-cyan-500",
    skills: ["Python", "TensorFlow", "Machine Learning", "Data Science"],
  },

  ]
  const services = [
  {
    id: 1,
    title: "Static Website",
    description: "Simple and fast-loading websites — perfect for small businesses and portfolios.",
    features: ["Fast Setup", "Mobile Friendly", "Low Cost"],
    tag: "Basic",
    //color: "from-blue-400 to-indigo-600",
    video: "/videos/static.mp4",
  },
  {
    id: 2,
    title: "Dynamic Website",
    description: "Interactive websites with admin panels and real-time content updates.",
    features: ["CMS", "Database", "Scalable"],
    tag: "Advanced",
    //color: "from-green-400 to-emerald-600",
    video: "/videos/dynamic-website.mp4",
  },
  {
    id: 3,
    title: "E-commerce Website",
    description: "Complete online store solutions with secure payments and product management.",
    features: ["Cart System", "Online Payments", "Product Management"],
    tag: "Premium",
    //color: "from-pink-500 to-red-600",
    video: "/videos/ecommerce.mp4",
  },
  {
    id: 4,
    title: "Google Profile Creation",
    description: "Get your business listed on Google for visibility and customer trust.",
    features: ["Google Maps", "Reviews", "Business Listing"],
    tag: "Popular",
    //color: "from-yellow-400 to-orange-500",
    video: "/videos/gprofile.mp4",
  },
];

const clientTestimonials = [
  {
  logo: "/images/coffee1.png",
  company: "Karupatti Coffee",
  industry: "Food & Beverages",
  rating: 5,
  feedback:
    "Skill Decode Tech created a stylish website that beautifully showcases our traditional Karupatti Coffee. The team provided excellent support and timely delivery!",
},

  {
 // logo: "/logos/atozmobile.png",
  company: "A to Z Mobile Shop",
  industry: "Retail & Electronics",
  rating: 5,
  feedback:
    "Skill Decode Tech built us a modern website and improved our online presence. Our customer reach and sales inquiries have grown significantly!",
},

  {
    logo: "/images/food.jpg",
    company: "Xpress Foods",
    industry: "Restaurant",
    rating: 5,
    feedback:
      "The team created an easy-to-use website for our food delivery business. Smooth process and quick turnaround.",
  },
];


  const testimonials = [
    {
      name: "Sandhya",
      role: "Python Course",
      content:
        "The Python course at Skill Decode Tech built my programming skills and boosted my confidence to crack IT interviews with ease. The practical projects and expert guidance made all the difference!.",
      rating: 5,
      image: "/images/sandhya.jpeg",
    },
    {
      name: "Yamini",
      role: "Python Course",
      content:
        "I attended the Python classes and they were very helpful for me. The sessions were well-structured, easy to follow, and explained with practical examples. I gained a clear understanding of Python fundamentals and improved my problem-solving skills. Overall, it was a great learning experience that boosted my confidence in programming.",
      rating: 5,
      image: "/images/yamini.jpeg",
    },
    {
      name: "Logesh Kannan",
      role: "Python & Java Courses",
      content: "Learning both Python and Java here opened new career opportunities for me. The trainers are knowledgeable, and the hands-on sessions kept me engaged throughout.",
      rating: 5,
      image: "/images/logesh.png",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
  <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
    {/* Background Video 
    <video
      src="/videos/b1.mp4" // change this path to your actual video file
      autoPlay
      muted
      loop
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
    />

    */} 
    

    <AnimatedBackground />
    <Navbar />


      <main>
        
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up">
                <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent"
                style={{ textShadow: '2px 2px 4px rgba(68, 47, 158, 0.3)' }}>
                   Programming Courses & IT Services in chennai
                </span>
              </h1>

              <p className="text-lg font-medium text-pink-600 mb-4 animate-fade-in-up animation-delay-300"
              style={{ textShadow: '2px 2px 4px rgba(30, 44, 75, 0.3)' }}>
                FROM CODE TO CREATIVITY
              </p>

              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 leading-relaxed">
                Skill Decode Tech is a next-generation learning hub offering hands-on training & professional IT services in{" "}
                <span className="font-semibold text-blue-600">Web Development</span>,{" "}
                
                <span className="font-semibold text-blue-600">Robotics</span>,{" "}
                <span className="font-semibold text-blue-600">AI</span>,{" "}
                <span className="font-semibold text-indigo-600">IoT</span>,{" "}
                 and more — designed for students
                from <span className="font-bold">Grade 2 to College level</span>.
              </p>

              <p className="text-2xl font-bold text-pink-600 mb-8 animate-fade-in-up animation-delay-400"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                From Learning to Launching – We’re With You! {/*<span className="text-blue-600">Learn</span>, <span className="text-purple-600">Build</span>{" "}
                &  <span className="text-green-600">Evolve</span>!*/}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600 mb-12">
                <Link href="/courses">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Explore Courses
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-4 text-lg rounded-full border-2 border-sky-500 text-sky-600 hover:bg-sky-500 hover:text-white transition-all duration-300 bg-transparent shadow-lg hover:shadow-xl"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Contact Us
                  </Button>
                </Link>
              </div>

              {/* Contact Info Cards */}
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up animation-delay-800">
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <Phone className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Call Us</h3>
                    <p className="text-gray-600">9884954247</p>
                    <p className="text-gray-600">6380607261</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <Mail className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Email Us</h3>
                    <p className="text-gray-600 break-all">info@skilldecodetech.in</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <MapPin className="h-8 w-8 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Visit Us</h3>
                    <p className="text-gray-600 text-sm">
                      No:60/33, Pillayar Kovil Street, Zamin Royapettah, Chromepet, Chennai – 600044
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* services Section */}
        <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <header className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-blue-700 bg-clip-text text-transparent">
        Our Web Services
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        We design and build professional websites for your business needs — from simple static sites to dynamic e-commerce platforms, and help you grow visibility with Google Business Profiles.
      </p>
    </header>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <Card
          key={service.id}
          className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 overflow-hidden bg-white"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="relative overflow-hidden">
            
            {/* Video Instead of Image */}
            <video
              src={service.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <Badge className="absolute top-3 right-3 bg-white/90 text-gray-800 font-medium">
              {service.tag}
            </Badge>
          </div>

          <CardHeader className="pb-2">
            <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
              {service.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="pt-0">
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-1 mb-4">
              {service.features.slice(0, 3).map((feature, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>

            <a href="tel:+919884954247" className="w-full">
  <Button className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-green-700 text-white transition-all duration-300 group-hover:shadow-lg rounded-full">
    Enquiry
    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
  </Button>
</a>

          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


        {/* Courses Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                Programming Courses for beginners
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore flexible online programming courses like Python and web development — even beginners or students after 12th can start and build a career with placement support.
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {courses.map((course, index) => (
                <Card
                  key={course.id}
                  className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 overflow-hidden bg-white"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-90`}></div>
                    <img
                      //src={course.image || "/placeholder.svg"}
                      alt={`${course.title} course illustration`}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
  {course.video && (
    <video
      src={course.video}
      className="absolute inset-0 w-full h-full object-cover rounded shadow-lg"
      autoPlay
      muted
      loop
    />
  )}
</div>


                    <Badge className="absolute top-3 right-3 bg-white/90 text-gray-800 font-medium">
                      {course.level}
                    </Badge>
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
                    </div>

                    <Button className="w-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-emerald-600 text-white transition-all duration-300 group-hover:shadow-lg rounded-full">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/courses">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  View All Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        {/* Client Testimonials Section */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <header className="text-center mb-16">
      <h2
        className="text-3xl sm:text-4xl font-bold mb-4"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
      >
        What Our Clients Say
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Trusted by businesses to build their digital presence
      </p>
    </header>

    <div className="grid md:grid-cols-3 gap-8">
      {clientTestimonials.map((client, index) => (
        <Card
          key={index}
          className="border-0 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <CardContent className="p-6 text-center">
            <img
              src={client.logo || "/placeholder.svg"}
              alt={`${client.company} logo`}
              className="w-20 h-20 mx-auto mb-4 object-contain"
            />
            <div className="mb-3">
              {[...Array(client.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 text-yellow-400 inline-block"
                />
              ))}
            </div>
            <blockquote className="text-gray-600 italic mb-4">
              "{client.feedback}"
            </blockquote>
            <div>
              <p className="font-semibold">{client.company}</p>
              <p className="text-sm text-gray-500">{client.industry}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(68, 47, 158, 0.3)' }}>What Our Students Say</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Real success stories from our graduates</p>
            </header>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={`${testimonial.name} profile picture`}
                      className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                    />
                    <div className="mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 inline-block" />
                      ))}
                    </div>
                    <blockquote className="text-gray-600 italic mb-4">"{testimonial.content}"</blockquote>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent drop-shadow-lg">
  About Skill Decode Tech
</h2>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  At Skill Decode Tech, we empower the next generation with cutting-edge technology skills and deliver professional IT services to help businesses thrive. Our mission is to bridge the gap between traditional education and industry demands through hands-on, practical learning experiences while offering end-to-end IT solutions, including web development, software design, and digital transformation services.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start space-x-3">
                    <Target className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Our Mission</h3>
                      <p className="text-gray-600">
  Our mission is to deliver high-quality programming courses and professional IT services, making technology skills and solutions accessible to learners and businesses of all sizes and ages.
</p>

                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Eye className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Our Vision</h3>
                      <p className="text-gray-600">
  To be India’s leading hub for programming courses, IT services, and innovation — empowering the next generation of tech professionals and helping businesses thrive in the digital era.
</p>

                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="/about">
                    <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-sky-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                      Learn More About Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative">
  <video
    src="/videos/bottom1.mp4" // change to your video file name
    className="rounded-2xl shadow-2xl w-full h-[300px] lg:h-[500px] object-cover"
    autoPlay
    muted
    loop
    playsInline
  />
</div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
